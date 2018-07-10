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
			"oldBindNumber": "@id",
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
			'instCode|1': ['1001', '1002', '1003'],
			'macCode': '@id',
			'offerId|1': ['1001', '1002', '1003'],
			'offerName':'@cword(3,5)',
			'offerCode': '@id',
			'sortCd': '@id',
			'sortName':'@cword(3,5)',
			'bandCd': '@id',
			'bandName': '@cword(2,5)',
			'offerModelId': '@id',
			'offerModelName': '@cword(5,7)',
			'batchNum': '@id',
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
	//12、借机退库单基本信息获取接口
	Mock.mock(new RegExp('/terminal/construction/qryBorrowOrderInBaseinfo'), {
		'success':'true',
		'code':'',
		'msg':'成功',
		'error':null,
		'data':{
			'borrowOrderId': '@id',
			'createDt': '@date',
			'targetStorageId': '@id',
			'targetStorageName':'@cword(4,6)',
			'orgName':'@cword(3,4)'
		}
	});
	//13、借机退库单提交接口
	Mock.mock(new RegExp('/terminal/construction/borrowOrderInSubmit'), {
		'success': 'true',
		'code': '',
		'msg':'操作成功',
		'error':''
	});
	//14、终端回收页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/recover/qryTermRecoverBaseInfo'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data':{
			'recoverOrderId':'@id',
			'createDt':'@date',
			'staffId': '@id',
			'staffName': '@cname',
			'recoverStorageId': '@id',
			'recoverStorageName':'@cword(4,6)'
		}
	});
	//15、选择回收终端接口
	Mock.mock(new RegExp('/terminal/recover/qryRecoverOffer'), {
		'success':'true',
		'code':'',
		'msg':'操作成功',
		'error':'',
		'data':{
			'instCode|1': ['1001', '1002', '1003'],
			'offerId|1': ['1001', '1002', '1003'],
			'offerName': '@cword(5,7)',
			'offerCode': '@id',
			'sortCd': '@id',
			'sortName': '@cword(3,6)',
			'bandCd': '@id',
			'bandName': '@cword(2,6)',
			'offerModelId': '@id',
			'offerModelName': '@word(5,7)',
			'offerConfig': '@cword(8, 16)'
		}
	});
	//16、终端回收提交接口
	Mock.mock(new RegExp('/terminal/recover/recoverOrderSubmit'), {
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

});



















