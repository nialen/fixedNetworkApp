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
        .controller('lendPhoneOutputCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {

            $scope.isHideInfo = true;
            $scope.hideInfo = function(){
                $scope.isHideInfo = !$scope.isHideInfo;
            };
            $scope.isHideDetail = true;
            $scope.hideDetail = function(){
                $scope.isHideDetail = !$scope.isHideDetail;
            };
            
            //借机出库单基本信息获取接口
            httpMethod.qryBorrowOrderOutBaseinfo().then(function(rsp){
                $rootScope.borrowOrderOutBaseinfo = rsp.data;
            })

            //借机人信息查询
            httpMethod.qryBorrowUser().then(function (rsp) {
                if (rsp.success) {
                    $scope.borrowUserList = rsp.data;
                    $scope.borrowUser = $scope.borrowUserList[0].staffId;
                }
            });

            //删除借机终端
            $scope.delTerminal = function(index){
                $rootScope.detailsTerminalList.splice(index, 1);
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
                $scope.offerInfo.offerQty = 1;
                $rootScope.detailsTerminalList.push($scope.offerInfo);
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
});