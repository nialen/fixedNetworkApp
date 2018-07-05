define(['angular'], function (angular) {
    angular
        .module('chargeDepositModule', [])
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
        .controller('chargeDepositCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

            $scope.stepNumber = 0;

            $scope.nextStep = function(){
                $scope.stepNumber++;
            };

            $scope.forwardStep = function(){
                $scope.stepNumber--;
            };
            
        }])
});
