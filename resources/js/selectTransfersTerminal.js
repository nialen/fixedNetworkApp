define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('selectTransfersTerminalModule', ['httpMethod'])
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
        .controller('partsTransferCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {

            $scope.showScreen = function(){
                $scope.isShowScreen = true;
            };

            $scope.hideScreen = function(){
                $scope.isShowScreen = false;
            };

        }])
       
});
