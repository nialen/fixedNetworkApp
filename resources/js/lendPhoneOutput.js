define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngCommonModule', 'ui-bootstrap-tpls', 'angular-animate', 'angular-sanitize', 'ngStorage'], function (angular, $, _, Mock) {
    angular
        .module('lendPhoneOutputModule', ['ngCommonModule', 'httpMethod'])
        .run(['$rootScope', function ($rootScope) {
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
        .controller('lendPhoneOutputCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {

            $scope.isHideInfo = true;

            $scope.hideInfo = function(){
                $scope.isHideInfo = !$scope.isHideInfo;
            };

            $scope.isHideDetail = true;

            $scope.hideDetail = function(){
                $scope.isHideDetail = !$scope.isHideDetail;
            };
            
        }])
});
