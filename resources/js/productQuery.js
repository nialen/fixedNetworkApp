define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('productQueryModule', ['httpMethod', 'ngStorage'])
        .run(['$rootScope', function ($rootScope) {
        }])
        .controller('productQueryCtrl', ['$scope', '$sessionStorage', 'httpMethod', function($scope, $sessionStorage, httpMethod){

        	function GetQueryString(name) {
				var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
				var r = window.location.search.substr(1).match(reg);
				if (r != null) return unescape(r[2]);
				return null;
			};
			$scope.orderBaseinfo = $sessionStorage[GetQueryString('staffId')] ? JSON.parse($sessionStorage[GetQueryString('staffId')]) : null;

			$scope.qryProdInfoForm = {
				'prodType': '1',
				'productNum': ''
			};

			$scope.prodTypeList = [{
				prodName: '宽带',
				prodType: '1'
			},{
				prodName: 'IPTV',
				prodType: '2'
			}];

			$scope.isShowNotice = false;

			$scope.qryProdInfo = function(){
				var param = {
					'prodType': $scope.qryProdInfoForm.prodType,
					'productNum': $scope.qryProdInfoForm.productNum,
					'commonRegionId': $scope.orderBaseinfo.commonRegionId,
					'statusCd': '1'
				};
				httpMethod.prodInfoQuery(param).then(function(rsp){
					$scope.prodInfo = rsp.data;
					if($scope.prodInfo.productId){
						$scope.isShowNotice = false;
					}else{
						$scope.isShowNotice = true;
					}
				})
			};

			$scope.checkedProd = function(){
				debugger;
			}

			$scope.back = function(){
				history.back();
			};
        	
        }])   
});
