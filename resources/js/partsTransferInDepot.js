define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
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
        .controller('partsTransferCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
            $('#startDt').date({}, function(datestr) {
                $scope.couponStartDt = datestr;
                $scope.$apply();
            });
            $('#endDt').date({}, function(datestr) {
                $scope.couponEndDt = datestr;
                $scope.$apply();
            });
        }])
        .controller('chooseDepotCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
            $scope.showScreen = function(){
                $scope.isShowScreen = true;
            };

            $scope.hideScreen = function(){
                $scope.isShowScreen = false;
            };
        }])
        .controller('confirmDepotCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }])
        .controller('srialCodeCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }]) 
        .controller('srialCodeDetailCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {
           
        }])             
});
