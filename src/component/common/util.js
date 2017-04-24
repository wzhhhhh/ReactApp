'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getArrayByLength = getArrayByLength;
exports.isFunction = isFunction;
exports.shallowEqual = shallowEqual;
exports.getElementOffsetY = getElementOffsetY;
exports.inheritProps = inheritProps;
exports.getOnlyChild = getOnlyChild;
exports.isBadAndroid = isBadAndroid;
exports.getRAF = getRAF;
exports.whichTransitionEventPrefix = whichTransitionEventPrefix;
function getArrayByLength(length) {
    var ret = [];
    for (var i = 0; i < length; i++) {
        ret[i] = null;
    }
    return ret;
}

function is(x, y) {
    var ret = void 0;
    if (x === y) {
        ret = x !== 0 || y !== 0 || 1 / x === 1 / y;
    } else {
        // return x !== x && y !== y;
        ret = isNaN(x) && isNaN(y);
    }

    return ret;
}

// 判断是否为 Function
function isFunction(it) {
    return Object.prototype.toString.call(it) === '[object Function]';
}

function shallowEqual(objA, objB) {
    if (is(objA, objB)) {
        return true;
    }

    if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
        return false;
    }

    var keysA = Object.keys(objA);
    var keysB = Object.keys(objB);

    if (keysA.length !== keysB.length) {
        return false;
    }

    var hasOwnProperty = Object.prototype.hasOwnProperty;

    for (var i = 0; i < keysA.length; i++) {
        if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
            return false;
        }
    }

    return true;
}

function getElementOffsetY(ele, parent) {
    var y = 0;
    while (ele !== parent && ele !== null) {
        y += ele.offsetTop;
        ele = ele.offsetParent;
    }
    return y;
}

var DELAY_TIME_FOR_INFINITE_WITHOUT_HEIGHT = exports.DELAY_TIME_FOR_INFINITE_WITHOUT_HEIGHT = 250;

function inheritProps(props, attrs) {
    return attrs.reduce(function (ret, attr) {
        ret[attr] = props[attr];
        return ret;
    }, {});
}

/**
 * @method getOnlyChild
 * @return vnode|false
 * @description 判断虚拟节点是否只拥有一个子节点，取代针对原生 React 的 !children.length，以支持 Qreact
 * In React : vnode.children = {xxx}
 * In Qreact: vnode.children = [{xxx}]
 */
function getOnlyChild(props) {
    var children = props.children;
    if (children) {
        // for React
        if (!children.length) return children;
        // for Qreact
        if (children.length === 1) return children[0];
    }
    return false;
}
/*
    This should find all Android browsers lower than build 535.19 (both stock browser and webview)
    - galaxy S2 is ok
    - 2.3.6 : `AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1`
    - 4.0.4 : `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
    - galaxy S3 is badAndroid (stock brower, webview)
    `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
    - galaxy S4 is badAndroid (stock brower, webview)
    `AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30`
    - galaxy S5 is OK
    `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
    - galaxy S6 is OK
    `AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Mobile Safari/537.36 (Chrome/)`
    */
function isBadAndroid() {
    var appVersion = window.navigator.appVersion;
    var _isBadAndroid = false;
    // Android browser is not a chrome browser.
    if (/Android/.test(appVersion) && !/Chrome\/\d/.test(appVersion)) {
        var safariVersion = appVersion.match(/Safari\/(\d+.\d)/);
        if (safariVersion && (typeof safariVersion === 'undefined' ? 'undefined' : _typeof(safariVersion)) === 'object' && safariVersion.length >= 2) {
            _isBadAndroid = parseFloat(safariVersion[1]) < 535.19;
        } else {
            _isBadAndroid = true;
        }
    } else {
        _isBadAndroid = false;
    }

    return _isBadAndroid;
}

function getRAF() {
    function basicRAF(callback) {
        return window.setTimeout(callback, 1000 / 60);
    }

    var rAF = window.cancelAnimationFrame && window.requestAnimationFrame || window.webkitCancelAnimationFrame && window.webkitRequestAnimationFrame || window.mozCancelAnimationFrame && window.mozRequestAnimationFrame || window.oCancelAnimationFrame && window.oRequestAnimationFrame || window.msCancelAnimationFrame && window.msRequestAnimationFrame || basicRAF;

    var cancelrAF = window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || window.msCancelAnimationFrame || window.clearTimeout;

    if (isBadAndroid()) {
        rAF = basicRAF;
        cancelrAF = window.clearTimeout;
    }

    return { rAF: rAF, cancelrAF: cancelrAF };
}

function whichTransitionEventPrefix() {
    var result = void 0;
    var el = document.createElement('fakeelement');
    var transitions = {
        transition: 'transition',
        WebkitTransition: 'webkitTransition'
    };
    Object.keys(transitions).some(function (t) {
        if (el.style[t] !== undefined) {
            result = transitions[t];
            return true;
        }
        return false;
    });
    return result;
}