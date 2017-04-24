'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _carouselItem = require('./carouselItem.js');

var _carouselItem2 = _interopRequireDefault(_carouselItem);

var _util = require('../../common/util.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    var ALLOWANCEAngle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.57;
    var ALLOWANCEDistance = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
    var movePercentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var _getRAF = (0, _util.getRAF)(),
        rAF = _getRAF.rAF,
        cancelrAF = _getRAF.cancelrAF;

    var transitionendEndName = (0, _util.whichTransitionEventPrefix)() + 'end';
    var ani = {
        aniQue: [],
        handleData: function handleData(_ref, children) {
            var loop = _ref.loop,
                pageNow = _ref.pageNow;

            var newChildren = _react2.default.Children.toArray(children);
            if (loop) {
                var len = children.length;
                var lastfakeDomStyle = {
                    key: 0
                };
                var firstFakeDomStyle = {
                    key: -1
                };
                if (children[0].type === _carouselItem2.default) {
                    lastfakeDomStyle.index = len;
                    lastfakeDomStyle.extraClass = children[len - 1].props.extraClass ? children[len - 1].props.extraClass + ' extra-item' : 'extra-item';
                    firstFakeDomStyle.index = 1;
                } else {
                    lastfakeDomStyle.className = children[len - 1].props.className ? children[len - 1].props.className + ' extra-item' : 'extra-item';
                }
                var header = _react2.default.cloneElement(children[len - 1], lastfakeDomStyle);
                var footer = _react2.default.cloneElement(children[0], firstFakeDomStyle);
                newChildren.unshift(header);
                newChildren.push(footer);
            }
            return newChildren;
        },
        _checkTouchAngle: function _checkTouchAngle(prev, next) {
            var changeX = prev[0] - next[0];
            var changeY = next[1] - prev[1];
            var tan = Math.abs(changeX) / Math.abs(changeY);
            return tan > ALLOWANCEAngle;
        },
        touchstart: function touchstart() {},
        touchmove: function touchmove(_ref2) {
            var touchstartLocation = _ref2.touchstartLocation,
                touchmoveLocation = _ref2.touchmoveLocation,
                pageNow = _ref2.pageNow,
                containerDOM = _ref2.containerDOM,
                width = _ref2.width;

            if (!this._checkTouchAngle(touchstartLocation, touchmoveLocation)) {
                return;
            }
            var translateX = (pageNow - 1) * width * movePercentage + touchstartLocation[0] - touchmoveLocation[0];
            this._addCss({
                dom: containerDOM,
                speed: 0,
                translateX: -translateX,
                reset: true,
                width: width
            });
        },
        touchend: function touchend(aniObj) {
            var touchstartLocation = aniObj.touchstartLocation,
                touchendLocation = aniObj.touchendLocation,
                pageNow = aniObj.pageNow;

            var distanceX = touchendLocation[0] - touchstartLocation[0];
            var newpageNow = pageNow;
            if (Math.abs(distanceX) > ALLOWANCEDistance && this._checkTouchAngle(touchstartLocation, touchendLocation)) {
                newpageNow = distanceX > 0 ? pageNow - 1 : pageNow + 1;
            } else {
                newpageNow = pageNow;
            }
            return this.checkAni(aniObj, newpageNow);
        },
        checkAni: function checkAni(aniObj, pageNow) {
            var pagesNum = aniObj.pagesNum,
                speed = aniObj.speed,
                containerDOM = aniObj.containerDOM,
                loop = aniObj.loop,
                width = aniObj.width;

            var self = this;
            var translateX = width * (1 - pageNow) * movePercentage;
            var newpageNow = pageNow;
            if (pageNow < 1 || pageNow > pagesNum) {
                if (loop) {
                    containerDOM.addEventListener(transitionendEndName, function test() {
                        var translate = pageNow === 0 ? width * (1 - pagesNum) * movePercentage : 0;
                        self._addCss({
                            dom: containerDOM,
                            reset: true,
                            translateX: translate,
                            width: width
                        });
                        containerDOM.removeEventListener(transitionendEndName, test);
                    }, false);
                    newpageNow = pageNow === 0 ? pagesNum : 1;
                } else {
                    newpageNow = pageNow < 1 ? 1 : pagesNum;
                    translateX = width * (1 - newpageNow) * movePercentage;
                }
            }
            this._addCss({
                dom: containerDOM,
                reset: false,
                speed: speed,
                translateX: translateX,
                width: width
            });
            return newpageNow;
        },
        next: function next(aniObj) {
            var pageNow = aniObj.pageNow;

            var pageNext = pageNow + 1;
            return this.checkAni(aniObj, pageNext);
        },
        prev: function prev(aniObj) {
            var pageNow = aniObj.pageNow,
                containerDOM = aniObj.containerDOM,
                speed = aniObj.speed,
                width = aniObj.width;

            var pageNext = pageNow - 1;
            var translateX = width * (1 - pageNext);
            this._addCss({
                dom: containerDOM,
                speed: speed,
                translateX: translateX
            });
            return this.checkAni(aniObj, pageNext);
        },
        arrive: function arrive(aniObj, num, isAni) {
            if (num >= 1 && num <= aniObj.pagesNum) {
                var translateX = (1 - num) * aniObj.width * movePercentage;
                this._addCss({
                    dom: aniObj.containerDOM,
                    speed: 0.1,
                    translateX: translateX,
                    reset: !isAni,
                    width: aniObj.width
                });
            } else {
                console.warn('\u4F20\u5165carousel\u7EC4\u5EFA\u7684arrive\u65B9\u6CD5\u7684\u9875\u9762\u4E3A' + num + ',\u8BE5\u503C\u4E0D\u5408\u6CD5');
            }
            return num;
        },
        _addCss: function _addCss(_ref3) {
            var dom = _ref3.dom,
                _ref3$translateX = _ref3.translateX,
                translateX = _ref3$translateX === undefined ? 0 : _ref3$translateX,
                reset = _ref3.reset;

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
                dom.style.webkitTransform = 'translate(' + last.translateX + 'px, 0) translateZ(0)';
                dom.style.transform = 'translate(' + last.translateX + 'px, 0) translateZ(0)';
                that.reqAni = null;
            });
        }
    };
    return ani;
}; /**
    * @function aniScrollX
    * @description 水平滚动动画，适用于有限数量的滚动展示
    * @param [ALLOWANCEAngle, ALLOWANCEDistance] 触发事件处理的手势角度tan绝对值，触发翻页的水平位移
    */