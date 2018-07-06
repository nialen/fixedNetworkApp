define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('terminalBoundModule', ['httpMethod', 'ngStorage'])
        .controller('terminalBoundCtrl', ['$scope', 'httpMethod', '$sessionStorage', function($scope, httpMethod, $sessionStorage){

        	//终端捆绑页面基本信息获取接口
        	httpMethod.qryTermBindOrderBaseinfo().then(function(rsp){
        		$scope.termBindOrderBaseinfo = rsp.data;
        	});

        	//查询产品
        	$scope.qryProduct = function(){
                $sessionStorage[$scope.termBindOrderBaseinfo.staffId] = JSON.stringify($scope.termBindOrderBaseinfo);
                window.open('productQuery.html?staffId=' + $scope.termBindOrderBaseinfo.staffId, '_self');
        	};

        }])
});
