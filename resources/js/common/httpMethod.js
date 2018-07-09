'use strict';
angular
	.module('httpMethod', ['httpServer'])
	.constant('httpConfig', {
		siteUrl: 'http://192.168.31.218/fnTerminalManage-web'
	})
	.factory('httpMethod', ['httpConfig', 'httpServer', function (httpConfig, httpServer) {
		var httpMethod = {};
		//1、产品查询接口
		httpMethod.prodInfoQuery = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/prodInfoQuery', params, 'POST');
		};
		//2、终端捆绑页面基本信息获取接口
		httpMethod.qryTermBindOrderBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryTermBindOrderBaseinfo', params, 'POST');
		};
		//3、终端捆绑提交接口
		httpMethod.bindTermSumbit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/bindTermSumbit', params, 'POST');
		};
		//4、终端捆绑提交接口
		httpMethod.qryTermReplaceBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryTermReplaceBaseInfo', params, 'POST');
		};
		//5、终端替换提交接口
		httpMethod.bindReplaceSumbit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/bindReplaceSumbit', params, 'POST');
		};
		//6、拆机终端收取页面基本信息获取
		httpMethod.qryTermTakeBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTermTakeBaseInfo', params, 'POST');
		};
		//7、选择收取终端
		httpMethod.qryTakeOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTakeOffer', params, 'POST');
		};
		//8、拆机终端收取提交
		httpMethod.termTakeOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/termTakeOrderSubmit', params, 'POST');
		};
		return httpMethod;
	}]);
