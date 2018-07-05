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
        
        }])
        .controller('terminalCodeCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
        
        }])
        .controller('productQueryCodeCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
        
        }])
});
