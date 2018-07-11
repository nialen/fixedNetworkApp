define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll', 'ng-infinite-scroll'], function (angular, $, _, Mock) {
    angular
        .module('partsTransferInDepotModule', ['httpMethod', 'infinite-scroll'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.step = 1;
            $rootScope.detailShow = true;
            $rootScope.infoShow = true;
            $rootScope.addOneTakeOffer = [];
            $rootScope.goback = function (index) {
                $rootScope.step = index;
            };
        }])
        .factory('Reddit', ['httpMethod', '$filter', '$log', function(httpMethod, $filter, $log){
            var Reddit = function() {
                this.tbcAllotOrderItems = [];
                this.tbcAllotOrderPage = 1;
                this.tbcAllotOrderBusy = false;
            };
            //待确认调拨单查询接口
            Reddit.prototype.tbcAllotOrderNextPage = function(item) {
                var _this = this;
                if (_this.tbcAllotOrderBusy) return;
                _this.tbcAllotOrderBusy = true;
                var param = {                
                    "curPage": _this.tbcAllotOrderPage,
                    "pageSize": '10',
                    "allotOrderId": item.allotOrderId,
                    "startDate": item.startDate,
                    "endDate": item.endDate,
                    "staffName": item.staffName,
                    "originStorageId": item.originStorageId,
                    "targetStorageId": item.targetStorageId
                }
                httpMethod.qryTbcAllotOrder(param).then(function(rsp) {
                    if (rsp.success) {
                        if(rsp.data.list.length > 0){
                            var tbcAllotOrderItems = rsp.data.list;
                            tbcAllotOrderItems.forEach(function(item) {
                                _this.tbcAllotOrderItems.push(item);
                            });
                            _this.tbcAllotOrderBusy = false;
                            _this.tbcAllotOrderPage += 1;
                            if(_this.tbcAllotOrderPage > rsp.data.total){
                                _this.tbcAllotOrderBusy = true;                              
                            }
                        }else{
                            _this.tbcAllotOrderBusy = true;
                        }
                        $log.log('调用接口成功.');
                    }else{
                        _this.tbcAllotOrderBusy = true;
                    }                  
                }, function() {
                    $log.log('调用接口失败.');
                });
            };
            return Reddit;
        }])
        .factory('QueryDepot', ['httpMethod', '$filter', '$log', function(httpMethod, $filter, $log){
            var QueryDepot = function() {
                this.depotItems = [];
                this.depotPage = 1;
                this.depotBusy = false;
            };
            //待确认调拨单查询接口
            QueryDepot.prototype.depotNextPage = function(item) {
                var _this = this;
                if (_this.depotPage) return;
                _this.depotPage = true;
                var param = {                
                    "curPage": _this.depotPage,
                    "pageSize": '10',
                    "commonRegionId": item.commonRegionId,
                    "storageType": item.storageType,
                    "storageLevel": item.storageLevel,
                    "storageName": item.storageName,
                    "orgId": item.orgId,
                    "parentStorageId": item.parentStorageId
                }
                httpMethod.qryStorage4Select(param).then(function(rsp) {
                    if (rsp.success) {
                        if(rsp.data.list.length > 0){
                            var depotItems = rsp.data.list;
                            depotItems.forEach(function(item) {
                                _this.depotItems.push(item);
                            });
                            _this.depotBusy = false;
                            _this.depotPage += 1;
                            if(_this.depotPage > rsp.data.total){
                                _this.depotBusy = true;                              
                            }
                        }else{
                            _this.depotBusy = true;
                        }
                        $log.log('调用接口成功.');
                    }else{
                        _this.depotBusy = true;
                    }                  
                }, function() {
                    $log.log('调用接口失败.');
                });
            };
            return QueryDepot;
        }])
        .filter('statusName', function () { //1000 待确认 1001 已完成 1002 已取消
            return function (val) {
                switch (val) {
                    case '1000':
                        return '待确认';
                        break;
                    case '1001':
                        return '已完成';
                        break;
                    case '1002':
                        return '已取消';
                        break;
                }
            }
        })
        .controller('partsTransferCtrl', ['$scope', '$rootScope', 'httpMethod', 'Reddit', '$timeout', function ($scope, $rootScope, httpMethod, Reddit, $timeout) {
            $scope.partsTransferForm = {
                "allotOrderId": '',
                "startDate": '',
                "endDate": '',
                "staffName": '',
                "originStorageId": '',
                "targetStorageId": '',
                "targetStorageName": '',
            };
            //调拨入库页面入库仓库信息
            httpMethod.qryAllotOrderInBaseInfo().then(function(rsp){ 
                if(rsp.success){
                    $rootScope.allotOrderInBaseInfo = rsp.data;
                    $scope.partsTransferForm.targetStorageId = $rootScope.allotOrderInBaseInfo.targetStorageId;
                    $scope.partsTransferForm.targetStorageName = $rootScope.allotOrderInBaseInfo.targetStorageName;
                    $scope.tbcAllotOrder = new Reddit();
                }
            });             
            $scope.queryTbcAllotOrder = function () {
                $scope.tbcAllotOrder.tbcAllotOrderItems = [];
                $scope.tbcAllotOrder.tbcAllotOrderPage = 1;
                $scope.tbcAllotOrder.tbcAllotOrderNextPage($scope.partsTransferForm);
            };

            $('#startDt').date({}, function(datestr) {
                $scope.partsTransferForm.startDate = datestr;
                $scope.$apply();
            });
            $('#endDt').date({}, function(datestr) {
                $scope.partsTransferForm.endDate = datestr;
                $scope.$apply();
            });
            $scope.detailShowMore = function () {
                $rootScope.detailShow = !$rootScope.detailShow;
            };
            $scope.chooseOutDepot = function(){
                $rootScope.step = 2;
            }
        }])
        .controller('chooseDepotCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
            $scope.showScreen = function(){
                $scope.isShowScreen = true;
            };
            $scope.infoShowMore = function () {
                $rootScope.infoShow = !$rootScope.infoShow;
            };
            var params = {
                'commonRegionId': $rootScope.allotOrderInBaseInfo.commonRegionId
            };
            httpMethod.qryOrgOrShop(params).then(function(rsp){ 
                if(rsp.success){
                    $scope.orgOrShopList = rsp.data;                                
                }
            }); 
            var chooseOrg = '';
            $scope.checkedOrgList = '';
            $scope.checked = 0;
            $scope.checkedOrg = function (item, index) {                  
                $scope.checked = index;  
                chooseOrg = item;   
            };  
            $scope.confirmChoose = function() {
                $scope.checkedOrgList = chooseOrg;
                $scope.isShowScreen = false;
            };
            $scope.cancelChoose = function() {
                var chooseOrg = '';
                $scope.checkedOrgList = '';
                $scope.isShowScreen = false;
            };
            $scope.storageTypeList = [{
                'storageType': '1',
                'storageName': '中心库'
            },{
                'storageType': '2',
                'storageName': '装维库'
            },{
                'storageType': '3',
                'storageName': '网格库'
            },{
                'storageType': '4',
                'storageName': '厅店库'
            },{
                'storageType': '5',
                'storageName': '个人库'
            },{
                'storageType': '6',
                'storageName': '回收库'
            }];
            $scope.storageType = '1';

            $scope.storageLevelList = [{
                'storageLevel': '1',
                'storageLevelName': '一级库(省中心库)'
            },{
                'storageLevel': '2',
                'storageLevelName': '二级库(地市装维库)'
            },{
                'storageLevel': '3',
                'storageLevelName': '三级库(网格库)'
            }];
            $scope.storageLevel = '1';

            $scope.depotQuery = function () {
               
            }; 
        }])
        .controller('confirmDepotCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }])
        .controller('srialCodeCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }]) 
        .controller('srialCodeDetailCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }])             
});
