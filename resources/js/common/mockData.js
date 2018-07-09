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

});



















