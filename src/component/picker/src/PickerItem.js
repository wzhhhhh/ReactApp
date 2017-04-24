"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * option组件
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var _class = function (_Component) {
    _inherits(_class, _Component);

    function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
    }

    _createClass(_class, [{
        key: "shouldComponentUpdate",


        /**
         * option组件的render触发控制的比较苛刻,同样是为了优化低端手机的滚动性能
         * @param nextProps
         * @returns {boolean}
         */
        value: function shouldComponentUpdate(nextProps) {
            return !!(nextProps.ele.value !== this.props.ele.value || nextProps.ele.text !== this.props.ele.text || nextProps.ele.index !== this.props.ele.index || nextProps.notLooped);
        }
    }, {
        key: "render",
        value: function render() {
            var _props = this.props,
                ele = _props.ele,
                itemHeight = _props.itemHeight,
                onOptionTap = _props.onOptionTap;

            var y = ele.index * itemHeight;
            var transform = "translate(0," + (y + ele.offset) + "px) translateZ(0px)";

            return _react2.default.createElement(
                "li",
                {
                    onTouchTap: function onTouchTap() {
                        onOptionTap(ele);
                    },
                    style: {
                        transform: transform,
                        WebkitTransform: transform
                    },
                    className: "item"
                },
                ele.text || ele.value
            );
        }
    }]);

    return _class;
}(_react.Component);

_class.propTypes = {
    ele: _react.PropTypes.object,
    onOptionTap: _react.PropTypes.func,
    itemHeight: _react.PropTypes.number
};
exports.default = _class;