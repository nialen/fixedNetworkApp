define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('terminalBoundModule', ['httpMethod', 'ngStorage'])
        .run(['$rootScope', function ($rootScope) {
            $rootScope.stepNum = 0; // 当前显示的step索引值（Number类型）
            $rootScope.goBack = function(num) { // 返回（num-1）
                $rootScope.stepNum = num - 1;
            };
            $rootScope.forward = function(num) { // 返回（num+1）
                $rootScope.stepNum = num + 1;
            };
            $rootScope.accessInfo = {
                number: ''
            };
            $rootScope.productInfo = {};
        }])
        .controller('terminalBoundCtrl', ['$scope', '$rootScope', 'httpMethod', '$sessionStorage', function($scope, $rootScope, httpMethod, $sessionStorage){

            $scope.terminalBoundForm = {
                instCode: '',
                constructionNo: '',
                crmOrderNo: '',
                remark: ''
            };

        	//终端捆绑页面基本信息获取接口
        	httpMethod.qryTermBindOrderBaseinfo().then(function(rsp){
        		$rootScope.termBindOrderBaseinfo = rsp.data;
        	});

            $scope.qryProdInfo = function(){
                $rootScope.stepNum = 1;
                if($rootScope.accessInfo.number){
                    $rootScope.qryProdInfo();
                }
            };

            $scope.bindTermSumbit = function(){
                var param = {
                    'instCode': _.get($scope.terminalBoundForm, 'instCode'),
                    'staffId': _.get($rootScope.termBindOrderBaseinfo, 'staffId'),
                    'operateDt': _.get($rootScope.termBindOrderBaseinfo, 'operateDt'),
                    'constructionNo': _.get($scope.terminalBoundForm, 'constructionNo'),
                    'bindNumber': _.get($rootScope.accessInfo, 'number'),
                    'custName': _.get($rootScope.productInfo, 'custName'),
                    'bindProductId': _.get($rootScope.productInfo, 'bindProductId'),
                    'crmOrderNo': _.get($scope.terminalBoundForm, 'crmOrderNo'),
                    'remark': _.get($scope.terminalBoundForm, 'remark')
                };
                httpMethod.bindTermSumbit(param).then(function(rsp){
                    if(rsp.success){
                        console.log('提交成功!');
                        location.reload();
                    }
                })
            };

            $scope.back = function(){
                history.back();
            };

            $scope.cancel = function(){
                location.reload();
            };

        }])
        .controller('productQueryCtrl', ['$scope', '$rootScope', '$sessionStorage', 'httpMethod', function($scope, $rootScope, $sessionStorage, httpMethod){

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

            $rootScope.qryProdInfo = function(){
                var param = {
                    'prodType': _.get($scope.qryProdInfoForm, 'prodType'),
                    'productNum': _.get($rootScope.accessInfo, 'number'),
                    'commonRegionId': _.get($rootScope.termBindOrderBaseinfo, 'commonRegionId'),
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
                $rootScope.productInfo.custName = $scope.prodInfo.custName;
                $rootScope.productInfo.bindProductId = $scope.prodInfo.productId;
                $rootScope.stepNum = 0;
            };
            
        }]) 
});
