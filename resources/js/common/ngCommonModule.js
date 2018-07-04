'use strict';
angular
	.module('ngCommonModule', ['ui.bootstrap'])
	.directive('ngSelect', function () {
		return {
			scope: {
				value: '=', /*初始值*/
				selectId: '@', /*下拉框对应Id*/
				selectName: '@', /*下拉框显示名称*/
				list: '=', /*下拉框列表信息*/
				allow: '=', /*是否禁用下拉框*/
				require: '@' /*是否可设置为空*/
			},
			restrict: 'AECM',
			template: '<div class="ng-select-box" ng-class="{disabled:allow || !list.length}"><input placeholder="请选择.." ng-model="value[selectName]" type="text" ng-click="showList()" readonly /><ul class="select-opt-list" ng-show="showOpt"><li ng-click="checkedItem(item)" ng-repeat="item in list" ng-bind="item[selectName]"></li></ul><span ng-click="delValue()" ng-show="isShow && !require">X</span><div class="zhezhao" ng-click="clHide()" ng-show="showOpt" ng-cloak></div><div ng-click="showList()" class="select-bg"></div></div>',
			replace: true,
			link: function (scope, iElm, iAttrs, controller) {
				scope.$watch('value', function (newObj) {
					if (newObj) {
						scope.isShow = !scope.allow;
					} else {
						scope.isShow = false;
					}
				});
				scope.showOpt = false;
				scope.delValue = function () {
					scope.value = null;
				};
				scope.checkedItem = function (item) {
					scope.value = item;
					scope.showOpt = false;
				};
				scope.showList = function () {
					if (!scope.allow && scope.list && scope.list.length) {
						scope.showOpt = !scope.showOpt;
					}
				};
				scope.clHide = function () {
					scope.showOpt = false;
				};
			}
		};
	})
	.directive('ngMultiSelect', function () {
		return {
			scope: {
				value: '=', /*选择的值*/
				list: '=', /*选项的列表*/
				name: '@', /*对于的名称*/
				code: '@', /*对于选择的id*/
				right: '@', /*是否显示在右侧*/
				maxPiece: '@', /*可选最大数,默认为1(单选)*/
				hideDel: '=', /*是否隐藏删除按钮（X）,false或空时隐藏*/
				allow: '=', /*是否显示弹窗，默认为false时显示*/
				require: '@', /*是否可设置为空*/
				hideLetter: '@' /*是否隐藏首字母*/
			},
			restrict: 'AE',
			template: '<div class="multi-select" ng-class="{disabled: allow == false}"><form name="ngMultiSelect" role="form"><div ng-click="delRadioChecked()" ng-show="!require && !!methodForm.checkedListName && !maxPiece && maxPiece!=1 && !hideDel" class="del-multi-select">X</div><input placeholder="请选择.." type="text" ng-click="listSelected()" class="prv-input" ng-model="methodForm.checkedListName" readonly><div class="choice-box" ng-class="{keepleft:{{!right}}, keepright:{{!!right}}}" ng-cloak ng-show="methodForm.listType"><div ng-show="!!maxPiece && maxPiece!=1" class="choice-box-head fn-clear"><div class="choice-box-title fn-left">已选条件：</div><div class="choice-box-msg fn-right">（多选）</div><div class="choice-list fn-clear"><ul><li ng-repeat="item in methodForm.checkedQueryList"><span ng-bind="item[name]"></span><div class="choice-del" ng-click="delItem(item, $index)">X</div></li></ul></div></div><div class="choice-content fn-clear"><div class="fn-clear" ng-show="!hideLetter"><div class="choice-phone-title fn-left">全部：</div><ul class="choice-phone-list"><li ng-class="{selected: $index == methodForm.listIndex}" ng-repeat="sort in letterList" ng-bind="sort" ng-click="listLetterChecked(sort, $index)"></li></ul></div><div class="choice-brand-list mt5"><ul class="choice-content-list"><li ng-show="methodForm.listAll || item.firstLetter == methodForm.listFirstLetter" ng-repeat="item in list" ng-class="{selected: item.checked}" ng-click="checkList(item, $index)" ng-bind="item[name]"></li></ul></div></div><div ng-show="!!maxPiece && maxPiece!=1" class="choice-footer"><button class="btn-choice" ng-click="listChoiceConfirm()">确定</button></div></div><div class="zhezhao" ng-click="listSelectedHide()" ng-show="methodForm.listType" ng-cloak></div><div ng-click="listSelected()" class="select-bg" ng-class="{disabled: allow == false}"></div></form></div>',
			replace: true,
			link: function (scope, iElm, iAttrs, controller) {
				scope.letterList = ['所有', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
				scope.methodForm = {
					listFirstLetter: '',
					listAll: true,
					checkedQueryList: [],
					listType: false,
					listIndex: 0,
					listCheckedIndex: '',
					checkedListName: ''
				};
				if (scope.value) {
					if (scope.value.length) {
						_.map(scope.value, function (item) {
							scope.methodForm.checkedListName = (scope.methodForm.checkedListName ? '，' : '') + (item[scope.name]);
						})
					}
				}
				/*显示弹框*/
				scope.listSelected = function () {
					if (scope.allow === undefined || scope.allow) {
						scope.methodForm.listType = !scope.methodForm.listType;
					}
				};
				/*隐藏弹框*/
				scope.listSelectedHide = function () {
					scope.methodForm.listType = false;
				};
				/*分类显示*/
				scope.listLetterChecked = function (item, $index) {
					scope.methodForm.listIndex = $index;
					if (item === '所有') {
						scope.methodForm.listAll = true;
					} else {
						scope.methodForm.listAll = false;
						scope.methodForm.listFirstLetter = item;
					}
				};
				/*选项选择*/
				scope.checkList = function (item, $index) {
					if (!scope.maxPiece || scope.maxPiece == 1) {
						/*单选*/
						scope.methodForm.checkedQueryList = [];
						scope.methodForm.listCheckedIndex = $index;
						scope.methodForm.checkedQueryList.push(item);
						scope.listChoiceConfirm();
					} else {
						/*复选*/
						if (scope.methodForm.checkedQueryList.length < scope.maxPiece) {
							if (!item.checked) {
								item.checked = true;
								scope.methodForm.checkedQueryList.push(item);
							} else {
								item.checked = false;
								var index = _.findIndex(scope.methodForm.checkedQueryList, function (obj) {
									return obj === item;
								});
								console.log('index:', index);
								scope.methodForm.checkedQueryList.splice(index, 1);
							}
						} else {
							if (!item.checked) {
								scope.methodForm.checkedQueryList[0].checked = false;
								scope.methodForm.checkedQueryList.splice(0, 1);
								item.checked = true;
								scope.methodForm.checkedQueryList.push(item);
							} else {
								item.checked = false;
								var index = _.findIndex(scope.methodForm.checkedQueryList, function (obj) {
									return obj === item;
								});
								console.log('index:', index);
								scope.methodForm.checkedQueryList.splice(index, 1);
							}
						}
					}
				};
				/*选项删除*/
				scope.delItem = function (item, index) {
					item.checked = false;
					scope.methodForm.checkedQueryList.splice(index, 1);
				};
				/*单选清空输入框*/
				scope.delRadioChecked = function () {
					scope.value = [];
					scope.methodForm.checkedListName = '';
				};
				/*点击确定按钮*/
				scope.listChoiceConfirm = function () {
					scope.value = [];
					scope.methodForm.checkedListName = '';
					scope.methodForm.listType = false;
					scope.value = _.cloneDeep(scope.methodForm.checkedQueryList);
					_.map(scope.value, function (item) {
						scope.methodForm.checkedListName += (scope.methodForm.checkedListName ? '，' : '') + (item[scope.name]);
					});
				};
				scope.$watch('value', function (newValue) {
					if (newValue && !newValue.length) {
						scope.methodForm.checkedQueryList = [];
						scope.methodForm.checkedListName = '';
					}
				});
			}
		};
	})
	.directive('ngPages', function () {
		return {
			restrict: 'EA',
			replace: true,
			transclude: true,
			scope: {
				pageSize: '=', /*每页显示条数*/
				total: '=', /*总条数*/
				currentPage: '=', /*当前页的页码*/
				querySubmit: '&', /*查询的方法*/
				maxSize: '=' /*分页页码最大展示个数*/
			},
			template: '<div class="text-center page mt10"><ul uib-pagination total-items="total" items-per-page="pageSize" ng-model="currentPage" max-size="maxSize || 4" ng-change="pageChanged()" class="pagination-sm" boundary-links="true" rotate="false" first-text="首页" last-text="尾页" previous-text="<" next-text=">"></ul><div class="page-num">共<span class="number" ng-bind="total"></span>条记录，当前显示第<span class="number" ng-bind="currentPage"></span>页</div></div>',
			link: function (scope, iElm, iAttrs, controller) {
				scope.pageChanged = function () {
					scope.querySubmit({currentPage: scope.currentPage, pageSize: scope.pageSize});
				};
			}
		};
	})
	.directive('ngCityCheck', function () {
		return {
			restrict: 'EA',
			replace: true,
			transclude: true,
			scope: {
				value: '=', /*选择的值*/
				list: '=', /*地区列表*/
				name: '@', /*地区名称*/
				code: '@', /*地区Id*/
				firstName: '@', /*第一层标题名，例：省份*/
				secondName: '@', /*第二层标题名，例：城市*/
				allow: '=' /*禁用标识*/
			},
			template: '<div class="ng-city-check"><input ng-click="cityCheck()" type="text" ng-class="{\'not-allow\': allow}"' +
			' ng-model="checkedAreaName" readonly><button ng-click="cityCheck()" type="submit" class="btn btn-sm btn-location" ng-disabled="allow"><i class="iconfont">&#xe6cb;</i></button><div class="city-check-box" ng-show="visible" ng-cloak><uib-tabset active="key"><uib-tab index="1" heading="{{firstName}}"><div class="city-content"><li class="city-item" ng-class="{current: $index === provinceIndex}" ng-repeat="item in list" ng-click="handleSelectCity(\'province\', $index, item)">{{item[name]}}</li></div></uib-tab><uib-tab' +
			' ng-if="false" index="2" heading="{{secondName}}"><div class="city-content"><li class="city-item"' +
			' ng-class="{current: $index === cityIndex}" ng-repeat="opt in list[provinceIndex].children" ng-click="handleSelectCity(\'city\', $index, opt)">{{opt[name]}}</li></div></uib-tab></uib-tabset></div><div class="zhezhao" ng-click="clHide()" ng-show="visible" ng-cloak></div></div>',
			link: function (scope, iElm, iAttrs, controller) {
				scope.visible = false;
				scope.key = 1;
				scope.provinceIndex = '';
				scope.cityIndex = '';
				scope.areaId = '';
				scope.provinceName = '';
				scope.cityName = '';
				scope.checkedAreaName = scope.value[scope.name];
				scope.cityCheck = function () {
					if(!scope.allow){
						scope.visible = !scope.visible;
					}
				};
				scope.clHide = function () {
					scope.visible = false;
				};
				scope.handleSelectCity = function (level, index, opt) {
					var me = this;
					switch (level) {
						case 'province':
							// scope.key = 2;
							scope.provinceIndex = index;
							scope.provinceName = opt[scope.name];
							me.handleSubmitBtn(level, opt);
							break;
						case 'city':
							scope.cityIndex = index;
							scope.cityName = opt[scope.name];
							me.handleSubmitBtn(level, opt);
							break;
					}
				};
				scope.handleSubmitBtn = function (level, opt) {
					scope.value = opt;
					switch (level) {
						case 'province':
							scope.checkedAreaName = scope.provinceName;
                            scope.visible = false;
							break;
						case 'city':
							scope.checkedAreaName = scope.provinceName + ' ' + scope.cityName;
							scope.visible = false;
							break;
					}
				}
			}
		}
	})
	.directive('ngDateOption', function () {
		return {
			restrict: 'EA',
			transclude: true,
			scope: {
				value: '=', /*选择的日期的值*/
				maxDate: '=', /*可选的最大日期*/
				minDate: '=', /*可选的最小日期*/
				minMode: '@' /*year最小可选到年份、month最小可选到月份、day或不传最小可选到日期*/
			},
			template: '<div class="date-option-input"><input type="text" ng-click="dateOpen()" uib-datepicker-popup={{dateOptions.formatYear}} readonly ng-model="value" is-open="popupOpened" datepicker-options="dateOptions" close-text="关闭" clear-text="清空" current-text="现在" show-button-bar="true"><span class="icon_time" ng-click="dateOpen()"><i class="glyphicon glyphicon-calendar"></i></span></div>',
			link: function (scope, iElm, iAttrs, controller) {
				scope.popupOpened = false;
				scope.dateOptions = {startingDay: 1, showWeeks: false, minMode: scope.minMode};
				scope.formats = ['yyyy', 'yyyy-MM', 'yyyy-MM-dd'];
				if (scope.minMode === 'year') {
					scope.dateOptions.formatYear = scope.formats[0];
				} else if (scope.minMode === 'month') {
					scope.dateOptions.formatYear = scope.formats[1];
				} else {
					scope.dateOptions.formatYear = scope.formats[2];
				}
				scope.$watch('maxDate', function (newValue) {
					scope.dateOptions.maxDate = newValue;
				});
				scope.$watch('minDate', function (newValue) {
					scope.dateOptions.minDate = newValue;
				});
				scope.dateOpen = function () {
					scope.popupOpened = true;
				};
			}
		};
	})
	.directive('file', function () {
		return {
			scope: {
				file: '='
			},
			link: function (scope, el, attrs) {
				el.bind('change', function (event) {
					var file = event.target.files;
					scope.file = file ? file : undefined;
					scope.$apply();
				});
			}
		};
	})
	.directive('ngInputType', function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                if (!ngModel) {
                    return;
                }
                var attr = attrs.typeFilter,
                    input = element[0];
                if (attr) {
                    var dataType = {
                        num: /\D/g //只能输入数字！
                    };
                    var regex = dataType[attr];
                }
                element.bind('keyup', function(e) {
                    this.value = this.value.replace(regex, '');
                    ngModel.$setViewValue(input.value);
                });
                ngModel.$render();
                ngModel.$render = function() {
                    input.value = ngModel.$viewValue ? ngModel.$viewValue : '';
                };
            }
        };
    })
	.directive('ngInputLength', function () {
		return {
			restrict: 'A', require: '?ngModel', link: function (scope, element, attrs, ngModel) {
				if (!ngModel) {
					return;
				}

				/*获取字符串长度（汉字算两个字符，字母数字算一个）*/
				function getByteLen(val) {
					var len = 0;
					for (var i = 0; i < val.length; i++) {
						var a = val.charAt(i);
						if (a.match(/[^\x00-\xff]/gi) != null) {
							len += 2;
						} else {
							len += 1;
						}
					}
					return len;
				}

				var maxLength = attrs.maxLength;
				ngModel.$parsers.push(function (v) {
					if (maxLength && v) {
						if (maxLength >= getByteLen(v)) {
							ngModel.$setValidity('ngInputLength', true);
							return v;
						} else {
							ngModel.$setValidity('ngInputLength', false);
							return undefined;
						}
					} else {
						ngModel.$setValidity('ngInputLength', true);
						return v;
					}
				});
			}
		};
	})
	.directive('amountInput', function () {
		return {
			scope: {
				value: '=', /*输入的值*/
				allow: '=', /*是否可输入小数，最多小数点后2位*/
				maxValue: '=' /*可输入的最大值*/
			},
			restrict: 'AE',
			template: '<div class="amount-input-box"><a ng-click="downNub()">-</a><input ng-show="allow" ui-numeric-input ng-model="value" type="text" allow-decimal="allow"><input ng-show="!allow" ui-numeric-input ng-model="value" type="text"><a ng-click="addNub()">+</a></div>',
			replace: true,
			link: function (scope, iElm, iAttrs, controller) {
				scope.downNub = function () {
					if (scope.value > 0) {
						scope.value--;
					}
				};
				scope.addNub = function () {
					scope.value++;
				};
				scope.$watch('value', function (value) {
					if (!(value > 0)) {
						scope.value = 0;
					} else if (_.toNumber(value) > _.toNumber(scope.maxValue)) {
						scope.value = _.toNumber(scope.maxValue);
					}
				})
			}
		};
	})
	.directive('uiNumericInput', ['$filter', function ($filter) {
		return {
			restrict: 'A', scope: {}, require: 'ngModel', link: function (scope, el, attrs, ngModelCtrl) {
				var NUMBER_REGEXP = /^\s*[-+]?(\d+|\d*\.\d*)\s*$/,
					min = 1,
					max,
					lastValidValue,
					dotSuffix,
					firstDecimalZero,
					positiveInteger = true,
					minNotEqual,
					maxNotEqual,
					maxLength = 9,
					precision = 0;
				if (attrs.maxLength >= 1) {
					maxLength = attrs.maxLength;
				}
				if (attrs.allowDecimal) {
					positiveInteger = false;
					precision = 2;
					min = 0;
				}
				if (attrs.minNotEqual) {
					minNotEqual = true;
				}
				if (attrs.maxNotEqual) {
					maxNotEqual = true;
				}

				function round(value) {
					var num = parseFloat(value);
					var d = Math.pow(10, precision);
					return Math.round(num * d) / d;
				}

				function formatPrecision(value) {
					return parseFloat(value).toFixed(precision);
				}

				function getCommaCount(value) {
					var length = 0;
					var matchResult = (value + '').match(/,/g);
					if (matchResult) {
						length = matchResult.length;
					}
					return length;
				}

				function formatViewValue(value) {
					return ngModelCtrl.$isEmpty(value) ? '' : '' + value;
				}

				function formatToNumber(value) {
					return $filter('number')(value);
				}

				function numberLength(value) {
					var length = 0;
					var matchResult = (value + '').match(/\d/g);
					if (matchResult) {
						length = matchResult.length;
					}
					return length;
				}

				function minValidator(value) {
					var invalid = minNotEqual ? value <= min : value < min;
					if (!ngModelCtrl.$isEmpty(value) && invalid) {
						ngModelCtrl.$setValidity('min', false);
					} else {
						ngModelCtrl.$setValidity('min', true);
					}
					return value;
				}

				function maxValidator(value) {
					var invalid = maxNotEqual ? value >= max : value > max;
					if (!ngModelCtrl.$isEmpty(value) && invalid) {
						ngModelCtrl.$setValidity('max', false);
					} else {
						ngModelCtrl.$setValidity('max', true);
					}
					return value;
				}

				ngModelCtrl.$parsers.push(function (input) {
					if (angular.isUndefined(input) || (input !== input)) {
						input = '';
					}
					var value = input.replace(/\,/g, '');
					var lastChar = value.substr(value.length - 1);
					if (!positiveInteger) {
						dotSuffix = lastChar === '.' ? true : false;
					}
					if (value.indexOf('.') === 0) {
						value = '0' + value;
					}
					firstDecimalZero = /\d*\.0$/.test(value);
					var empty = ngModelCtrl.$isEmpty(value);
					if (empty || (NUMBER_REGEXP.test(value) && numberLength(value) <= maxLength)) {
						lastValidValue = (value === '') ? null : (empty ? value : round(value));
					} else {
						ngModelCtrl.$setViewValue(formatViewValue(lastValidValue));
						ngModelCtrl.$render();
					}
					ngModelCtrl.$setValidity('numeric', !dotSuffix);
					scope.$parent.$parent.value = lastValidValue ? lastValidValue : 0;
					return lastValidValue;
				});
				ngModelCtrl.$formatters.push(formatToNumber);
				attrs.$observe('min', function (value) {
					min = parseFloat(value || min);
					minValidator(ngModelCtrl.$modelValue);
				});
				ngModelCtrl.$parsers.push(minValidator);
				ngModelCtrl.$formatters.push(minValidator);
				if (angular.isDefined(attrs.max)) {
					attrs.$observe('max', function (val) {
						max = parseFloat(val);
						maxValidator(ngModelCtrl.$modelValue);
					});
					ngModelCtrl.$parsers.push(maxValidator);
					ngModelCtrl.$formatters.push(maxValidator);
				}
				ngModelCtrl.$formatters.push(function (value) {
					return value ? formatPrecision(value) : value;
				});
				ngModelCtrl.$parsers.push(function (value) {
					var viewValue = formatToNumber(value);
					if (!positiveInteger && dotSuffix) {
						viewValue += '.';
					}
					if (!positiveInteger && firstDecimalZero) {
						viewValue += '.0';
					}
					var start = el[0].selectionStart, end = el[0].selectionEnd, oldViewValue = ngModelCtrl.$viewValue;
					if (getCommaCount(oldViewValue) > getCommaCount(viewValue)) {
						start--;
						end--;
					}
					if (getCommaCount(oldViewValue) < getCommaCount(viewValue)) {
						start++;
						end++;
					}
					ngModelCtrl.$viewValue = viewValue;
					ngModelCtrl.$render();
					el[0].setSelectionRange(start, end);
					return value;
				});
			}
		};
	}])
	.directive('ngTreeCheck', function () {
		return {
			restrict: 'EA',
			replace: true,
			transclude: true,
			scope: {
				value: '=', /*选择的值*/
				list: '=', /*组织列表*/
				name: '@', /*组织名称*/
				code: '@' /*组织Id*/
			},
			template: '<div class="ng-tree-check" ng-class="{disabled: !list.length}"><input type="text" ng-model="value[name]" readonly><button ng-click="treeCheck()" ng-disabled="!list.length" type="submit" class="btn btn-sm btn-searching" readonly><i class="iconfont">&#xe600;</i></button><div class="organization-tree" ng-show="visible" ng-cloak><p class="tree-header">请选择组织</p><div class="tree-body"><div class="first-level" ng-repeat="item1 in list track by $index"><p class="title"><span ng-class="[\'icon\', {\'on\': item1.openlist}]" ng-click="foldCheck(item1)"></span><span ng-bind="item1[name]"></span></p><div class="second-level" ng-repeat="item2 in item1.subOrgList track by $index" ng-show="item1.openlist"><p class="title"><span ng-class="[\'icon\', {\'on\': item2.openlist}]" ng-click="foldCheck(item2)"></span><span ng-bind="item2[name]" ng-class="{\'curr\': checkItem.orgId === item2.orgId}" ng-click="check(item2)"></span></p><div class="third-level" ng-repeat="item3 in item2.subOrgList track by $index" ng-show="item2.openlist"><p class="title"><span class="icon" ng-click="foldCheck(item3)"></span><span ng-bind="item3[name]" ng-class="{\'curr\': checkItem.orgId === item3.orgId}" ng-click="check(item3)"></span></p></div></div></div></div><div class="tree-footer"><button class="btn-submit" ng-click="teamConfirm()">确定</button><button class="btn-cancel" ng-click="teamCancel()">取消</button></div></div><div class="zhezhao" ng-click="clHide()" ng-show="visible" ng-cloak></div></div>',
			link: function (scope, iElm, iAttrs, controller) {
				scope.visible = false;
				scope.checkItem = _.cloneDeep(scope.value);
				scope.treeCheck = function () {
                    if (scope.list && scope.list.length) {
                        scope.visible = !scope.visible;
                    }
				};
				scope.clHide = function () {
					scope.visible = false;
				};
				scope.foldCheck = function (item) {
					item.openlist ? item.openlist = false : item.openlist = true;
				};
				scope.check = function (item) {
					scope.checkItem = item;
				};
				scope.teamCancel = function () {
					scope.visible = false;
				};
				scope.teamConfirm = function () {
					scope.value = scope.checkItem;
					scope.visible = false;
				}
			}
		};
	})
	.factory('JqueryDialog', function () {
		var self = {
			/**
			 * [inform 操作提醒弹框方法]
			 * @param  {[type]} title    弹框标题
			 * @param  {[type]} msg      主标题
			 */
			inform: function (title, msg) {
				var html = '<div class="alert-info-wrap alert-info"><p class="alert-title">' + msg + '</p></div>';
				$('body')
					.dialog({
							title: title,
							content: html,
							buttons: {
								'关闭|btn-close': function (api) {
									api.close();
								}
							}
						},
						function (api) {
							api.open();
						});
			},
			/**
			 * [confirm 操作确认弹框方法]
			 * @param  {[type]} title    弹框标题
			 * @param  {[type]} msg      主标题
			 */
			confirm: function (title, msg, func) {
				var html = '<div class="alert-info-wrap alert-info"><p class="alert-title">' + msg + '</p></div>';
				$('body')
					.dialog({
							title: title,
							content: html,
							buttons: {
								'确定|btn-ok': function (api) {
									api.close();
									if (func) {
										func();
									}
								},
								'取消|btn-close': function (api) {
									api.close();
								}
							}
						},
						function (api) {
							api.open();
						});
			},
			/**
			 * [success 成功弹框方法]
			 * @param  {[type]} title    弹框标题
			 * @param  {[type]} msg      主标题
			 * @param  {[type]} func     回调函数
			 */
			success: function (title, msg, func) {
				var html = '<div class="alert-info-wrap alert-success"><p class="alert-title">' + msg + '</p></div>';
				$('body')
					.dialog({
							title: title,
							content: html,
							buttons: {
								'关闭|btn-close': function (api) {
									api.close();
								}
							},
							afterClose: function () {
								if (func) {
									func();
								}
							}
						},
						function (api) {
							api.open();
						});
			},
			/**
			 * [error 失败弹框方法]
			 * @param  {[type]} title    弹框标题
			 * @param  {[type]} msg      主标题
			 */
			error: function (title, msg) {
				var html = '<div class="alert-info-wrap alert-error"><p class="alert-title">' + msg + '</p></div>';
				$('body')
					.dialog({
							title: title,
							content: html,
							buttons: {
								'关闭|btn-close': function (api) {
									api.close();
								}
							}
						},
						function (api) {
							api.open();
						});
			},
			/**
			 * [abnormal 异常弹框方法]
			 * @param  {[type]} title    弹框标题
			 * @param  {[type]} msg      主标题
			 * @param  {[type]} errStack 异常信息
			 */
			abnormal: function (title, msg, errStack) {
				var html = '<div class="alert-info-wrap alert-error"><p class="alert-title">' + msg + '</p><a href="javascript:;" class="errstack-btn" id="errstack-btn">详细信息<i class="iconfont">&#xe655;</i></a></div><div class="alert-err-stack">' + errStack + '</div>';
				$('body')
					.dialog({
							title: title,
							content: html,
							buttons: {
								'关闭|btn-close': function (api) {
									api.close();
								}
							}
						},
						function (api) {
							api.open();
						});

				$('.errstack-btn').each(function (index, el) {
					$(el)
						.off('click')
						.on('click', function (event) {
							event.preventDefault();
							$($('.alert-err-stack')[index]).toggle();
						});
				});
			}
		};
		return self;
	});
