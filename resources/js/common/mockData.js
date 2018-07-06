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
});
