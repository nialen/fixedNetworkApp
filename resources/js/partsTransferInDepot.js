define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'angular-animate', 'datepicker'], function (angular, $, _, Mock) {
    angular
        .module('partsTransferInDepotModule', ['httpMethod'])
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
        .controller('partsTransferCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
            $('#startDt').date({}, function(datestr) {
                $scope.couponStartDt = datestr;
                $scope.$apply();
            });
            $('#endDt').date({}, function(datestr) {
                $scope.couponEndDt = datestr;
                $scope.$apply();
            });
        }])
        .controller('terminalCodeCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
        
        }])
        .controller('productQueryCodeCtrl', ['$scope', '$rootScope', '$uibModal', 'httpMethod', 'JqueryDialog', function ($scope, $rootScope, $uibModal, httpMethod, JqueryDialog) {
        
        }])
});
