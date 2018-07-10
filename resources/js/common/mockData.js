(function (root, factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		define(['mock'], factory);
	} else if (typeof exports === 'object') {
		factory(require('mock'));
		module.exports = 'mockData';
	} else {
		//Browser globals (root is window), we don't register it.
		factory(root.Mock);
	}
})(this, function (Mock) {
	//1、产品查询接口
	Mock.mock(new RegExp('/terminal/construction/prodInfoQuery'), {
		'success':'true',
		'code':'',
		'msg':'成功',
		'error':null,
		'data':{
			'custName':'@cname',
			'prodType|1': ['1', '2'],
			'productNum': /\d{5,10}/,
			'productId': '@id'
		}
	});
	//2、终端捆绑页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/construction/qryTermBindOrderBaseinfo'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			'operateDt': '@date()',
			'staffId': '@id',
			'staffName': '@cname',
			'commonRegionId': '@id',
			'regionName': '@city'
		}
	});
	//3、终端捆绑提交接口
	Mock.mock(new RegExp('/terminal/construction/bindTermSumbit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//4、终端替换页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/construction/qryTermReplaceBaseInfo'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': null,
		'data': {
			'operateDt': '@date()',
			'staffId': '@id',
			'staffName': '@cname',
			'commonRegionId': '@id',
			'regionName': '@city'
		}
	});
	//5、终端替换提交接口
	Mock.mock(new RegExp('/terminal/construction/bindReplaceSumbit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//6、拆机终端收取页面基本信息获取
	Mock.mock(new RegExp('/terminal/recover/qryTermTakeBaseInfo'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"takeRecordId":"@id",
			"operateDt":"@date",
			"staffId":'@id',
			"staffName":"@cname",
			"commonRegionId":'@id',
			"regionName":"@city"
		}
	});
	//7、选择收取终端
	Mock.mock(new RegExp('/terminal/recover/qryTakeOffer'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"instCode":"@id",
			"offerId":'@id',
			"offerName":"@cword(4,8)",
			"offerCode":"@id",
			"sortCd":"@id",
			"sortName":"@cword(3,6)",
			"brandCd":'@id',
			"brandName":"@cword(3,6)",
			"offerModelId":'@id',
			"offerModelName":"@cword(3,6)",
			"offerConfig":"@cword(3,8)",
			"oldBindNumber": /\d{5,10}/,
			"oldBindProductId": "@id",
			"oldCustName": "@cname"
		}
	});
	//8、拆机终端收取提交
	Mock.mock(new RegExp('/terminal/recover/termTakeOrderSubmit'), {
		'success': 'true',
		'code': '',
		"msg":"操作成功",
		"error":""
	});
	//9、终端串号添加接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferByInstCodes'), {
		'success':'true',
		'code':'',
		'msg':'操作成功',
		'error':'',
		'data':{
			'instCode':'@id',
			'macCode|1': ['@id', ''],
			'offerId': '@id',
			'offerName':'@cword(3,5)',
			'offerCode': '@id',
			'sortCd': '@id',
			'sortName':'@cword(3,5)',
			'bandCd': '@id',
			'bandName': '@cword(2,5)',
			'offerModelId': '@id',
			'offerModelName': '@cword(5,7)',
			'batchNum': /\d{5,10}/,
			'price|1-99': 10,
			'isHaveMac|1': ['Y', 'N'],
			'offerConfig': '@cword(8, 15)'
		}
	});
	//10、借机出库单基本信息获取接口
	Mock.mock(new RegExp('/terminal/construction/qryBorrowOrderOutBaseinfo'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			'borrowOrderId': '@id',
			'createDt': '@date',
			'originStorageId': '@id',
			'originStorageName': '@cword(4,6)',
			'orgName': '@cword(3,4)'
		}
	});
	//11、借机出库单提交接口
	Mock.mock(new RegExp('/terminal/construction/borrowOrderOutSubmit'), {
		'success': 'true',
		'code': '',
		'msg':'操作成功',
		'error':''
	});

	//1000、借机人下拉数据接口
	Mock.mock(new RegExp('/terminal/construction/qryBorrowUser'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data|3': [{
			"staffId":"@id",
			"staffName":"@cname",
		}],
		'errors': null
	});
	//24、调拨入库页面入库仓库信息查询
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrderInBaseInfo'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"targetStorageId": '@id',
			"targetStorageName": '@cword(3,5)',
			"commonRegionId":'@id',
			"regionName":"@city"
		}
	});
	//25、待确认调拨单查询接口
	Mock.mock(new RegExp('/terminal/stock/qryTbcAllotOrder'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"total|1-200": 200,
			"list|10": [{
				"allotOrderId":'@id',
				"staffId":'@id',
				"staffName":"@cname",
				"originStorageId":'@id',
				"originStorageName":"@cword(3,5)",
				"targetStorageId":"@id",
				"targetStorageName":"@cword(3,5)",
				"createDt":"@date",
				"statusCd|1":["1000", "1001", "1002"]//1000 待确认 1001 已完成 1002 已取消
			}]
		}
	});
	//26、待确认调拨单详情查询接口
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrderDetail'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"total|1-200": 200,
			"list|10": [{
				"allotItemId":'@id',
				"offerId":'@id',
				"offerName":"@cword(3,5)",
				"brandCd":'@id',
				"brandName":"@cword(3,5)",
				"sortCd":'@id',
				"sortName":"@cword(3,5)",
				"offerModelId":'@id',
				"offerModelName":"@cword(3,5)",
				"offerConfig":"@cword(3,8)",
				"applyOfferQty|1-100":10,
				"offerQty|1-100":10,
				"isHaveMac|1":['Y', 'N']
			}]	
		}
	});
	//27、调拨入库确认/拒绝接口
	Mock.mock(new RegExp('/terminal/stock/changeAllotOrderStatus4JL'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"total|1-200": 200,
			"list|10": [{
				"allotItemId":'@id',
				"offerId":'@id',
				"offerName":"@cword(3,5)",
				"brandCd":'@id',
				"brandName":"@cword(3,5)",
				"sortCd":'@id',
				"sortName":"@cword(3,5)",
				"offerModelId":'@id',
				"offerModelName":"@cword(3,5)",
				"offerConfig":"@cword(3,8)",
				"applyOfferQty|1-100":10,
				"offerQty|1-100":10,
				"isHaveMac|1":['Y', 'N']
			}]	
		}
	});
	//28、仓库所属组织/门店下拉框数据获取接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryOrgOrShop'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"orgId": '@id',
			"orgName":"@cword(3,5)",
			"subOrgList|4":[{
				"orgId":'@id',
				"orgName":"@cword(3,5)",
				"subOrgList|3":[{
					"orgId":'@id',
					"orgName":"@cword(3,5)"
				}]
			}]

		}
	});
	//29、仓库查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryStorage4Select'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"total|1-200": 200,
			"list|10": [{
				"storageId":'@id',
				"storageName":"@cword(3,5)",
				"storageLevel":["1", "2", "3"],//1 - 一级库（省中心库） 2 - 二级库（地市装维库） 3 - 三级库（网格库）
				"storageType":["1", "2", "3", "4", "5", "6"],//1 - 中心库 2 - 装维库 3 - 网格库 4 - 厅店库 5 - 个人库 6 –回收库
				"orgId":'@id',
				"orgName":"@cword(3,5)",
				"retailShopId":'@id',
				"retailShopName":"@cword(3,5)",
				"commonRegionId":'@id',
				"regionName":"@city",
				"statusCd":["1000", "1001", "1002"],//状态 1000 有效 1001 停用 1002 无效
				"remarks":"@cword(3,10)"
			}]
		}
	});
	//30、调拨入库页面终端串号录入接口
	Mock.mock(new RegExp('/terminal/baseConfig/checkInstCodsByOffer'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			"macCode":"@id"
		}
	});
	//31、调拨入库终端串号批量导入接口
	Mock.mock(new RegExp('/terminal/baseConfig/checkInstCodsByOfferBatch'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data|10':['@id']
	});
});



















