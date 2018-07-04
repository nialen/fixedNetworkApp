define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngCommonModule', 'ui-bootstrap-tpls', 'angular-animate', 'angular-sanitize', 'ngStorage'], function (angular, $, _, Mock) {
    angular
        .module('terminalCollectionModule', ['ngCommonModule', 'httpMethod'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.termRecoverBaseInfo = null; //获取终端替换页面基本信息
            $rootScope.allotItemList = []; //待提交的终端列表
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
        .controller('terminalCollectionCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
            // httpMethod.qryTermTakeBaseInfo().then(function (rsp) {
            //     if (rsp.success) {
            //         $rootScope.termRecoverBaseInfo = rsp.data; //获取拆机终端收取页面基本信息
            //     }
            // });

            $scope.operateTypeList = [{
                operateTypeId: '1',
                operateTypeName: '上客户门收取'
            }, {
                operateTypeId: '2',
                operateTypeName: '营业厅收取'
            }]; //收取方式列表

            $scope.operateType = {
                operateTypeId: '1',
                operateTypeName: '上客户门收取'
            };

            $scope.processList = [{
                processType: '1',
                processName: '维修',
            },{
                processType: '2',
                processName: '翻新',
            },{
                processType: '4',
                processName: '直接二次入库',
            },{
                processType: '5',
                processName: '报废',
            }];


            //从待提交列表中删除终端
            $scope.delTerminal = function (index) {
                $rootScope.allotItemList.splice(index, 1);
            };
            //提交
            $scope.termTakeOrderSubmit = function () {

            };

            $scope.cancelTermTakeOrder = function(){
                window.location.reload();
            }
        }])
});
