define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('transfersApplyModule', ['httpMethod'])
        .run(['$rootScope', function ($rootScope) {
        }])
        .controller('transfersApplyCtrl', ['$scope', '$rootScope', 'httpMethod', function ($scope, $rootScope, httpMethod) {

            $scope.isHideInfo = true;

            $scope.hideInfo = function(){
                $scope.isHideInfo = !$scope.isHideInfo;
            };

            $scope.isHideDetail = true;

            $scope.hideDetail = function(){
                $scope.isHideDetail = !$scope.isHideDetail;
            };

            httpMethod.qryAllotApplyOrderBaseinfo().then(function(rsp){
                console.log(rsp.data)
            })
            
        }])
});
