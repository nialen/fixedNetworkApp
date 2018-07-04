'use strict';
angular
	.module('httpMethod', ['httpServer'])
	.constant('httpConfig', {
		siteUrl: 'http://192.168.31.218/fnTerminalManage-web'
	})
	.factory('httpMethod', ['httpConfig', 'httpServer', function (httpConfig, httpServer) {
		var httpMethod = {};
		//1、终端分类配置查询接口
		httpMethod.qryOfferSort = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferSort', params, 'POST');
		};
		//2、终端分类配置新增/修改接口
		httpMethod.addOrModOfferSort = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/addOrModOfferSort', params, 'POST');
		};
		//3、终端分类配置生效/失效/删除接口
		httpMethod.changeOfferSortStatus = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/changeOfferSortStatus', params, 'POST');
		};
		//4、终端品牌配置查询接口
		httpMethod.qryOfferBrand = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferBrand', params, 'POST');
		};
		//5、终端品牌配置新增/修改接口
		httpMethod.addOrModOfferBrand = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/addOrModOfferBrand', params, 'POST');
		};
		//6、终端品牌配置生效/失效/删除接口
		httpMethod.changeOfferBrandStatus = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/changeOfferBrandStatus', params, 'POST');
		};
		//7、获取终端分类下拉框数据
		httpMethod.qryOfferSort4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferSort4Select', params, 'POST');
		};
		//8、查询终端品牌下拉框数据
		httpMethod.qryOfferBrand4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferBrand4Select', params, 'POST');
		};
		//9、终端型号配置查询接口
		httpMethod.qryOfferModel = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferModel', params, 'POST');
		};
		//10、终端型号配置新增/修改接口
		httpMethod.addOrModOfferModel = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/addOrModOfferModel', params, 'POST');
		};
		//11、终端型号配置生效/失效/删除接口
		httpMethod.changeOfferModelStatus = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/changeOfferModelStatus', params, 'POST');
		};
		//12、终端配置查询接口
		httpMethod.qryOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOffer', params, 'POST');
		};
		//13、终端型号下拉框数据查询接口
		httpMethod.qryOfferModel4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferModel4Select', params, 'POST');
		};
		//14、单位下拉框数据查询接口
		httpMethod.qryUnit4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryUnit4Select', params, 'POST');
		};
		//15、终端配置新增/修改接口
		httpMethod.addOrModOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/addOrModOffer', params, 'POST');
		};
		//16、终端配置生效/失效/删除接口
		httpMethod.changeOfferStatus = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/changeOfferStatus', params, 'POST');
		};
		//17、地区下拉框数据查询接口
		httpMethod.qryCommonRegion = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryCommonRegion', params, 'POST');
		};
		//18、仓库设置查询接口
		httpMethod.qryStorage = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryStorage', params, 'POST');
		};
		//19、仓库所属组织/门店下拉框数据获取接口
		httpMethod.qryOrgOrShop = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOrgOrShop', params, 'POST');
		};
		//20、仓库设置新增/修改接口
		httpMethod.addOrModStorage = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/addOrModStorage', params, 'POST');
		};
		//21、仓库设置启用/停用/删除接口
		httpMethod.changeStorageStatus = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/changeStorageStatus', params, 'POST');
		};
		//22、供货商查询接口
		httpMethod.qrySupplier = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qrySupplier', params, 'POST');
		};
		//23、供货商新增/修改接口
		httpMethod.addOrModSupplier = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/addOrModSupplier', params, 'POST');
		};
		//24、供货商启用/停用/删除接口
		httpMethod.changeSupplierStatus = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/changeSupplierStatus', params, 'POST');
		};
		//25、调拨申请单基本信息查询接口
		httpMethod.qryAllotApplyOrderBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotApplyOrderBaseinfo', params, 'POST');
		};
		//26、仓库查询接口
		httpMethod.qryStorage4Select = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryStorage4Select', params, 'POST');
		};
		//27、调拨申请提交接口
		httpMethod.allotApplyOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotApplyOrderSubmit', params, 'POST');
		};
		//28、获取调拨申请单审核页面基本信息
		httpMethod.getApplyConfirmBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/getApplyConfirmBaseInfo', params, 'POST');
		};
		//29、调拨申请单查询接口
		httpMethod.qryAllotApplyOrderByCond = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotApplyOrderByCond', params, 'POST');
		};
		//30、调拨申请单详情查询接口
		httpMethod.qryAllotApplyOrderDetail = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotApplyOrderDetail', params, 'POST');
		};
		//31、调拨申请审批拒绝接口
		httpMethod.allotApplyOrderRefuse = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotApplyOrderRefuse', params, 'POST');
		};
		//32、申请单转调拨单基本信息获取接口
		httpMethod.qryAllotOrderBaseInfo4Apply = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotOrderBaseInfo4Apply', params, 'POST');
		};
		//33、终端串号添加接口
		httpMethod.qryOfferByInstCodes = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferByInstCodes', params, 'POST');
		};
		//34、终端串号批量导入接口
		httpMethod.checkInstCodsByOfferBatch = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/checkInstCodsByOfferBatch', params, 'POST');
		};
		//35、调拨申请审批通过接口
		httpMethod.allotApplyOrderPass = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotApplyOrderPass', params, 'POST');
		};
		//36、获取调拨出库单基本信息
		httpMethod.qryAllotOrderOutBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotOrderOutBaseinfo', params, 'POST');
		};
		//37、调拨出库单提交接口
		httpMethod.allotOrderOutSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotOrderOutSubmit', params, 'POST');
		};
		//38、调拨入库页面入库仓库信息查询接口
		httpMethod.qryAllotOrderInBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotOrderInBaseInfo', params, 'POST');
		};
		//39、待确认调拨单查询接口
		httpMethod.qryTbcAllotOrder = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryTbcAllotOrder', params, 'POST');
		};
		//39-1、待确认调拨单查询接口
		httpMethod.qryTbcAllotOrder4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryTbcAllotOrder4JL', params, 'POST');
		};
		//40、待确认调拨单详情查询接口
		httpMethod.qryAllotOrderDetail = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotOrderDetail', params, 'POST');
		};
		//41、串码详情查询接口
		httpMethod.qryInstCodesByDetailId = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryInstCodesByDetailId', params, 'POST');
		};
		//42、调拨单确认/拒绝接口
		httpMethod.changeAllotOrderStatus = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/changeAllotOrderStatus', params, 'POST');
		};
		//43、调拨单查询接口
		httpMethod.qryAllotOrder = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotOrder', params, 'POST');
		};
		//44、调拨单撤销接口
		httpMethod.allotOrderCancel = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotOrderCancel', params, 'POST');
		};
		//45、领用调拨单基本信息获取接口
		httpMethod.qryCollarAllotOrderBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryCollarAllotOrderBaseinfo', params, 'POST');
		};
		//46、领用调拨单提交接口
		httpMethod.collarAllotOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/collarAllotOrderSubmit', params, 'POST');
		};
		//47、借机出库单基本信息获取
		httpMethod.qryBorrowOrderOutBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryBorrowOrderOutBaseinfo', params, 'POST');
		};
		//48、借机出库单提交接口
		httpMethod.borrowOrderOutSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/borrowOrderOutSubmit', params, 'POST');
		};
		//49、借机退库单基本信息获取
		httpMethod.qryBorrowOrderInBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryBorrowOrderInBaseinfo', params, 'POST');
		};
		//50、借机退库单提交接口
		httpMethod.borrowOrderInSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/borrowOrderInSubmit', params, 'POST');
		};
		//51、采购入库/退库单基本信息获取
		httpMethod.qryProcureOrderBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/qryProcureOrderBaseinfo', params, 'POST');
		};
		//52、采购单终端串号批量导入接口
		httpMethod.addInstCodeBatch = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/addInstCodeBatch', params, 'POST');
		};
		//53、采购入库单提交接口
		httpMethod.procureOrderInSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/procureOrderInSubmit', params, 'POST');
		};
		//54、采购退库单终端串码扫描验证接口
		httpMethod.addInstCode = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/addInstCode', params, 'POST');
		};
		//55、采购退库单提交接口
		httpMethod.procureOrderOutSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/procureOrderOutSubmit', params, 'POST');
		};
		//56、采集单查询接口
		httpMethod.qryProcureOrder = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/qryProcureOrder', params, 'POST');
		};
		//57、采集单详情查询接口
		httpMethod.qryProcureOrderDetail = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/qryProcureOrderDetail', params, 'POST');
		};
		//58、采集单串码详情查询接口
		httpMethod.qryProcureOrderInstCodes = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/purchase/qryProcureOrderInstCodes', params, 'POST');
		};
		//59、库存查询页面仓库信息获取接口
		httpMethod.getStockByStaff = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/getStockByStaff', params, 'POST');
		};
		//60、库存信息查询接口
		httpMethod.qryStockInst = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryStockInst', params, 'POST');
		};
		//61、库存信息终端明细查询接口
		httpMethod.qryStockInstCodes = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryStockInstCodes', params, 'POST');
		};
		//62、终端捆绑提交接口
		httpMethod.bindTermSumbit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/bindTermSumbit', params, 'POST');
		};
		//63、终端串码扫描并验证接口
		httpMethod.scanInstCode = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/scanInstCode', params, 'POST');
		};
		//64、终端解绑接口
		httpMethod.unBindTerm = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/unBindTerm', params, 'POST');
		};
		//65、查询业务跟踪列表接口
		httpMethod.qryBusiListByCode = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/maintain/qryBusiListByCode', params, 'POST');
		};
		//66、采购入库页面终端串号录入接口
		httpMethod.addInstCode4Pur = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/addInstCode4Pur', params, 'POST');
		};
		//67、调拨单申请页面串号录入接口
		httpMethod.checkInstCodsByOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/checkInstCodsByOffer', params, 'POST');
		};
		//68、终端捆绑页面基本信息
		httpMethod.qryTermBindOrderBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryTermBindOrderBaseinfo', params, 'POST');
		};
		//69、产品信息查询接口
		httpMethod.prodInfoQuery = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/prodInfoQuery', params, 'POST');
		};
		//70、终端替换页面基本信息获取接口
		httpMethod.qryTermReplaceBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryTermReplaceBaseInfo', params, 'POST');
		};
		//71、终端替换提交接口
		httpMethod.bindReplaceSumbit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/bindReplaceSumbit', params, 'POST');
		};
		//72、终端回收页面基本信息获取接口
		httpMethod.qryTermRecoverBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTermRecoverBaseInfo', params, 'POST');
		};
		//73、选择回收终端接口
		httpMethod.qryRecoverOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryRecoverOffer', params, 'POST');
		};
		//74、终端回收信息提交
		httpMethod.recoverOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/recoverOrderSubmit', params, 'POST');
		};
		//75、拆机终端收取页面基本信息获取接口
		httpMethod.qryTermTakeBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTermTakeBaseInfo', params, 'POST');
		};
		//76、选择收取终端接口
		httpMethod.qryTakeOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTakeOffer', params, 'POST');
		};
		//77、拆机终端收取提交接口
		httpMethod.termTakeOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/termTakeOrderSubmit', params, 'POST');
		};
		//78、回收处理出库页面基本信息获取接口
		httpMethod.qryTermHdlOutBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTermHdlOutBaseInfo', params, 'POST');
		};
		//79、选择出库终端接口
		httpMethod.qryHdlOutOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryHdlOutOffer', params, 'POST');
		};
		//80、回收处理出库单提交接口
		httpMethod.termHdlOutOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/termHdlOutOrderSubmit', params, 'POST');
		};
		//81、回收处理入库页面基本信息获取接口
		httpMethod.qryTermHdlInBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTermHdlInBaseInfo', params, 'POST');
		};
		//82、选择入库终端接口
		httpMethod.qryHdlInOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryHdlInOffer', params, 'POST');
		};
		//83、回收处理入库单提交接口
		httpMethod.termHdlInOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/termHdlInOrderSubmit', params, 'POST');
		};
		//84、终端报废页面基本信息获取接口
		httpMethod.qryTermScrapBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryTermScrapBaseInfo', params, 'POST');
		};
		//85、终端串码扫描并验证接口
		httpMethod.qryScrapOffer = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryScrapOffer', params, 'POST');
		};
		//86、终端报废提交接口
		httpMethod.termScrapOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/termScrapOrderSubmit', params, 'POST');
		};
		//87、领用终端查询接口（吉林）
		httpMethod.qryInstByCodeOrBNbr = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryInstByCodeOrBNbr', params, 'POST');
		};
		//88、串码详情查询接口（吉林）
		httpMethod.qryInstCodesBatchNum = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryInstCodesBatchNum', params, 'POST');
		};
		//89、领用调拨单提交接口（吉林）
		httpMethod.collarAllotOrderSubmit4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/collarAllotOrderSubmit4JL', params, 'POST');
		};
		//90、领用退库单基本信息获取（吉林）接口
		httpMethod.qryCollarBackOrderBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryCollarBackOrderBaseinfo', params, 'POST');
		};
		//91、领用退库单提交接口（吉林）
		httpMethod.collarBakcOrderSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/collarBakcOrderSubmit', params, 'POST');
		};
		//92、获取调拨申请单审核（吉林）页面基本信息
		httpMethod.getApplyConfirmBaseInfo4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/getApplyConfirmBaseInfo4JL', params, 'POST');
		};
		//93、调拨申请单查询接口(吉林)
		httpMethod.qryApplyOrderByCond4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryApplyOrderByCond4JL', params, 'POST');
		};
		//94、调拨申请审批确认接口（吉林）
		httpMethod.applyOrderPass4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/applyOrderPass4JL', params, 'POST');
		};
		//95、获取调拨单审核（吉林）页面基本信息
		httpMethod.getAllotConfirmBaseInfo4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/getAllotConfirmBaseInfo4JL', params, 'POST');
		};
		//96、调拨申请单查询接口(吉林)
		httpMethod.qryAllotOrderByCond4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryAllotOrderByCond4JL', params, 'POST');
		};
		//97、调拨单审批确认接口（吉林）
		httpMethod.allotOrderPass4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotOrderPass4JL', params, 'POST');
		};
		//98、获取当前仓库信息
		httpMethod.getOldTermDealBaseInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/getOldTermDealBaseInfo', params, 'POST');
		};
		//99、回收终端查询接口
		httpMethod.qryOldTermInfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryOldTermInfo', params, 'POST');
		};
		//100、终端处理基本信息获取
		httpMethod.qryOldTermDelOrder = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryOldTermDelOrder', params, 'POST');
		};
		//101、回收终端处理提交接口
		httpMethod.oldTermDealSumbit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/oldTermDealSumbit', params, 'POST');
		};
		//102、终端型号属性获取接口（新增/修改/详情）
		httpMethod.qryOfferModelAttr = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryOfferModelAttr', params, 'POST');
		};
		//103、终端归属管理查询接口
		httpMethod.qryOfferBatchArea = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryOfferBatchArea', params, 'POST');
		};
		//104、修改归属串码明细查询接口
		httpMethod.qryStockInstCodesByBatchNum = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryStockInstCodesByBatchNum', params, 'POST');
		};
		//105、修改归属保存接口
		httpMethod.saveStockArea = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/saveStockArea', params, 'POST');
		};
		//107、调拨出库提交接口
		httpMethod.allotOrderOutSubmit4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/allotOrderOutSubmit4JL', params, 'POST');
		};
		//111、调拨入库确认/拒绝接口
		httpMethod.changeAllotOrderStatus4JL = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/changeAllotOrderStatus4JL', params, 'POST');
		};
		//112、网格退库基本信息获取
		httpMethod.qryGridRefundBaseinfo = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/qryGridRefundBaseinfo', params, 'POST');
		};
		//114、网格退库单提交接口
		httpMethod.gridRefundSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/stock/gridRefundSubmit', params, 'POST');
		};
		//115、退出仓库下拉选择接口
		httpMethod.qryGridStorageByUser = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/baseConfig/qryGridStorageByUser', params, 'POST');
		};
		//116、待回收终端查询接口
		httpMethod.qryNeedRecoverTerm = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryNeedRecoverTerm', params, 'POST');
		};
		//117、旧终端处理意见查询接口
		httpMethod.qryOldStockInst = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/qryOldStockInst', params, 'POST');
		};
		//118、旧终端处理意见提交接口
		httpMethod.oldStockInstSubmit = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/recover/oldStockInstSubmit', params, 'POST');
		};
		//119、借退机员工下拉数据接口
		httpMethod.qryBorrowUser = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/qryBorrowUser', params, 'POST');
		};
		//121、查询退库人个人仓库信息
		httpMethod.queryStorageByOutUser = function (params) {
			return httpServer(httpConfig.siteUrl + '/terminal/construction/queryStorageByOutUser', params, 'POST');
		};
		return httpMethod;
	}]);
