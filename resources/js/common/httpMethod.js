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
		//9、终端串号添加接口
		httpMethod.qryOfferByInstCodes = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferByInstCodes', params, 'POST');
		};
		//10、借机出库单基本信息获取接口
		httpMethod.qryBorrowOrderOutBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryBorrowOrderOutBaseinfo', params, 'POST');
		};
		//11、借机出库单提交接口
		httpMethod.borrowOrderOutSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/borrowOrderOutSubmit', params, 'POST');
		};
		//12、借机退库单基本信息获取接口
		httpMethod.qryBorrowOrderInBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryBorrowOrderInBaseinfo', params, 'POST');
		};
		//13、借机退库单提交接口
		httpMethod.borrowOrderInSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/borrowOrderInSubmit', params, 'POST');
		};
		//14、终端回收页面基本信息获取接口
		httpMethod.qryTermRecoverBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTermRecoverBaseInfo', params, 'POST');
		};
		//15、选择回收终端接口
		httpMethod.qryRecoverOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryRecoverOffer', params, 'POST');
		};
		//16、终端回收提交接口
		httpMethod.recoverOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/recoverOrderSubmit', params, 'POST');
		};
		//17、调拨申请单基本信息查询接口
		httpMethod.qryAllotApplyOrderBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotApplyOrderBaseinfo', params, 'POST');
		};
		//18、调拨申请提交接口
		httpMethod.allotApplyOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotApplyOrderSubmit', params, 'POST');
		};
		//19、终端分类下拉框数据获取接口
		httpMethod.qryOfferSort4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferSort4Select', params, 'POST');
		};
		//20、终端品牌下拉框数据获取接口
		httpMethod.qryOfferBrand4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferBrand4Select', params, 'POST');
		};
		//21、终端配置查询接口
		httpMethod.qryOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOffer', params, 'POST');
		};
		//22、终端型号下拉框数据查询接口
		httpMethod.qryOfferModel4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferModel4Select', params, 'POST');
		};
		//23、调出仓库下拉选择接口
		httpMethod.qryTwoStorage = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryTwoStorage', params, 'POST');
		};
		//1000、借机人下拉数据接口
		httpMethod.qryBorrowUser = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryBorrowUser', params, 'POST');
		};
		return httpMethod;
	}]);
