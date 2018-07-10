define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('lendPhoneOutputModule', ['httpMethod', 'ngStorage'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.stepNum = 0; // 当前显示的step索引值（Number类型）
            $rootScope.goBack = function(num) { // 返回（num-1）
                $rootScope.stepNum = num - 1;
            };
            $rootScope.forward = function(num) { // 返回（num+1）
                $rootScope.stepNum = num + 1;
            };
            $rootScope.detailsTerminalList = [];
        }])
        .filter('prodTypeFilter', function () {
            return function (val) {
                switch (val) {
                    case '1':
                        return '宽带';
                        break;
                    case '2':
                        return 'IPTV';
                        break;
                }
            }
        })
        .controller('lendPhoneOutputCtrl', ['$scope', '$rootScope', 'httpMethod', '$sessionStorage', function ($scope, $rootScope, httpMethod, $sessionStorage) {

            $scope.isHideInfo = true;
            $scope.hideInfo = function(){
                $scope.isHideInfo = !$scope.isHideInfo;
            };
            $scope.isHideDetail = true;
            $scope.hideDetail = function(){
                $scope.isHideDetail = !$scope.isHideDetail;
            };

            $scope.borrowOrderForm = {
                remarks: '',
                borrowUser: ''
            };
            
            //借机出库单基本信息获取接口
            httpMethod.qryBorrowOrderOutBaseinfo().then(function(rsp){
                $rootScope.borrowOrderOutBaseinfo = rsp.data;
            })

            //借机人信息查询
            httpMethod.qryBorrowUser().then(function (rsp) {
                if (rsp.success) {
                    $scope.borrowUserList = rsp.data;
                    $scope.borrowOrderForm.borrowUser = $scope.borrowUserList[0].staffId;
                }
            });

            //删除借机终端
            $scope.delTerminal = function(index){
                $rootScope.detailsTerminalList.splice(index, 1);
            };

            //串码详情
            $scope.codeDetail = function(item){
                $rootScope.showCodeInfo = item;
                $rootScope.stepNum = 2;
            };

            //借机出库单提交接口
            $scope.borrowOrderOutSubmit = function(){
                $scope.borrowItemList = [];
                _.map($rootScope.detailsTerminalList, function(item, index){
                    var param = {
                        'borrowOrderId': _.get($rootScope.borrowOrderOutBaseinfo, 'borrowOrderId'),
                        'offerId': item.offerId,
                        'offerQty': item.offerQty,
                        'instCodes': item.instCodeList
                    };
                    $scope.borrowItemList.push(param)
                });
                var param = {
                    'borrowOrderId': _.get($rootScope.borrowOrderOutBaseinfo, 'borrowOrderId'),
                    'staffId': _.get($scope.borrowOrderForm, 'borrowUser'),
                    'originStorageId': _.get($rootScope.borrowOrderOutBaseinfo, 'originStorageId'),
                    'remarks': _.get($scope.borrowOrderForm, 'remarks'),
                    'borrowItemList': $scope.borrowItemList
                };
                httpMethod.borrowOrderOutSubmit(param).then(function(rsp){
                    if(rsp.success){
                        console.log('提交成功!');
                        location.reload();
                    }
                });
            };

        }])
        .controller('qryOfferCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {

            $scope.aryOfferForm = {
                instCode: ''
            };

            $scope.qryOfferByInstCodes = function(){
                var param = {
                    'instCode': _.get($scope.aryOfferForm, 'instCode'),
                    'storageId': _.get($rootScope.borrowOrderOutBaseinfo, 'originStorageId')
                };
                httpMethod.qryOfferByInstCodes(param).then(function(rsp){
                    $scope.offerInfo = rsp.data;
                });
            };

            $scope.confirm = function(){
                if(!$rootScope.detailsTerminalList.length){
                    $scope.offerInfo.offerQty = 1;
                    $scope.offerInfo.instCodeList = [$scope.offerInfo.instCode];
                    if($scope.offerInfo.isHaveMac == 'Y'){
                        $scope.offerInfo.showCodeList = [{instCode: $scope.offerInfo.instCode, macCode: $scope.offerInfo.macCode}];
                    }else{
                        $scope.offerInfo.showCodeList = [{instCode: $scope.offerInfo.instCode}];
                    };
                    $rootScope.detailsTerminalList.push($scope.offerInfo);
                }else{
                    var index = _.findIndex($rootScope.detailsTerminalList, function (item) {
                        return item.offerId === _.get($scope, 'offerInfo.offerId');
                    }); //是否是同一个终端
                    if(index > -1){
                        var flag = _.some($rootScope.detailsTerminalList[index].instCodeList, function (item) {
                            return item === _.get($scope, 'offerInfo.instCode');
                        });
                        if(!flag){
                            $rootScope.detailsTerminalList[index].offerQty = $rootScope.detailsTerminalList[index].offerQty + 1;
                            if($rootScope.detailsTerminalList.isHaveMac == 'Y'){
                                $rootScope.detailsTerminalList[index].showCodeList.push({instCode: $scope.offerInfo.instCode, macCode: $scope.offerInfo.macCode});
                            }else{
                                $rootScope.detailsTerminalList[index].showCodeList.push({instCode: $scope.offerInfo.instCode});
                            };
                            $rootScope.detailsTerminalList[index].instCodeList.push($scope.offerInfo.instCode);
                        }else{
                            console.log('相同终端！')
                        }
                    }else{
                        $scope.offerInfo.offerQty = 1;
                        $scope.offerInfo.instCodeList = [$scope.offerInfo.instCode];

                        if($scope.offerInfo.isHaveMac == 'Y'){
                            $scope.offerInfo.showCodeList = [{instCode: $scope.offerInfo.instCode, macCode: $scope.offerInfo.macCode}];
                        }else{
                            $scope.offerInfo.showCodeList = [{instCode: $scope.offerInfo.instCode}];
                        };

                        $rootScope.detailsTerminalList.push($scope.offerInfo);
                    }
                }
                $scope.aryOfferForm.instCode = '';
                $scope.offerInfo = null;
                $rootScope.stepNum = 0;
            }

            $scope.deselection = function(){
                $scope.aryOfferForm.instCode = '';
                $scope.offerInfo = null;
                $rootScope.stepNum = 0;
            }

        }])
        .controller('codeDetailCtrl', ['$scope', '$rootScope', 'httpMethod', '$sessionStorage', function ($scope, $rootScope, httpMethod, $sessionStorage) {
        }])
});