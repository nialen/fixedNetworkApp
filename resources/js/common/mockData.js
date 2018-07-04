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
	//54、采购退库单终串码批量导入接口
	Mock.mock(new RegExp('/terminal/purchase/addInstCodeBatch'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data': {
			'totalCount|1-99': 10,
			'passCount|1-99': 10,
			'unPassCount|1-99': 10,
			'instCodes|2-5': [{
				'resultCode|1': ['0', '1'],
				'resultMsg': '@cword(5,10)',
				'instCode': '@id',
				'macCode': '@id',
				'batchNum': '@id',
				'price|1-99': 10,
				'offer': {
					'offerId|1': ['1001', '1002', '1003', '1004'], //终端Id
					'offerName': '@cword(4,6)',
					'offerCode': '@id',
					'sortCd': '@id',
					'sortName': '@cword(2,6)',
					'brandCd': '@id',
					'brandName': '@cword(2,6)',
					'offerModelId': '@id',
					'offerModelName': '@cword(2,6)',
					'offerConfig': '@cword(8,16)',
					'isHaveMac|1': ['Y', 'N']
				}
			}]
		}
	});
	//7、获取终端分类下拉框数据
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferSort4Select'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data|10': [{
			'sortCd': '@id',
			'sortName': '@cword(6)'
		}],
		'errors': null
	});
	//1、终端分类配置查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferSort'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 1,
			'list|5': [{
				'sortCd': '@id',
				'sortName': '@cword(3,6)',
				'sortDesc': '@cword(10,30)',
				'categoryCd': '@id',
				'seq|1-10': 1,
				'createDt': '@datetime()',
				'version': '@datetime()',
				'statusCd|1': ['1000', '1001', '1002'],
				'description': '@cword(10,20)',
			}]
		},
		'errors': null
	});
	//2、终端分类配置新增/修改接口
	Mock.mock(new RegExp('/terminal/baseConfig/addOrModOfferSort'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//3、终端分类配置生效/失效/删除接口
	Mock.mock(new RegExp('/terminal/baseConfig/changeOfferSortStatus'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//8、查询终端品牌下拉框数据
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferBrand4Select'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data|10': [{
			'brandCd': '@id',
			'brandName': '@cword(6)',
			'firstLetter|+1': ['A', 'B', 'C', 'D', 'E', 'F']
		}],
		'errors': null
	});
	//4、终端品牌配置查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferBrand'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data': {
			'total|1-99': 1,
			'list|5': [{
				'brandCd': '@id',
				'brandName': '@cword(3,6)',
				'categoryCd': '@cword(10,20)',
				'seq|1-10': 1,
				'codeRegex': '@word(3,6)',
				'bizmanId': '@id',
				'statusCd|1': ['1000', '1001', '1002'],
				'description': '@cword(10,20)'
			}]
		}
	});
	//5、终端品牌配置新增/修改接口
	Mock.mock(new RegExp('/terminal/baseConfig/addOrModOfferBrand'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//6、终端品牌配置生效/失效/删除接口
	Mock.mock(new RegExp('/terminal/baseConfig/changeOfferBrandStatus'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//13、获取终端型号下拉框数据
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferModel4Select'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data|10': [{
			'offerModelId': '@id',
			'offerModelName': '@cword(6)',
			'firstLetter|+1': ['A', 'B', 'C', 'D', 'E', 'F']
		}],
		'errors': null
	});

	//10、终端型号配置新增/修改接口
	Mock.mock(new RegExp('/terminal/baseConfig/addOrModOfferModel'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//11、终端型号配置生效/失效/删除接口
	Mock.mock(new RegExp('/terminal/baseConfig/changeOfferModelStatus'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//33、添加终端串号到调拨单
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferByInstCodes'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id', //终端串码
			'macCode': '@id', //Mac码
			'offerId|1': ['1001', '1002', '1003', '1004'], //终端Id
			'offerName': '@cword(4)', //终端名称
			'offerCode': '@id', //终端编码
			'sortCd': '@id', //终端分类编码
			'sortName': '@cword(4)', //终端分类名称
			'brandCd': '@id', //终端品牌编码
			'brandName': '@cword(4)', //终端品牌名称
			'offerModelId': '@id', //终端型号Id
			'offerModelName': '@cword(4)', //终端型号名称
			'offerConfig': '@cword(4)', //终端配置信息
			'price|1-99': 10, //单价
			'batchNum': '@id', //批次号
			'isHaveMac|1': ['Y', 'N']
		},
		'errors': null
	});

	//14、单位下拉框数据查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryUnit4Select'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data|5': [{
			'unitCd': '@id',
			'name': '@cword(1,2)'
		}]
	});
	//15、终端配置新增/修改接口
	Mock.mock(new RegExp('/terminal/baseConfig/addOrModOffer'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//16、终端配置生效/失效/删除接口
	Mock.mock(new RegExp('/terminal/baseConfig/changeOfferStatus'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//17、地区下拉框数据查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryCommonRegion'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data|5-10': [{
			'commonRegionId|1': ['1001','1002','1003'],
			'regionName': '@city'
		}]
	});
	//18、仓库设置查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryStorage'), {
		'success': 'true',
		'code': '',
		'msg': '成功',
		'error': null,
		'data': {
			'total|1-99': 1,
			'list|5': [{
				'storageId': '@id',
				'storageName': '@cword(3,6)',
				'storageLevel|1': ['1', '2', '3'],
				'storageType|1': ['1', '2', '3', '4', '5'],
				'orgId': '@id',
				'orgName': '@cword(3,6)',
				'retailShopId': '@id',
				'retailShopName': '@cword(3,6)',
				'commonRegionId': '@id',
				'regionName': '@city',
				'statusCd|1': ['1000', '1001'],
				'remarks': '@cword(10,30)'
			}]
		}
	});
	//19、仓库所属组织/门店下拉框数据获取接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryOrgOrShop'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data|2': [{
			'orgId': '@id', //组织或门店ID
			'orgName': '@cword(4, 6)', //组织或门店名称
			'subOrgList|2': [{
				'orgId': '@id', //组织或门店ID
				'orgName': '@cword(4, 6)', //组织或门店名称
				'subOrgList|2': [{
					'orgId': '@id', //组织或门店ID
					'orgName': '@cword(4, 6)' //组织或门店名称
				}]
			}]
		}],
		'errors': null
	});
	//20、仓库设置新增/修改接口
	Mock.mock(new RegExp('/terminal/baseConfig/addOrModStorage'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//21、仓库设置启用/停用/删除接口
	Mock.mock(new RegExp('/terminal/baseConfig/changeStorageStatus'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//22、查询供应商信息
	Mock.mock(new RegExp('/terminal/baseConfig/qrySupplier'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 20,
			'list|10': [{
				'supplierId': '@id',
				'supplierName': '@cword(6)',
				'linkMan': '@cword(4)',
				'linkNbr|1': ['13782828128'],
				'supplierPhone|1': ['13782828128'],
				'supplierFax': '@cword(4)',
				'statusCd|+1': ['1000', '1001'],//1000 有效 1001 停用 1002 无效
				'remarks': '@cword(10)'
			}]
		},
		'errors': null
	});
	//23、供货商新增/修改接口
	Mock.mock(new RegExp('/terminal/baseConfig/addOrModSupplier'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//24、供货商启用/停用/删除接口
	Mock.mock(new RegExp('/terminal/baseConfig/changeSupplierStatus'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//25、调拨申请单基本信息查询接口
	Mock.mock(new RegExp('/terminal/stock/qryAllotApplyOrderBaseinfo'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data': {
			'allotOrder': {
				'allotOrderId': '@id',
				'createDt': '@date()',
				'staffId': '@id',
				'staffName': '@cname',
				'targetStorageId': '@id',
				'targetStorageName': '@cword(4,6)'
			},
			'originStorageList|5': [{
				'storageId': '@id',
				'storageName': '@cword(4,6)'
			}]
		}
	});
	//26、仓库查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryStorage4Select'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 20,
			'list|4': [{
				'storageId': '@id', //仓库编码
				'storageName': '@cword(4, 6)', //仓库名称
				'storageLevel': '1', //仓库级别 1-一级库（省中心库）2-二级库（地市装维库）3-三级库（网格库）
				'storageType': '1', //仓库类型 1-中心库 2-装维库 3-网格库 4-厅店库 5-个人库 6-回收库
				'orgId': '@id', //所属组织ID
				'orgName': '@cword(4, 6)', //所属组织名称
				'retailShopId': '@id', //所属门店ID
				'retailShopName': '@cword(4, 6)', //所属门店名称
				'commonRegionId': '@id', //地区Id
				'regionName': '@city()', //地区名称
				'statusCd|+1': ['1000', '1001', '1002'], //状态 1000 有效 1001 停用 1002 无效
				'remarks': '@cword(6, 10)' //备注
			}]
		},
		'errors': null
	});
	//27、调拨申请提交接口
	Mock.mock(new RegExp('/terminal/stock/allotApplyOrderSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//28、获取调拨申请单审核页面基本信息
	Mock.mock(new RegExp('/terminal/stock/getApplyConfirmBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'staffId': '@id', //员工ID
			'staffName': '@cname', //员工姓名
			'commonRegionId': 2, //所属地区ID
			'regionName': '长春市', //所属地区名称
			'originStorageId': '@id', //调出仓库ID
			'originStorageName': '@cword(5)' //调出仓库名称
		},
		'errors': null
	});
	//29、调拨申请单查询
	Mock.mock(new RegExp('/terminal/stock/qryAllotApplyOrderByCond'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total': 200,
			'list|10': [{
				'allotOrderId': '@id',
				'staffId': '@id',
				'staffName': '@cname',
				'originStorageId': '@id',
				'originStorageName': '@cword(5)',
				'targetStorageId': '@id',
				'targetStorageName': '@cword(5)',
				'createDt': '@date',
				'statusCd|+1': ['1000', '1001', '1002']
			}]
		},
		'errors': null
	});
	//30、调拨申请单详情查询
	Mock.mock(new RegExp('/terminal/stock/qryAllotApplyOrderDetail'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total': 200,
			'list|10': [{
				'offerId': '@id',
				'offerName': '@cword(5)',
				'brandCd': '@id',
				'brandName': '@cword(5)',
				'sortCd': '@id',
				'sortName': '@cword(5)',
				'offerModelId': '@id',
				'offerModelName': '@cword(5)',
				'offerConfig': '@cword(5)',
				'applyOfferQty|1-100': 10,
				'offerQty|1-100': 10,
				'isHaveMac|1': ['Y', 'N']
			}]
		},
		'errors': null
	});
	//31、调拨申请审批拒绝
	Mock.mock(new RegExp('/terminal/stock/allotApplyOrderRefuse'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//32、申请单转调拨单基本信息获取
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrderBaseInfo4Apply'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'allotOrderId': '@id',
			'createDt': '@date',
			'staffId': '@id',
			'staffName': '@cname'
		},
		'errors': null
	});
	//34、	调拨申请审核页面终端串号批量导入接口
	Mock.mock(new RegExp('/terminal/baseConfig/checkInstCodsByOfferBatch'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data|5-10': [{
			'instCode': '@id',
			'macCode': '@id'
		}]
	});
	//35、调拨申请审批通过
	Mock.mock(new RegExp('/terminal/stock/allotApplyOrderPass'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//36、获取调拨出库单基本信息
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrderOutBaseinfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'allotOrderId': '@id', //单据号
			'createDt': '@date(yyyy-MM-dd)', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'originStorageId': '@id', //调出仓库ID
			'originStorageName': '@cword(4, 6)', //调出仓库名称
			'commonRegionId': '@id', //地区ID
			'regionName': '@city' //地区名称
		},
		'errors': null
	});
	//37、调拨出库单提交接口
	Mock.mock(new RegExp('/terminal/stock/allotOrderOutSubmit'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'errors': null
	});
	//38、调拨入库页面入库仓库信息查询接口
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrderInBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'targetStorageId': '@id',
			'targetStorageName': '@cword(4, 6)',
			'commonRegionId': '@id',
			'regionName': '@city'
		},
		'errors': null
	});
	//39、待确认调拨单查询接口
	Mock.mock(new RegExp('/terminal/stock/qryTbcAllotOrder'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 1,
			'list|10': [{
				'allotOrderId': '@id', //单据号
				'staffId': '@id', //申请人ID
				'staffName': '@cname', //申请人姓名
				'originStorageId': '@id', //调出仓库ID
				'originStorageName': '@cword(4, 6)', //调出仓库名称
				'targetStorageId': '@id', //调入仓库Id
				'targetStorageName': '@cword(4, 6)', //调入仓库名称
				'createDt': '@date(yyyy-MM-dd)', //创建时间
				'statusCd|1': ['1000', '1001', '1002'] //状态 1000待确认 1001已完成 1002已取消
			}]
		},
		'errors': null
	});
	//40、待确认调拨单详情查询接口
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrderDetail'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|10': 1,
			'list|10': [{
				'allotItemId': '@id', //调拨单ID
				'offerId': '@id', //终端ID
				'offerName': '@cword(4, 6)', //终端名称
				'brandCd': '@id', //终端品牌编码
				'brandName': '@cword(4, 6)', //终端品牌名称
				'sortCd': '@id', //类别编码
				'sortName': '@cword(4, 6)', //类别名称
				'offerModelId': '@id', //终端型号编码
				'offerModelName': '@cword(4, 6)', //终端型号名称
				'offerConfig': '@cword(6, 10)', //终端配置
				'offerQty|1-10': 1, //终端数量
				'applyOfferQty|1-100': 10
			}]
		},
		'errors': null
	});
	//41、串码详情查询接口
	Mock.mock(new RegExp('/terminal/stock/qryInstCodesByDetailId'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 1,
			'list|30': ['@id'] //终端串码
		},
		'errors': null
	});
	//42、调拨单确认/拒绝接口
	Mock.mock(new RegExp('/terminal/stock/changeAllotOrderStatus'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//43、调拨单查询接口
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrder'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 1,
			'list|10': [{
				'allotOrderId': '@id', //单据号
				'staffId': '@id', //申请人ID
				'staffName': '@cname', //申请人姓名
				'originStorageId': '@id', //调出仓库ID
				'originStorageName': '@cword(4, 6)', //调出仓库名称
				'targetStorageId': '@id', //调入仓库Id
				'targetStorageName': '@cword(4, 6)', //调入仓库名称
				'createDt': '@date(yyyy-MM-dd)', //创建时间
				'statusCd|1': ['1000', '1001', '1002'], //状态 1000待审批/待确认 1001已完成 1002已取消
				'confirmStaffId': '@id', //确认人ID
				'confirmStaffName': '@cname', //确认人姓名
				'allotRemarks': '@cword(6, 10)', //单据备注
				'confirmRemarks': '@cword(6, 10)', //确认备注
				'finishDt': '@date(yyyy-MM-dd)', //完成时间
				'orderType|1': ['1', '2', '3'] //调拨单类型 1调拨申请单 2调拨单 3领用调拨单
			}]
		},
		'errors': null
	});
	//44、调拨单撤销接口
	Mock.mock(new RegExp('/terminal/stock/allotOrderCancel'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//45、领用调拨单基本信息获取接口
	Mock.mock(new RegExp('/terminal/stock/qryCollarAllotOrderBaseinfo'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'data': {
			//领用调拨单基本信息
			'allotOrder': {
				'allotOrderId': '@id', //单据号
				'createDt': '@date(yyyy-MM-dd)', //制单日期
				'staffId': '@id', //制单人ID
				'staffName': '@cname', //制单人姓名
				'originStorageId': '@id', //调出仓库ID
				'originStorageName': '@cword(4, 6)' //调出仓库名称
			},
			//入库仓库下拉数据
			'targetStorageList|10': [{
				'storageId': '@id', //调入仓库ID
				'storageName': '@cword(4, 6)' //调入仓库名称
			}]
		},
		'error': ''
	});
	//46、领用调拨单提交接口
	Mock.mock(new RegExp('/terminal/stock/collarAllotOrderSubmit'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'errors': null
	});
	//47、借机出库单基本信息接口
	Mock.mock(new RegExp('/terminal/construction/qryBorrowOrderOutBaseinfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'borrowOrderId': '@id',//单据号
			'createdt': '@date(yyyy-MM-dd)',//制单日期
			'staffId': '@id',//制单人ID
			'staffName': '@cname',//制单人
			'originStorageId': '@id',//借出仓库ID
			'originStorageName': '@cword(6)',//借出仓库名称
			'orgName': '@cword(6)'//所属部门
		},
		'errors': null
	});
	//48、借机出库单提交
	Mock.mock(new RegExp('/terminal/construction/borrowOrderOutSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//49、借机退库单基本信息
	Mock.mock(new RegExp('/terminal/construction/qryBorrowOrderInBaseinfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'borrowOrderId': '@id',//单据号
			'createDt': '@date(yyyy-MM-dd)',
			'staffId': '@id',
			'staffName': '@cname',
			'targetStorageId': '@id',
			'targetStorageName': '@cword(4)',
			'orgName': '@cword(4)'
		},
		'errors': null
	});
	//50、借机退库单提交
	Mock.mock(new RegExp('/terminal/construction/borrowOrderInSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//51、根据登录人信息获取采购入库单基本信息
	Mock.mock(new RegExp('/terminal/purchase/qryProcureOrderBaseinfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'procureOrderId': '@id',
			'createDt': '@date',
			'staffId': '@id',
			'staffName': '@name',
			'storageId': '@id',
			'storageName': '@cword(6)'
		},
		'errors': null
	});
	//53、提交采购单入库信息
	Mock.mock(new RegExp('/terminal/purchase/procureOrderInSubmit'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//54、采购退库单终端串码扫描验证接口
	Mock.mock(new RegExp('/terminal/purchase/addInstCode'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id',
			'offerId': '@id',
			'offerName': '@cword(4)',
			'offerCode': '@id',
			'sortCd': '@id',
			'sortName': '@cword(4)',
			'brandCd': '@id',
			'brandName': '@cword(4)',
			'offerModelId': '@id',
			'offerModelName': '@cword(4)',
			'offerConfig': '@cword(4)',
			'costPrice|1-1000': 100
		},
		'errors': null
	});
	//55、采购退库单提交接口
	Mock.mock(new RegExp('/terminal/purchase/procureOrderOutSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//57、采集单详情查询接口
	Mock.mock(new RegExp('/terminal/purchase/qryProcureOrderDetail'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 10,
			'list|10': [{
				'procureItemId': '@id',//采购单明细
				'batchNum': '@id',
				'offerId': '@id',//终端ID
				'offerName': '@cword(4)',//终端名称
				'offerCode': '@id',//终端编码
				'brandCd': '@id',//终端品牌编码
				'brandName': '@cword(4)',//终端品牌名称
				'sortCd': '@id',//类别编码
				'sortName': '@cword(4)',//类别名称
				'offerModelId': '@id',//终端型号编码
				'offerModelName': '@cword(4)',//终端型号名称
				'offerConfig': '@cword(4)',//终端配置
				'offerQty|1-100': 10,//终端数量
				'price|1-1000': 100, //采购单价
				'isHaveMac|1': ['Y', 'N']
			}]
		},
		'errors': null
	});
	//58、采集单串码详情查询
	Mock.mock(new RegExp('/terminal/purchase/qryProcureOrderInstCodes'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total': 200,
			'list|100': [{
				'instCode': '@id',
				'macCode': '@id'
			}]
		},
		'errors': null
	});
	//56、采集单查询接口
	Mock.mock(new RegExp('/terminal/purchase/qryProcureOrder'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total': 200,
			'list|10': [{
				'procureOrderId': '@id',
				'staffId': '@id',
				'staffName': '@cname',
				'createDt': '@date',
				'storageId': '@id',
				'storageName': '@cword(4)',
				'supplierId': '@id',
				'supplierName': '@cword(4)',
				'statusCd|+1': [1, 2, 3],
				'remarks': '@cword(5)',
				'orderTypeCd|1': ['1', '2'],
				'regionName': '@city',
				'isCentman|1': ['Y', 'N']
			}]
		},
		'errors': null
	});
	//59、库存查询页面仓库信息获取接口
	Mock.mock(new RegExp('/terminal/stock/getStockByStaff'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'storageId': 1,
			'storageName': '@cword(4, 6)'
		},
		'errors': null
	});
	//61、库存信息终端明细查询接口
	Mock.mock(new RegExp('/terminal/stock/qryStockInstCodes'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 1,
			'list|30': [{
				'instCode': '@id',
				'batchNum': '@id',
				'macCode': '@id'
			}]
		},
		'errors': null
	});
	//60、库存信息查询接口
	Mock.mock(new RegExp('/terminal/stock/qryStockInst'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 1,
			'list|10': [{
				'offerId': '@id', //终端ID
				'offerName': '@cword(4, 6)', //终端名称
				'offerCode': '@id', //终端编码
				'brandCd': '@id', //终端品牌编码
				'brandName': '@cword(4, 6)', //终端品牌名称
				'sortCd': '@id', //类别编码
				'sortName': '@cword(4, 6)', //类别名称
				'offerModelId': '@id', //终端型号编码
				'offerModelName': '@cword(4, 6)', //终端型号名称
				'offerConfig': '@cword(4, 6)', //终端配置
				'offerQty|1-100': 1, //库存数量
				'storageId': 1, //仓库ID
				'storageName': '@cword(4, 6)', //仓库名称
				'isHaveMac|1': ['Y', 'N']

			}]
		},
		'errors': null
	});
	//62、终端捆绑提交
	Mock.mock(new RegExp('/terminal/construction/bindTermSumbit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//63、终端串码扫描并验证接口
	Mock.mock(new RegExp('/terminal/construction/scanInstCode'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id', //终端串码
			'offerId': '@id', //终端Id
			'offerName': '@cword(4)', //终端名称
			'offerCode': '@id', //终端编码
			'sortCd': '@id', //终端分类编码
			'sortName': '@cword(4)', //终端分类名称
			'brandCd': '@id', //终端品牌编码
			'brandName': '@cword(4)', //终端品牌名称
			'offerModelId': '@id', //终端型号Id
			'offerModelName': '@cword(4)', //终端型号名称
			'custName': '@cname',
			'bindBumber': '13566669999'
		},
		'errors': null
	});
	//64、终端解绑
	Mock.mock(new RegExp('/terminal/construction/unBindTerm'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//65、查询业务跟踪列表
	Mock.mock(new RegExp('/terminal/maintain/qryBusiListByCode'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total': 200,
			'list|10': [{
				'instCode': '@id',
				'operateType|+1': ['P_IN', 'P_OUT', 'ALLOT_IO', 'BORROW_IO', 'RECOVER_IN', 'BIND_OUT', 'UNBIND_IN', 'RETREAD'],
				//业务操作类型 P_IN采购入库，P_OUT采购退库，ALLOT_IO调拨，BORROW_IO借机，RECOVER_IN回收，BIND_OUT捆绑，UNBIND_IN解绑，RETREAD翻新
				'operateOrderId': '@id',
				'inStorageName': '@cword(4)',
				'outStorageName': '@cword(4)',
				'operateStaffId': '@id',
				'operateStaffName': '@cname',
				'operateDate': '@date',
				'offerName': '@cword(4)'
			}]
		},
		'errors': null
	});
	//66、采购入库页面终端串号录入
	Mock.mock(new RegExp('/terminal/baseConfig/addInstCode4Pur'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//67、调拨单申请页面串号录入
	Mock.mock(new RegExp('/terminal/baseConfig/checkInstCodsByOffer'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data': {
			'macCode': '@id'
		}
	});
	//68、终端捆绑页面基本信息
	Mock.mock(new RegExp('/terminal/construction/qryTermBindOrderBaseinfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'operateDt': '@date', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'commonRegionId': '@id', //地区ID
			'regionName': '@city' //地区名称
		},
		'errors': null
	});
	//69、产品信息查询接口
	Mock.mock(new RegExp('/terminal/construction/prodInfoQuery'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'custName': '@cname', //客户名称
			'prodType|1': ['1', '2'], //产品类型 1宽带 2IPTV
			'productNum': '@id', //绑定的产品号码
			'productId': '@id' //产品Id
		},
		'errors': null
	});
	//70、终端替换页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/construction/qryTermReplaceBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'operateDt': '@date', //操作时间
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'commonRegionId': '@id', //地区ID
			'regionName': '@city' //地区名称
		},
		'errors': null
	});
	//71、终端替换提交接口
	Mock.mock(new RegExp('/terminal/construction/bindReplaceSumbit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//72、终端替换页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/recover/qryTermRecoverBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'recoverOrderId': '@id', //单据号
			'createDt': '@date', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'recoverStorageId': '@id', //回收仓库Id
			'recoverStorageName': '@cword(4, 6)' //回收仓库名称
		},
		'errors': null
	});
	//73、选择回收终端接口
	Mock.mock(new RegExp('/terminal/recover/qryRecoverOffer'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id', //终端串码
			'offerId': '@id', //终端Id
			'offerName': '@cword(4)', //终端名称
			'offerCode': '@id', //终端编码
			'sortCd': '@id', //终端分类编码
			'sortName': '@cword(4)', //终端分类名称
			'brandCd': '@id', //终端品牌编码
			'brandName': '@cword(4)', //终端品牌名称
			'offerModelId': '@id', //终端型号Id
			'offerModelName': '@cword(4)', //终端型号名称
			'offerConfig': '@cword(4)' //终端配置信息
		},
		'errors': null
	});
	//74、终端回收信息提交
	Mock.mock(new RegExp('/terminal/recover/recoverOrderSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//75、拆机终端收取页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/recover/qryTermTakeBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'takeRecordId': '@id', //单据号
			'operateDt': '@date', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'commonRegionId': '@id', //地区ID
			'regionName': '@city' //地区名称
		},
		'errors': null
	});
	//76、选择收取终端接口
	Mock.mock(new RegExp('/terminal/recover/qryTakeOffer'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id', //终端串码
			'offerId|1': ['@id', -1], //终端Id
			'offerName': '@cword(4)', //终端名称
			'offerCode': '@id', //终端编码
			'sortCd': '@id', //终端分类编码
			'sortName': '@cword(4)', //终端分类名称
			'brandCd': '@id', //终端品牌编码
			'brandName': '@cword(4)', //终端品牌名称
			'offerModelId': '@id', //终端型号Id
			'offerModelName': '@cword(4)', //终端型号名称
			'offerConfig': '@cword(4)', //终端配置信息
			'oldBindNumber': '@id', //原绑定号码
			'oldBindProductId': '@id', //原绑定产品
			'oldCustName': '@cword(4, 6)' //原绑定客户名称
		},
		'errors': null
	});
	//77、拆机终端收取提交接口
	Mock.mock(new RegExp('/terminal/recover/termTakeOrderSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//78、回收处理出库页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/recover/qryTermHdlOutBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'handleRecordId': '@id', //单据号
			'handleDt': '@date', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'storageList|4': [{
				'storageId': '@id', //仓库ID
				'storageName': '@cword(4, 6)' //仓库名称
			}]
		},
		'errors': null
	});
	//79、选择出库终端接口
	Mock.mock(new RegExp('/terminal/recover/qryHdlOutOffer'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id', //终端串码
			'offerId': '@id', //终端Id
			'offerName': '@cword(4)', //终端名称
			'offerCode': '@id', //终端编码
			'sortCd': '@id', //终端分类编码
			'sortName': '@cword(4)', //终端分类名称
			'brandCd': '@id', //终端品牌编码
			'brandName': '@cword(4)', //终端品牌名称
			'offerModelId': '@id', //终端型号Id
			'offerModelName': '@cword(4)', //终端型号名称
			'offerConfig': '@cword(4)' //终端配置信息
		},
		'errors': null
	});
	//80、回收处理出库单提交接口
	Mock.mock(new RegExp('/terminal/recover/termHdlOutOrderSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//81、回收处理入库页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/recover/qryTermHdlInBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'handleRecordId': '@id', //单据号
			'handleDt': '@date', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'storageId': '@id', //仓库ID
			'storageName': '@cword(4, 6)' //仓库名称
		},
		'errors': null
	});
	//82、选择入库终端接口
	Mock.mock(new RegExp('/terminal/recover/qryHdlInOffer'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id', //终端串码
			'offerId': '@id', //终端Id
			'offerName': '@cword(4)', //终端名称
			'offerCode': '@id', //终端编码
			'sortCd': '@id', //终端分类编码
			'sortName': '@cword(4)', //终端分类名称
			'brandCd': '@id', //终端品牌编码
			'brandName': '@cword(4)', //终端品牌名称
			'offerModelId': '@id', //终端型号Id
			'offerModelName': '@cword(4)', //终端型号名称
			'offerConfig': '@cword(4)' //终端配置信息
		},
		'errors': null
	});
	//83、回收处理入库单提交接口
	Mock.mock(new RegExp('/terminal/recover/termHdlInOrderSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//84、终端报废页面基本信息获取接口
	Mock.mock(new RegExp('/terminal/recover/qryTermScrapBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'scrapDt': '@date', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname' //制单人姓名
		},
		'errors': null
	});
	//85、终端串码扫描并验证接口
	Mock.mock(new RegExp('/terminal/recover/qryScrapOffer'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id', //终端串码
			'offerId': '@id', //终端Id
			'offerName': '@cword(4)', //终端名称
			'offerCode': '@id', //终端编码
			'sortCd': '@id', //终端分类编码
			'sortName': '@cword(4)', //终端分类名称
			'brandCd': '@id', //终端品牌编码
			'brandName': '@cword(4)', //终端品牌名称
			'offerModelId': '@id', //终端型号Id
			'offerModelName': '@cword(4)', //终端型号名称
			'offerConfig': '@cword(4)', //终端配置信息
			'statusCd|1': ['1000', '1001', '1002', '1003', '1004', '1005', '1006', '1007', '1008'], //状态：1000正常在库 1001已退库 1002已销售、已使用 1003待回收 1004冻结 1005预占 1006报废 1007维修 1008翻新
			'storageId': '@id', //所在仓库ID
			'storageName': '@cword(4, 6)' //所在仓库名称
		},
		'errors': null
	});
	//86、终端报废提交
	Mock.mock(new RegExp('/terminal/recover/termScrapOrderSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//87、领用终端查询接口（吉林）
	Mock.mock(new RegExp('/terminal/stock/qryInstByCodeOrBNbr'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data':{
			'offerId|1': ['1001','1002','1003'],
			'offerName': '@cword(4, 6)',
			'offerCode': '@id',
			'sortCd': '@id',
			'sortName': '@cword(4, 6)',
			'brandCd': '@id',
			'brandName': '@cword(4, 6)',
			'offerModelId': '@id',
			'offerModelName': '@cword(4, 6)',
			'offerConfig': '@cword(10, 15)',
			'batchNum': '@id',
			'offerCount|1-99': 10,
			'commonRegionId': '@id',
			'regionName': '@city'
		}
	});
	//88、串码详情查询接口（吉林）
	Mock.mock(new RegExp('/terminal/stock/qryInstCodesBatchNum'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data':{
			'total|1-999': 200,
			'list|30': [{
				'instCode':'@id'
			}]
		}
	});
	//89、领用调拨单提交接口（吉林）
	Mock.mock(new RegExp('/terminal/stock/collarAllotOrderSubmit4JL'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//90、领用退库单基本信息获取（吉林）接口
	Mock.mock(new RegExp('/terminal/stock/qryCollarBackOrderBaseinfo'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': '',
		'data': {
			'allotOrder':{
				'allotOrderId': '@id', //单据号
				'createDt': '@date(yyyy-MM-dd)', //制单日期
				'staffId': '@id', //制单人ID
				'staffName': '@cname', //制单人姓名
				'targetStorageId': '@id',
				'targetStorageName': '@cword(4, 6)'
			},
			'originStorageList|5-10':[{
				'storageId': '@id',
				'storageName': '@cword(4, 6)'
			}]
		}
	});
	//91、领用退库单提交接口（吉林）
	Mock.mock(new RegExp('/terminal/stock/collarBakcOrderSubmit'), {
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//92、获取调拨申请单审核（吉林）页面基本信息
	Mock.mock(new RegExp('/terminal/stock/getApplyConfirmBaseInfo4JL'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			"staffId": '@id',
			"staffName":"@cname",
			"commonRegionId": '@id',
			"regionName":"@city",
			"originStorageId": '@id',
			"originStorageName":"@cword(4,6)"
		},
		'errors': null
	});
	//93、调拨申请单查询接口(吉林)
	Mock.mock(new RegExp('/terminal/stock/qryApplyOrderByCond4JL'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			"total|1-200": 200,
			"list|10": [{
				"allotOrderId":'@id',
				"staffId":'@id',
				"staffName":"@cname",
				"originStorageId":'@id',
				"originStorageName":"@cword(6,8)",
				"targetStorageId":"@id",
				"targetStorageName":"@cword(6,8)",
				"createDt":"@date",
				"statusCd|+1":['1000', '1001', '1002', '1003']//1000待审批，1001待确认，1002已完成，1003已取消
			}]
		},
		'errors': null
	});
	//94、调拨申请审批确认接口（吉林）
	Mock.mock(new RegExp('/terminal/stock/applyOrderPass4JL'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': '操作成功',
		'errors': null
	});
	//95、获取调拨单审核（吉林）页面基本信息
	Mock.mock(new RegExp('/terminal/stock/getAllotConfirmBaseInfo4JL'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			"staffId": '@id',
			"staffName":"@cname",
			"commonRegionId": '@id',
			"regionName":"@city",
			"originStorageId": '@id',
			"originStorageName":"@cword(4,6)"
		},
		'errors': null
	});
	//96、调拨申请单查询接口(吉林)
	Mock.mock(new RegExp('/terminal/stock/qryAllotOrderByCond4JL'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			"total|1-200": 200,
			"list|10": [{
				"allotOrderId":'@id',
				"staffId":'@id',
				"staffName":"@cname",
				"originStorageId":'@id',
				"originStorageName":"@cword(6,8)",
				"targetStorageId":"@id",
				"targetStorageName":"@cword(6,8)",
				"createDt":"@date",
				"statusCd|+1":['1000', '1001', '1002', '1003']//1000待审批，1001待确认，1002已完成，1003已取消
			}]
		},
		'errors': null
	});
	//97、调拨单审批确认接口（吉林）
	Mock.mock(new RegExp('/terminal/stock/allotOrderPass4JL'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': '操作成功',
		'errors': null
	});
	//98、获取当前仓库信息
	Mock.mock(new RegExp('/terminal/recover/getOldTermDealBaseInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'currStorageId': '@id',
			'currStorageName': '@cword(4,6)',
			'inStorageId': '@id',
			'inStorageName': '@cword(4,6)'
		},
		'errors': null
	});
	//99、回收终端查询接口
	Mock.mock(new RegExp('/terminal/recover/qryOldTermInfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-200': 200,
			'list|10': [{
				'instCode': '@id',
				'offerId': '@id',
				'offerName': '@cword(4,6)',
				'offerCode': '@id',
				'sortCd': '@id',
				'sortName': '@cword(4,6)',
				'brandCd': '@id',
				'brandName': '@cword(4,6)',
				'offerModelId': '@id',
				'offerModelName': '@cword(4,6)',
				'offerConfig': '@cword(4,6)',
				'processType|+1': ['1', '2', '3', '4']//1 报废 2 维修 3 直接二次入库 4 翻新
			}]
		},
		'errors': null
	});
	//100、终端处理基本信息获取
	Mock.mock(new RegExp('/terminal/recover/qryOldTermDelOrder'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'handleRecordId': '@id',
			'handleDt': '@date',
			'staffId': '@id',
			'staffName': '@cname'
		},
		'errors': null
	});
	//101、回收终端处理提交接口
	Mock.mock(new RegExp('/terminal/recover/oldTermDealSumbit'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//102、终端型号属性获取接口（新增/修改/详情）
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferModelAttr'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'offerModelAttrs|5': [{
				'attrSpecId': '@id',//属性规格ID
				'name': '@cword(4,6)',//属性名称
				'attrSpecType|+1': ['1', '2'],//属性类型1 - 终端型号属性 2 - 终端属性
				'attrDataType|+1': ['1', '2', '3'],//属性数据类型  1- 数值型 2 - 离散型（下拉框选择，加载attrValueOption节点值） 3 -  字符型
				'defaultValue|1-100': 10,//参数默认值
				'offerModelAttrId': '@id',//商品型号属性ID
				'offerModelId': '@id',//商品型号ID
				'attrValue|1-100': 10,//属性值
				'attrName': '@cword(4,6)',
				'attrValueOptions|5': [{
					'attrValueId': '@id',//属性值Id
					'name': '@cword(4,6)'//属性值名称
				}]
			}]
		},
		'errors': null
	});
	//103、终端归属管理查询接口
	Mock.mock(new RegExp('/terminal/stock/qryOfferBatchArea'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-200': 200,
			'list|10': [{
				'offerId': '@id',
				'offerName': '@cword(3,6)',
				'offerCode': '@id',
				'brandCd': '@id',
				'brandName': '@cword(3,6)',
				'sortCd': '@id',
				'sortName': '@cword(3,6)',
				'offerModelId': '@id',
				'offerModelName': '@cword(3,6)',
				'offerConfig': '@cword(5,10)',
				'offerQty|1-99': 10,
				'batchNum': '@id',
				'commonRegionId|1': ['1001','1002','1003'],
				'regionName': '@city'
			}]
		},
		'errors': null
	});
	//111、调拨入库确认/拒绝接口
	Mock.mock(new RegExp('/terminal/stock/changeAllotOrderStatus4JL'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//112、网格退库基本信息获取
	Mock.mock(new RegExp('/terminal/stock/qryGridRefundBaseinfo'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'allotOrderId': '@id', //单据号
			'createdt': '@date', //制单日期
			'staffId': '@id', //制单人ID
			'staffName': '@cname', //制单人姓名
			'targetStorageId': '@id', //退回仓库ID
			'targetStorageName': '@cword(4, 6)' //退回仓库名称
		},
		'errors': null
	});
	//104、修改归属串码明细查询接口
	Mock.mock(new RegExp('/terminal/stock/qryStockInstCodesByBatchNum'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-200': 200,
			'list|50-100': [{
				'instCode': '@id'
			}]
		},
		'errors': null
	});
	//107、调拨出库提交接口
	Mock.mock(new RegExp('/terminal/stock/allotOrderOutSubmit4JL'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//114、网格退库单提交接口
	Mock.mock(new RegExp('/terminal/stock/gridRefundSubmit'), {
		'rsphead': 's',
		'success': 'true',
		'code': '',
		'msg': '操作成功',
		'error': ''
	});
	//105、修改归属保存接口
	Mock.mock(new RegExp('/terminal/stock/saveStockArea'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
	});
	//115、退出仓库下拉选择接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryGridStorageByUser'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data|10': [{
			'storageId': '@id', //仓库ID
			'storageIdName': '@cword(4, 6)' //仓库名称
		}],
		'errors': null
	});
	//116、待回收终端查询接口
	Mock.mock(new RegExp('/terminal/recover/qryNeedRecoverTerm'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-200': 200,
			'list|10': [{
				'needRecoverTermId': '@id',
				'regionName': '@city',
				'operateType|+1': ['1', '2'],
				'instCode': '@id',
				'channelName': '@cword(4,6)',
				'custName': '@cname',
				'createDate': '@date'
			}]
		},
		'errors': null
	});
	//117、旧终端处理意见查询接口
	Mock.mock(new RegExp('/terminal/recover/qryOldStockInst'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'instCode': '@id',
			'offerId': '@id',
			'offerName': '@cword(4,6)',
			'offerCode': '@id',
			'sortCd': '@id',
			'sortName': '@cword(4,6)',
			'bandCd': '@id',
			'bandName': '@cword(4,6)',
			'offerModelId': '@id',
			'offerModelName': '@cword(4,6)',
			'offerConfig': '@cword(4,6)',
			'statusCd|+1': ['1000', '1002', '1003', '1004', '1005', '1006', '1007', '1008', '1009'],//状态:1000-在库,1001-已退库,1002-已销售/使用,1003-待回收,1004-冻结,1005-预占,1006-报废,1007-维修,1008-翻新,1009-激活
			'storageId': '@id',
			'storageName': '@cword(4,6)',
			'processType|+1': ['1', '2', '3', '4']//1 报废 2 维修 3 直接二次入库 4 翻新
		},
		'errors': null
	});
	//119、借退机员工下拉数据接口
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
	//118、旧终端处理意见提交接口
	Mock.mock(new RegExp('/terminal/recover/oldStockInstSubmit'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'errors': null
	});
	//9、终端型号配置查询接口
	Mock.mock(new RegExp('/terminal/baseConfig/qryOfferModel'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-99': 1,
			'list|5': [{
				'offerModelId': '@id',
				'offerModelName': '@cword(3,6)',
				'brandName': '@cword(3,6)',
				'sortName': '@cword(3,6)',
				'statusCd|1': ['1000', '1001'],//1000 有效 1001 停用 1002 无效
				'description': '@cword(10,20)',
				'seq|1-99': 1,
				'sortCd': '@id',
				'brandCd': '@id',
				'isHaveMac|+1': ['Y', 'N']//是否具有MAC码 Y - 有 N - 没有
			}]
		},
		'errors': null
	});
	//12、查询终端配置信息
	Mock.mock(new RegExp('/terminal/baseConfig/qryOffer'), {
		'rsphead': 's',
		'success': true,
		'code': null,
		'msg': null,
		'data': {
			'total|1-100': 20,
			'list|4': [{
				'offerId': '@id',
				'offerCode': '@id',
				'offerName': '@cword(4)',
				'brandCd': '@id',
				'brandName': '@cword(4)',
				'sortCd': '@id',
				'sortName': '@cword(4)',
				'offerModelId': '@id',
				'offerModelName': '@cword(4)',
				'unitCd': '@id',
				'manageType|+1': ['1000', '1001'],
				'unitName': '@cword(4)',
				'statusCd|+1': ['1000', '1001'],//1000 有效 1001 停用 1002 无效
				'offerConfig': '@cword(4)',
				'remarks': '@cword(7)',
				'isHaveMac|1': ['Y', 'N'] //是否有mac：Y:是、N:否
			}]
		},
		'errors': null
	});
});
