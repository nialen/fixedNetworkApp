/**
 * 公共的require配置
 */

require.config({
	urlArgs: 'v=20180516',
	paths: {
		'angular': './angular.min',
		'angular-touch': './angular-touch.min',
		'angular-animate': './angular-animate.min',
		'angular-sanitize': './angular-sanitize.min',
		'jquery': './jquery.min',
		'jqueryDialog': './jquery.dialog',
		'angular-locale_zh-cn': './angular-locale_zh-cn',
		'lodash': './lodash',
		'mock': './mock',
		'mockData': './mockData',
		'ngStorage': './ngStorage',
		'httpServer': './httpServer',
		'httpMethod': './httpMethod',
		'ngCommonModule': './ngCommonModule',
		'datepicker': './datepicker',
	},
	shim: {
		'angular': {
			exports: 'angular'
		},
		'angular-touch': {
			deps: ['angular'],
			exports: 'ngTouch'
		},
		'angular-animate': {
			deps: ['angular'],
			exports: 'ngAnimate'
		},
		'angular-sanitize': {
			deps: ['angular'],
			exports: 'angular-sanitize'
		},		
		'angular-locale_zh-cn': {
			deps: ['angular']
		},
		'ngStorage': {
			deps: ['angular']
		},
		'httpServer': {
			deps: ['angular'],
			exports: 'httpServer'
		},
		'httpMethod': {
			deps: ['angular', 'httpServer'],
			exports: 'httpMethod'
		},		
		'ngCommonModule': {
			deps: ['angular', 'jqueryDialog'],
			exports: 'ngCommonModule'
		},
		// 'datepicker': {
		// 	deps: ['angular', 'jqueryDialog'],
		// 	exports: 'ngCommonModule'
		// }
	}
});

require(['jquery'], function ($) {
	var currentPage = $('#page').attr('current-page');
	var targetModule = $('#page').attr('target-module');

	// mockData 加载与否决定是否启用模拟数据
	require(['angular', currentPage], function (angular) {
		angular.bootstrap(document, [targetModule]);
	});
});
