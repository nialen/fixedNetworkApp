define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll', 'ng-infinite-scroll'], function (angular, $, _, Mock) {
    angular
        .module('partsTransferInDepotModule', ['httpMethod', 'infinite-scroll'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.step = 1;
            $rootScope.detailShow = true;
            $rootScope.infoShow = true;
            $rootScope.addOneTakeOffer = [];
            $rootScope.sourceStorage = null; //调出仓库
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
                if (_this.depotBusy) return;
                _this.depotBusy = true;
                var param = {                
                    "curPage": _this.depotPage,
                    "pageSize": '10',
                    "commonRegionId": item.commonRegionId,
                    "storageType": item.storageType,
                    "storageLevel": item.storageLevel,
                    "storageName": item.storageName,
                    "orgId": item.orgId,
                    "parentStorageId": item.parentStorageId
                }; 
                debugger;            
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
        .factory('QueryDepotDetail', ['httpMethod', '$filter', '$log', function(httpMethod, $filter, $log){
            var QueryDepotDetail = function() {
                this.depotDetailItems = [];
                this.depotDetailPage = 1;
                this.depotDetailBusy = false;
            };
            //待确认调拨单查询接口
            QueryDepotDetail.prototype.depotDetailNextPage = function(org) {
                var _this = this;
                if (_this.depotDetailBusy) return;
                _this.depotDetailBusy = true;
                var param = {                
                    "curPage": _this.depotDetailPage,
                    "pageSize": '10',
                    "allotOrderId": org
                };             
                httpMethod.qryAllotOrderDetail(param).then(function(rsp) {
                    if (rsp.success) {
                        if(rsp.data.list.length > 0){
                            var depotDetailItems = rsp.data.list;
                            depotDetailItems.forEach(function(item) {
                                _this.depotDetailItems.push(item);
                            });
                            _this.depotDetailBusy = false;
                            _this.depotDetailPage += 1;
                            if(_this.depotDetailPage > rsp.data.total){
                                _this.depotDetailBusy = true;                              
                            }
                        }else{
                            _this.depotDetailBusy = true;
                        }
                        $log.log('调用接口成功.');
                    }else{
                        _this.depotDetailBusy = true;
                    }                  
                }, function() {
                    $log.log('调用接口失败.');
                });
            };
            return QueryDepotDetail;
        }])
        .filter('statusName', function () {
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
        .filter('storageTypeName', function () { 
            return function (val) {
                switch (val) {
                    case '1':
                        return '中心库';
                        break;
                    case '2':
                        return '装维库';
                        break;
                    case '3':
                        return '网格库';
                        break;
                    case '4':
                        return '厅店库';
                        break;
                    case '5':
                        return '个人库';
                        break;
                    case '6':
                        return '回收库';
                        break;
                }
            }
        })       
        .filter('storageLevelName', function () { 
            return function (val) {
                switch (val) {
                    case '1':
                        return '一级库(省中心库)';
                        break;
                    case '2':
                        return '二级库(地市装维库)';
                        break;
                    case '3':
                        return '三级库(网格库)';
                        break;                   
                }
            }
        })
        // 调拨入库
        .controller('partsTransferCtrl', ['$scope', '$rootScope', 'httpMethod', 'Reddit', '$timeout', function ($scope, $rootScope, httpMethod, Reddit, $timeout) {
            $rootScope.partsTransferForm = {
                "allotOrderId": '',
                "startDate": '',
                "endDate": '',
                "staffName": '',
                "originStorageId": '',
                "targetStorageId": '',
            };
            //调拨入库页面入库仓库信息
            httpMethod.qryAllotOrderInBaseInfo().then(function(rsp){ 
                if(rsp.success){
                    $rootScope.allotOrderInBaseInfo = rsp.data;
                    $rootScope.partsTransferForm.targetStorageId = $rootScope.allotOrderInBaseInfo.targetStorageId;
                    $scope.tbcAllotOrder = new Reddit();
                }
            });             
            $scope.queryTbcAllotOrder = function () {
                $scope.tbcAllotOrder.tbcAllotOrderItems = [];
                $scope.tbcAllotOrder.tbcAllotOrderPage = 1;
                $scope.tbcAllotOrder.tbcAllotOrderNextPage($rootScope.partsTransferForm);
            };

            $('#startDt').date({}, function(datestr) {
                $rootScope.partsTransferForm.startDate = datestr;
                $scope.$apply();
            });
            $('#endDt').date({}, function(datestr) {
                $rootScope.partsTransferForm.endDate = datestr;
                $scope.$apply();
            });
            $scope.detailShowMore = function () {
                $rootScope.detailShow = !$rootScope.detailShow;
            };
            $scope.chooseOutDepot = function(){
                $rootScope.step = 2;
            }           
            //调拨入库确认
            $scope.confirmTbcAllotOrder = function (item) {
                $rootScope.tbcAllotOrderOne = item;
                $rootScope.step = 3;
            }
        }])
        // 调出仓库选择
        .controller('chooseDepotCtrl', ['$scope', '$rootScope', 'httpMethod', 'QueryDepot', function ($scope, $rootScope, httpMethod, QueryDepot) {
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
            $scope.checked = null;
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
                $scope.checked = null;
                $scope.isShowScreen = false;
            };
            $scope.depotForm = {
                "commonRegionId": $rootScope.allotOrderInBaseInfo.commonRegionId,
                "storageType": '',
                "storageLevel": '',
                "storageName": '',
                "orgId": $scope.checkedOrgList.orgId,
                "parentStorageId": $rootScope.allotOrderInBaseInfo.targetStorageId
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
            // $scope.storageType = '1';

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
            $scope.queryDepot = new QueryDepot();

            $scope.depotQuery = function () {
                $scope.queryDepot.depotItems = [];
                $scope.queryDepot.depotPage = 1;
                $scope.queryDepot.depotNextPage($scope.depotForm);
            };

            var todoChecked = ''; //待确认的选项           
            $scope.checkDepot = function(item){
                todoChecked = item;
            } 
            //选择仓库确认
            $scope.chooseDepotConfirm = function () {
                $rootScope.sourceStorage = todoChecked;
                $rootScope.partsTransferForm.originStorageId = $rootScope.sourceStorage.storageId;
                todoChecked = ''; // 置空
                $rootScope.step = 1;
            };
            $scope.cancel = function () {
                $rootScope.step = 1;
            }
        }])
        // 调拨入库确认
        .controller('confirmDepotCtrl', ['$scope', '$rootScope', 'httpMethod', 'QueryDepotDetail', function ($scope, $rootScope, httpMethod, QueryDepotDetail) {
            $scope.confirmShow = true;
            $scope.confirmShowMore = function(){
                $scope.confirmShow = !$scope.confirmShow;
            };
            $scope.confirmDetail = true;
            $scope.confirmDetailMore = function(){
                $scope.confirmDetail = !$scope.confirmDetail;
            };
            $scope.queryDepotDetail = new QueryDepotDetail();

            $scope.serailCode = function(item){
                $rootScope.offerInfoOne = item;
                $rootScope.step = 4;
            }
        }])
        // 录入串码
        .controller('serialCodeCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
            //单个添加串码
            $scope.addSerialNumberSingle = function (instCode) {
                if (!instCode) {
                    // JqueryDialog.inform('提示信息', '请先输入串码');
                    return;
                } 
                //检验串码在当前页面加入的串码中是否重复
                var isEqualInstCode = _.some($scope.instCodeList, function (item) {
                    return item === instCode;
                });
                if (isEqualInstCode) {
                    JqueryDialog.inform('提示信息', '输入串码与之前输入串码重复');
                    return;
                }
                var params = {
                    instCode: instCode,
                    storageId: _.get($rootScope.checkedAllotOrder, 'originStorageId'),
                    offerId: _.get($ctrl.items, 'offerId')
                };
                httpMethod.checkInstCodsByOffer(params).then(function (rsp) {
                    if (rsp.success) {
                        // if($ctrl.items.isHaveMac == 'Y'){
                        //  $scope.instCodeList.unshift({'instCode': instCode, 'macCode': macCode});
                        // }else{
                        //  $scope.instCodeList.unshift({'instCode': instCode});
                        // }
                        $scope.instCodeList.push(instCode);
                        $scope.pageChanged();
                    }
                });
            };

            $scope.fileClick = function () {
                $('#upload_file').click();
            };

            $scope.$watch('upload_file', function (newValue) {
                if (newValue) {
                    var excelfileExtend = '.xls,.xlsx';
                    var fileExtend = newValue[0].name.substring(newValue[0].name.lastIndexOf('.')).toLowerCase();
                    if (excelfileExtend.indexOf(fileExtend) <= -1) {
                        JqueryDialog.inform('提示信息', '导入文件只能是Excel文件');
                        return false
                    }

                    var formdata = new FormData();
                    formdata.append('uploadFile', newValue[0]);
                    formdata.append('storageId', _.get($rootScope, 'checkedAllotOrder.originStorageId')); //出库仓库ID
                    formdata.append('offerId', _.get($ctrl, 'items.offerId')); //商品Id

                    $http({
                        headers: {
                            'Content-Type': undefined
                        },
                        method: 'POST',
                        url: httpConfig.siteUrl + '/terminal/baseConfig/checkInstCodsByOfferBatch',
                        data: formdata
                    }).success(function (rsp) {
                        $('#upload_file').val('');
                        if (rsp.success) {
                            // _.forEach(rsp.data, function (data) {
                            //  //检验串码在当前页面加入的串码中是否重复
                            //  var isEqualInstCode = _.some($scope.instCodeList, function (item) {
                            //      return item === data;
                            //  });
                            //  if (isEqualInstCode) {
                            //      JqueryDialog.inform('提示信息', '输入串码与之前输入串码重复');
                            //      return;
                            //  }
                            //  $scope.instCodeList.unshift(data);
                            // });
                            for(var i=0; i<rsp.data.length; i++){
                                var isEqualInstCode = _.some($scope.instCodeList, function (item) {
                                    return item === rsp.data[i];
                                });
                                if (isEqualInstCode) {
                                    JqueryDialog.inform('提示信息', '输入串码与之前输入串码重复');
                                    return;
                                };
                                $scope.instCodeList.unshift(rsp.data[i]);
                            }
                            $scope.pageChanged();
                        } else {
                            JqueryDialog.inform('提示信息', rsp.msg);
                        }
                    });
                }
            });

            //删除串码
            $scope.delSerisNum = function (index) {
                $scope.instCodeList.splice(index, 1);
                $scope.pageChanged();
            };
            $ctrl.ok = function () {
                // if($scope.instCodeList.length != $ctrl.items.offerQty){
                //  JqueryDialog.inform('提示信息', '录入数量与分配数量不一致');
                //  return;
                // }
                $ctrl.items.instCodeList = $scope.instCodeList;
                $ctrl.items.getInQty = $scope.instCodeList.length;
                $uibModalInstance.close();
            };
            $ctrl.cancel = function () {
                $uibModalInstance.dismiss('cancel');
            };
        }]) 
        .controller('serialCodeDetailCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }])             
});
