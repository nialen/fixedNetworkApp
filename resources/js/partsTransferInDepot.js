define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('partsTransferInDepotModule', ['httpMethod'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.step = 1;
            $rootScope.detailShow = false;
            $rootScope.infoShow = false;
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
        .controller('partsTransferCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
            $scope.tbcAllotOrder = new Reddit();
            $scope.queryTbcAllotOrder = function () {
                $scope.tbcAllotOrder = tbcAllotOrder.prototype.tbcAllotOrderNextPage();
            }
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
        }])
        .controller('chooseDepotCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
            $scope.showScreen = function(){
                $scope.isShowScreen = true;
            };
            $scope.hideScreen = function(){
                $scope.isShowScreen = false;
            };
            $scope.infoShowMore = function () {
                $rootScope.infoShow = !$rootScope.infoShow;
            };
        }])
        .controller('confirmDepotCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }])
        .controller('srialCodeCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }]) 
        .controller('srialCodeDetailCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }])             
});
