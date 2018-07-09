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
        .controller('terminalBoundCtrl', ['$scope', '$rootScope', 'httpMethod', '$sessionStorage', function($scope, $rootScope, httpMethod, $sessionStorage){

            $scope.terminalBoundForm = {
                instCode: '',
                staffId: '',
                operateDt: '',
                constructionNo: '',
                bindBumber: '',
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
                    'instCode': $scope.terminalBoundForm.instCode,
                    'staffId': $rootScope.termBindOrderBaseinfo.staffId,
                    'operateDt': $rootScope.termBindOrderBaseinfo.operateDt,
                    'constructionNo': $scope.terminalBoundForm.constructionNo,
                    'bindBumber': $rootScope.accessInfo.number,
                    'custName': $rootScope.productInfo.custName,
                    'bindProductId': $rootScope.productInfo.bindProductId,
                    'crmOrderNo': $scope.terminalBoundForm.crmOrderNo,
                    'remark': $scope.terminalBoundForm.remark
                };
                httpMethod.bindTermSumbit(param).then(function(rsp){
                    if(rsp.success){
                        console.log('提交成功!')
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
                    'prodType': $scope.qryProdInfoForm.prodType,
                    'productNum': $rootScope.accessInfo.number,
                    'commonRegionId': $rootScope.termBindOrderBaseinfo.commonRegionId,
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
