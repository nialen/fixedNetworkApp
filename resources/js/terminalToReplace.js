define(['angular', 'jquery', 'lodash', 'mock', 'httpMethod', 'ngStorage', 'ui-bootstrap-tpls', 'angular-animate', 'datepicker', 'iscroll'], function (angular, $, _, Mock) {
    angular
        .module('terminalToReplaceModule', ['httpMethod', 'ngStorage'])
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
        .controller('terminalToReplaceCtrl', ['$scope', '$rootScope', 'httpMethod', '$sessionStorage', function($scope, $rootScope, httpMethod, $sessionStorage){

            $scope.terminalToReplaceForm = {
                newInstCode: '',
                oldInstCode: '',
                constructionNo: '',
                remark: ''
            };

        	//终端替换页面基本信息获取接口
        	httpMethod.qryTermReplaceBaseInfo().then(function(rsp){
        		$rootScope.termReplaceBaseInfo = rsp.data;
        	});

            $scope.qryProdInfo = function(){
                $rootScope.stepNum = 1;
                if($rootScope.accessInfo.number){
                    $rootScope.qryProdInfo();
                };
            };

            $scope.bindReplaceSumbit = function(){
                var param = {
                    'staffId': _.get($rootScope.termReplaceBaseInfo, 'staffId'),
                    'operateDt': _.get($rootScope.termReplaceBaseInfo, 'operateDt'),
                    'constructionNo': _.get($scope.terminalToReplaceForm, 'constructionNo'),
                    'bindNumber': _.get($rootScope.accessInfo, 'number'),
                    'custName': _.get($rootScope.productInfo, 'custName'),
                    'bindProductId': _.get($rootScope.productInfo, 'bindProductId'),
                    'newInstCode': _.get($scope.terminalToReplaceForm, 'newInstCode'),
                    'oldInstCode': _.get($scope.terminalToReplaceForm, 'oldInstCode'),
                    'remark': _.get($scope.terminalToReplaceForm, 'remark')
                };
                httpMethod.bindReplaceSumbit(param).then(function(rsp){
                    if(rsp.success){
                        console.log('提交成功!');
                        location.reload();
                    }
                })
            };

            $scope.back = function(){
                history.back();
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
                    'commonRegionId': _.get($rootScope.termReplaceBaseInfo, 'commonRegionId'),
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
