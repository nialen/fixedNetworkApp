define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngCommonModule', 'ui-bootstrap-tpls', 'angular-animate', 'angular-sanitize', 'ngStorage'], function (angular, $, _, Mock) {
    angular
        .module('terminalCollectionModule', ['ngCommonModule', 'httpMethod'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.step = 1;
            $rootScope.detailShow = true;
            $rootScope.infoShow = true;
            $rootScope.addOneTakeOffer = [];
            $rootScope.goback = function (index) {
                $rootScope.step = index;
            };
        }])
        .filter('prodName', function () {
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
        .controller('terminalCollectionCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
            $scope.processTypeList = [{
                'processType': '1',
                'processName': '报废'
            },{
                'processType': '2',
                'processName': '维修'
            },{
                'processType': '3',
                'processName': '直接二次入库'
            },{
                'processType': '4',
                'processName': '翻新'
            }];
     
            $scope.operateTypeList = [{
                'operateType': '1',
                'operateName': '上客户门收取',
                'checked': true
            },{
                'operateType': '2',
                'operateName': '营业厅收取'
            }];

            $scope.operateType = '1';

            $scope.infoShowMore = function () {
                $rootScope.infoShow = !$rootScope.infoShow;
            };
            $scope.detailShowMore = function () {
                $rootScope.detailShow = !$rootScope.detailShow;
            };
            httpMethod.qryTermTakeBaseInfo().then(function(rsp){ 
                if(rsp.success){
                    $rootScope.termTakeBaseInfo = rsp.data;
                }
            });
            $scope.addNewOne = function () {
                $rootScope.step = 2;
            };
            $scope.searchProductId = function (item) {
                $rootScope.step = 3;
                $rootScope.productItem = item;               
            };          
            $scope.deleteTakeOffer = function (index) {
                $rootScope.addOneTakeOffer.splice(index, 1);
            };

            //提交
            $scope.submitTerminal = function(){ 
                var takeOfferList = [];
                _.map($rootScope.addOneTakeOffer, function(item){                    
                    var obj = {
                        'takeRecordId': $rootScope.termTakeBaseInfo.takeRecordId,
                        'offerId':item.offerId,
                        'offerQty': 1,
                        'instCodeList':[{
                            'instCode': item.instCode,
                            'oldBindNumber': item.oldBindNumber,
                            'oldBindProductId': item.oldBindProductId,
                            'oldCustName': item.oldCustName,
                            'processType': item.processType
                        }]
                    }
                    takeOfferList.push(obj);               
                });              
                var param={
                    'takeRecordId': $rootScope.termTakeBaseInfo.takeRecordId,
                    'staffId': $rootScope.termTakeBaseInfo.staffId,
                    'operateType': _.get($scope, 'operateType'),
                    'remark': $rootScope.termTakeBaseInfo.remark,
                    'takeItemList': takeOfferList
                };
                httpMethod.termTakeOrderSubmit(param).then(function(rsp){              
                    if(rsp.success){
                        
                    }
                });
            }
        }])
        // 终端扫码录入
        .controller('terminalCodeCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
            $scope.qryTakeOffer = function(){
                var param = {
                    'instCode': $scope.instCode
                };
                httpMethod.qryTakeOffer(param).then(function(rsp){              
                    if(rsp.success){
                        $scope.takeOffer = rsp.data;
                        $scope.takeOffer.processType = '1';
                    }
                })
            };
            $scope.confirm = function () {              
                $rootScope.addOneTakeOffer.push($scope.takeOffer);    
                $rootScope.step = 1;
                $rootScope.detailShow = true;
            };
            $scope.cancel = function () {
                $rootScope.step = 1;
            };
            
        }])
        // 产品查询
        .controller('productQueryCodeCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
            $scope.onFlag = false;
            $scope.prodTypeList = [{
                'prodType': '1',
                'prodName': '宽带'
            },{
                'prodType': '2',
                'prodName': 'IPTV'
            }];
            $scope.prodType = '1';
            $scope.productQuery = function () {
                var param = {
                    'prodType': _.get($scope, 'prodType'),
                    'productNum': $rootScope.productItem.oldBindNumber,
                    'commonRegionId': $rootScope.termTakeBaseInfo.commonRegionId,
                    'statusCd': '1'
                };
                httpMethod.prodInfoQuery(param).then(function(rsp){              
                    if(rsp.success){
                        $scope.prodInfo = rsp.data;
                        $scope.onFlag = true;
                    }
                });
            }
            $scope.confirm = function () {
                $rootScope.productItem.oldBindProductId = $scope.prodInfo.productNum;
                $rootScope.step = 1;
            }
            $scope.cancel = function () {
                $rootScope.step = 1;
            }

        }])
});


















