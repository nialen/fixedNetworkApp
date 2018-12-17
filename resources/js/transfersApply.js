define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('transfersApplyModule', ['httpMethod'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.stepNum = 0; // 当前显示的step索引值（Number类型）
            $rootScope.goBack = function(num) { // 返回（num-1）
                $rootScope.stepNum = num - 1;
            };
            $rootScope.forward = function(num) { // 返回（num+1）
                $rootScope.stepNum = num + 1;
            };
        }])
        .filter('manageTypeFilter', function() {
            return function(value){
                switch(value){
                    case '1000':
                        return '实例化管理';
                        break;
                    case '1001':
                        return '非实例化管理';
                        break;
                }
            }
        })
        .controller('transfersApplyCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {

            //调拨申请单基本信息查询接口
            httpMethod.qryAllotApplyOrderBaseinfo().then(function(rsp){
                $scope.orderBaseinfo = rsp.data;
                $scope.allotOrderInfo = $scope.orderBaseinfo.allotOrder;
                $scope.originStorageList = $scope.orderBaseinfo.originStorageList;
                $scope.transfersApplyForm.originStorageId = $scope.originStorageList[0].storageId;
            });

            $scope.isHideInfo = true;

            $scope.hideInfo = function(){
                $scope.isHideInfo = !$scope.isHideInfo;
            };

            $scope.isHideDetail = true;

            $scope.hideDetail = function(){
                $scope.isHideDetail = !$scope.isHideDetail;
            };

            $scope.transfersApplyForm = {
                originStorageId: '',
                allotRemarks: ''
            };

            $scope.delTerminal = function(index){
                $rootScope.checkedTerminalList.splice(index, 1);
            };

            $scope.reduce = function(item){
                if(item.applyOfferQty > 1){
                    item.applyOfferQty = item.applyOfferQty - 1;
                }
            }
            $scope.increase = function(item){
                item.applyOfferQty = item.applyOfferQty + 1;
            };

            $scope.allotApplyOrderSubmit = function(){
                $scope.allotItemList = [];
                _.map($rootScope.checkedTerminalList, function(item){
                    var pushParam = {
                        'allotOrderId': _.get($scope.allotOrderInfo, 'allotOrderId'),
                        'offerId': item.offerId,
                        'applyOfferQty': item.applyOfferQty
                    };
                    $scope.allotItemList.push(pushParam);
                })
                var param = {
                    'allotOrderId': _.get($scope.allotOrderInfo, 'allotOrderId'),
                    'staffId': _.get($scope.allotOrderInfo, 'staffId'),
                    'originStorageId': _.get($scope.transfersApplyForm, 'originStorageId'),
                    'targetStorageId': _.get($scope.allotOrderInfo, 'targetStorageId'),
                    'allotRemarks': _.get($scope.transfersApplyForm, 'allotRemarks'),
                    'allotItemList': $scope.allotItemList
                };
                httpMethod.allotApplyOrderSubmit(param).then(function(rsp){
                    if(rsp.success){
                        console.log('提交成功!');
                        location.reload();
                    }
                })
            };

            $scope.back = function(){
                history.back();
            };

            $scope.cancelSubmit = function(){
                location.reload();
            }
            
        }])
        .controller('partsTransferCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {

            
            $scope.showScreen = function(){
                $scope.isShowScreen = true;
            };

            $scope.hideScreen = function(){
                $scope.isShowScreen = false;
            };

            $scope.isBrandModel = true;
            $scope.showBrand = function(){
                $scope.isBrandModel = !$scope.isBrandModel;
            };
            $scope.isShowModel = true;
            $scope.showModel = function(){
                $scope.isShowModel = !$scope.isShowModel;
            };

            //终端分类下拉框数据获取接口
            httpMethod.qryOfferSort4Select().then(function(rsp){
                $scope.offerSortList = rsp.data;
            });

            //终端品牌下拉框数据获取接口
            httpMethod.qryOfferBrand4Select().then(function(rsp){
                $scope.offerBrandList = rsp.data;
            });

            $scope.checkedSort = function(value, index){
                if($scope.checkedSortIndex){
                    $scope.checkedSortIndex = null;
                    $scope.checkedSortItem = null;
                }else{
                    $scope.checkedSortIndex = index;
                    $scope.checkedSortItem = value;
                };
                $scope.checkedModelIndex = null;
                $scope.checkedModelItem = null;
            };

            $scope.checkedBrand  = function(value, index){
                if($scope.checkedBrandIndex){
                    $scope.checkedBrandIndex = null;
                    $scope.checkedBrandItem = null;
                }else{
                    $scope.checkedBrandIndex = index;
                    $scope.checkedBrandItem = value;
                };
                $scope.checkedModelIndex = null;
                $scope.checkedModelItem = null;
            };

            $scope.checkedModel = function(value, index){
                if($scope.checkedModelIndex){
                    $scope.checkedModelIndex = null;
                    $scope.checkedModelItem = null;
                }else{
                    $scope.checkedModelIndex = index;
                    $scope.checkedModelItem = value;
                };
            };

            //终端型号下拉框数据查询接口
            $scope.$watchGroup(['checkedSortItem.sortCd', 'checkedBrandItem.brandCd'], function(newObj){
                if(newObj[0] && newObj[1]){
                    var param = {
                        'sortCd': newObj[0],
                        'brandCd': newObj[1]
                    };
                    httpMethod.qryOfferModel4Select(param).then(function(rsp){
                        if(rsp.success){
                            $scope.offerModelList = rsp.data;
                        }
                    })
                }else{
                    $scope.offerModelList = [];
                }
            });

            //确定
            $scope.qryOfferSub = function(){
                $scope.qryOfferSubmit();
                $scope.hideScreen();
            };

            //重置
            $scope.reset = function(){
                $scope.checkedSortIndex = null;
                $scope.checkedSortItem = null;
                $scope.checkedBrandIndex = null;
                $scope.checkedBrandItem = null;
                $scope.checkedModelIndex = null;
                $scope.checkedModelItem = null;
                $scope.hideScreen();
                $scope.qryOfferSubmit();
            };

            $scope.qryOfferForm = {
                offerName: ''
            }

            //终端配置查询接口
            $scope.qryOfferSubmit = function(){
                var param = {
                    'curPage': 1,
                    'pageSize': 10,
                    'offerCode': '',
                    'offerName': _.get($scope.qryOfferForm, 'offerName'),
                    'sortCd': _.get($scope.checkedSortItem, 'sortCd'),
                    'brandCd': _.get($scope.checkedBrandItem, 'brandCd'),
                    'offerModelId': _.get($scope.checkedModelItem, 'offerModelId')
                };
                httpMethod.qryOffer(param).then(function(rsp){
                    $scope.offerList = rsp.data.list;
                    _.map($scope.offerList, function(item, index){
                        item.applyOfferQty = 1;
                    })
                })
            };

            $scope.checkedOffer = function(item){
                item.checked = !item.checked;
            };

            $scope.checkedConfirm = function(){
                $rootScope.checkedTerminalList = [];
                _.map($scope.offerList, function(item, index){
                    if(item.checked){
                        item.applyOfferQty = 1;
                        $rootScope.checkedTerminalList.push(item);
                    }
                });
                $rootScope.stepNum = 0;
            };

        }])
});
