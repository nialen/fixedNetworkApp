define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('homePageModule', ['httpMethod'])
        .run(['$rootScope', function ($rootScope) {
        }])
        .controller('homePageCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {

            $scope.back = function(){
                history.back();
            };

            $scope.refreshto = function(url){
                window.open(url)
            }
            
        }])
});
