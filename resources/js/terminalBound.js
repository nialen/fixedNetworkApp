define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('terminalBoundModule', ['httpMethod'])
        .controller('terminalBoundCtrl', ['$scope', 'httpMethod', function($scope, httpMethod){
        	debugger;
        	httpMethod.qryOfferSort().then(function(rsp){
        		console.log(rsp)
        	})

        }])
});
