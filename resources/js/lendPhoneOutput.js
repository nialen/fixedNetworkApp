define(['angular'], function (angular) {
    angular
        .module('lendPhoneOutputModule', [])
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
        .controller('lendPhoneOutputCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

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
