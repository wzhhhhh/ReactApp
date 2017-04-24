'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @function aniInfinate
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @description
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * 该动画适用于图片查看器情景，即图片数两较多，且不需要循环的情况下
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          * @param [ALLOWANCEAngle, ALLOWANCEDistance] 触发事件处理的手势角度tan绝对值，触发翻页的水平位移。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          */


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../../common/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getNumBetween(min, max) {
    if (this < min) {
        return min;
    } else if (this > max) {
        return max;
    }
    return this;
}

function getLoopNum(min, max) {
    if (this < min) {
        return [max, false];
    } else if (this > max) {
        return [min, false];
    }
    return [this, true];
}
// 45度的tan值

exports.default = function () {
    var ALLOWANCEAngle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var ALLOWANCEDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

    var _getRAF = (0, _util.getRAF)(),
        rAF = _getRAF.rAF,
        cancelrAF = _getRAF.cancelrAF;

    var obj = {
        aniQue: [],
        handleData: function handleData(_ref, children) {
            var pageNow = _ref.pageNow;

            var newChildren = [];
            for (var i = pageNow - 2; i < pageNow + 1; i++) {
                // 当前页面为最后一页时children[pageNow]为空
                // 当为首页时children[pageNow-2]为空
                if (!children[i]) {
                    continue;
                }
                newChildren.push(_react2.default.cloneElement(children[i], {
                    style: {
                        WebkitTransform: 'translate(' + i * 100 + '%, -50%) translateZ(0)',
                        transform: 'translate(' + i * 100 + '%, -50%) translateZ(0)',
                        position: 'absolute',
                        left: 0,
                        top: '50%'
                    }
                }));
            }
            // 计算dom更新算法
            newChildren.sort(function (prev, next) {
                if (prev.key % 3 === 0) {
                    return true;
                }
                if (next.key % 3 === 0) {
                    return false;
                }
                return prev.key % 3 - next.key % 3;
            });
            // 用于撑起容器高度的当前元素
            newChildren.unshift(_react2.default.cloneElement(children[pageNow - 1], {
                key: 0,
                currentPage: pageNow,
                style: {
                    visibility: 'hidden'
                }
            }));
            return newChildren;
        },
        touchstart: function touchstart() {},
        _checkTouchAngle: function _checkTouchAngle(prev, next) {
            var changeX = prev[0] - next[0];
            var changeY = next[1] - prev[1];
            var tan = Math.abs(changeX) / Math.abs(changeY);
            return tan > ALLOWANCEAngle;
        },
        touchmove: function touchmove(aniObj) {
            var touchmoveLocation = aniObj.touchmoveLocation,
                touchstartLocation = aniObj.touchstartLocation,
                stageDOM = aniObj.stageDOM,
                containerDOM = aniObj.containerDOM,
                speed = aniObj.speed,
                pageNow = aniObj.pageNow;

            var unit = stageDOM.clientWidth;
            if (!this._checkTouchAngle(touchstartLocation, touchmoveLocation)) {
                return;
            }
            var change = (touchstartLocation[0] - touchmoveLocation[0]) / unit + (pageNow - 1);
            var translateX = -change * 100;
            // console.log('move' + translateX);
            this._addCss({
                dom: containerDOM,
                speed: speed,
                translateX: translateX,
                reset: true
            });
        },
        touchcancel: function touchcancel() {},
        touchend: function touchend(aniObj) {
            var touchendLocation = aniObj.touchendLocation,
                touchstartLocation = aniObj.touchstartLocation,
                containerDOM = aniObj.containerDOM,
                speed = aniObj.speed,
                pageNow = aniObj.pageNow;

            var change = void 0;
            var changeX = touchstartLocation[0] - touchendLocation[0];
            if (!this._checkTouchAngle(touchstartLocation, touchendLocation) || Math.abs(changeX) < ALLOWANCEDistance) {
                change = pageNow - 1;
            } else {
                change = changeX > 0 ? pageNow : pageNow - 2;
                if (!aniObj.loop) {
                    var min = 0;
                    var max = aniObj.pagesNum - 1;
                    change = getNumBetween.call(change, min, max);
                }
            }
            var translateX = -change * 100;
            this._addCss({
                dom: containerDOM,
                speed: speed,
                reset: false,
                translateX: translateX
            });
            return this.checkAni(aniObj, change + 1);
        },
        checkAni: function checkAni(aniObj, num) {
            var isAni = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
            var loop = aniObj.loop,
                pagesNum = aniObj.pagesNum,
                containerDOM = aniObj.containerDOM,
                speed = aniObj.speed;

            var finalNum = void 0;
            var finalAni = true;
            if (!loop) {
                finalNum = getNumBetween.call(num, 1, pagesNum);
            } else {
                var _getLoopNum$call = getLoopNum.call(num, 1, pagesNum);

                var _getLoopNum$call2 = _slicedToArray(_getLoopNum$call, 2);

                finalNum = _getLoopNum$call2[0];
                finalAni = _getLoopNum$call2[1];
            }
            this._addCss({
                dom: containerDOM,
                reset: !isAni || !finalAni,
                translateX: -(finalNum - 1) * 100,
                speed: speed
            });
            return finalNum;
        },
        next: function next(aniObj) {
            return this.checkAni(aniObj, aniObj.pageNow + 1);
        },
        arrive: function arrive(aniObj, num, isAni) {
            return this.checkAni(aniObj, num, isAni);
        },
        prev: function prev(aniObj) {
            return this.checkAni(aniObj, aniObj.pageNow - 1);
        },
        _addCss: function _addCss(_ref2) {
            var dom = _ref2.dom,
                translateX = _ref2.translateX,
                reset = _ref2.reset;

            var that = this;
            // 此处为Dom操作
            this.aniQue.push({ translateX: translateX, reset: reset });
            if (this.reqAni) {
                cancelrAF(this.reqAni);
            }
            this.reqAni = rAF(function () {
                if (!that.aniQue.length) return;
                var last = that.aniQue.pop();
                that.aniQue.length = 0;
                if (last.reset) {
                    dom.style.webkitTransition = 'none';
                    dom.style.transition = 'none';
                } else {
                    dom.style.webkitTransition = '';
                    dom.style.transition = '';
                }
                dom.style.webkitTransform = 'translate(' + last.translateX + '%, 0) translateZ(0)';
                dom.style.transform = 'translate(' + last.translateX + '%, 0) translateZ(0)';
                that.reqAni = null;
            });
        }
    };
    return obj;
};