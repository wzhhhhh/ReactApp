'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _touchable = require('../../touchable/src/touchable');

var _touchable2 = _interopRequireDefault(_touchable);

var _popup = require('../../popup/src/popup');

var _popup2 = _interopRequireDefault(_popup);

var _picker = require('../../picker/src/picker');

var _picker2 = _interopRequireDefault(_picker);

var _util = require('../../common/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @component PopupPicker
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version 3.0.5
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @description 由`Popup`和`Picker`组件结合的组件，能够方便的创建一个可弹出的Picker。
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @instructions {instruInfo: ./popuppicker.md}{instruUrl: popuppicker.html?hideIcon}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @author tianqi.tian
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var propTypes = {
    /**
     * @property touchClass
     * @type String
     * @default null
     * @description 定制触发区域和弹出式选择器触摸时附加的 className，必须
     */
    touchClass: _react.PropTypes.string.isRequired,
    /**
     * @property value
     * @type Number/String/Array <Number, String>
     * @default null
     * @description 组件的 value，参考网页`select`标签的 value 属性。
     *
     * value 是一个严格受控属性，只能通过的父组件改变，你需要设置 onChange 属性来控制 value 属性的变化。
     *
     * 在开启了多列模式的情况下（通过设置options属性为一个二维数组），这个属性也应该相应地传入一个数组，每个元素对应着该列的value。
     * 如果value数组和options数组的length不相等，那么空缺的value会被设为null。
     */
    value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]))]),
    /**
     * @property onChange
     * @type Function
     * @param value 当前的 option 的 value，如果开启了多列模式，那么返回值将是一个包含了每一列value的数组。
     * @description 弹出式选择器 Ok 按钮点击后的回调，必须。
     */
    onChange: _react.PropTypes.func.isRequired,
    /**
     * @property options
     * @type Array/Array <Array>
     * @default null
     * @description `Picker`组件的 options 属性。数组形式，元素的格式为`{text:string,value:string}`，
     *
     * text 为 option 显示的文本，value 为 option 对应的真实值（参考网页 option 标签），
     *
     * text 的缺省值为 value，value 必须传入，且只能为字符串/数字类型。
     *
     * 如果你传入一个二维数组，那么PopupPicker将会是一个多列的Picker，二维数组的每一个子数组将会作为对应列的option。
     */
    options: _react.PropTypes.oneOfType([_react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
        value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired
    })).isRequired, _react.PropTypes.arrayOf(_react.PropTypes.arrayOf(_react.PropTypes.shape({
        text: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
        value: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]).isRequired
    })))]),
    /**
     * @property popupHeader
     * @type Object
     * @default {
     *   title: '',
     *   okBtn: { text: '确定', touchClass: 'action-touch' },
     *   cancelBtn: { text: '取消', touchClass: 'action-touch' }
     * }
     * @description popup 区域头部的标题和按钮定制，分别为 title、okBtn 和 cancelBtn，
     *
     * 通过 title 键值定制 Popup 组件头部的标题文本。
     *
     * 通过 text 和 touchClass 键值定制按钮显示的文本和触摸按钮时附加的 className
     */
    popupHeader: _react.PropTypes.shape({
        title: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
        okBtn: _react.PropTypes.shape({
            text: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            touchClass: _react.PropTypes.string
        }),
        cancelBtn: _react.PropTypes.shape({
            text: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.element]),
            touchClass: _react.PropTypes.string
        })
    }),
    /**
     * @property duration
     * @type Number
     * @default 200ms
     * @description `Popup`组件的 duration 属性。组件内容显隐时，动画执行时间，单位：ms
     */
    duration: _react.PropTypes.number,
    /**
     * @property pickerHeight
     * @type Number
     * @default 150
     * @description `Picker`组件的 height 属性。控制 Picker 组件显示的内容高度
     */
    pickerHeight: _react.PropTypes.number.isRequired,
    /**
     * @property looped
     * @type Bool
     * @default true
     * @description `Picker`组件的 looped 属性。是否采用循环模式，默认为 true。
     *
     * 这个属性可以接收两种形式的参数，如果你传入Bool类型，那么将会应用于所有的列上（如果你使用了多列的Picker）。
     * 如果传入一个数组，那么可以针对每一列的Picker分别定义。
     */
    looped: _react.PropTypes.oneOfType([_react.PropTypes.bool, _react.PropTypes.arrayOf(_react.PropTypes.bool)]),
    /**
     * @property unit
     * @type Number/String/Array
     * @default null
     * @description `Picker`组件的 unit 属性。显示在 picker 右侧的单位。
     *
     * 这个属性可以接收两种形式的参数，如果你传入Number或者String类型，那么将会应用于所有的列上（如果你使用了多列的Picker）。
     * 如果传入一个数组，那么可以针对每一列的Picker分别定义。
     */
    unit: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]))]),
    /**
     * @property popupExtraClass
     * @type String
     * @default null
     * @description 附加 popup 区域根节点的额外 class
     */
    popupExtraClass: _react.PropTypes.string,
    /**
     * @property beforePopupShow
     * @type Function
     * @default null
     * @version 3.0.8
     * @description 该函数在点击触发区域后，Popup 弹层弹出前执行。当其返回值为 false 时，Popup 弹层将不会弹出。
     *
     * 该属性主要用于 value 值的校验，当 value 值不合法时通过函数控制展示相应的提示。
     */
    beforePopupShow: _react.PropTypes.func,
    children: _react.PropTypes.element
};

var defaultProps = {
    touchClass: '',
    value: null,
    options: null,
    popupHeader: {
        title: '',
        okBtn: { text: '确定', touchClass: 'action-touch' },
        cancelBtn: { text: '取消', touchClass: 'action-touch' }
    },
    onChange: function onChange() {},
    pickerHeight: 150,
    duration: 200,
    looped: true,
    unit: null,
    fieldExtraClass: null,
    beforePopupShow: function beforePopupShow() {
        return true;
    },
    popupExtraClass: null
};

var PopupPicker = function (_Component) {
    _inherits(PopupPicker, _Component);

    function PopupPicker(props) {
        _classCallCheck(this, PopupPicker);

        var _this = _possibleConstructorReturn(this, (PopupPicker.__proto__ || Object.getPrototypeOf(PopupPicker)).call(this, props));

        _this.state = {
            show: false,
            pickerValue: null
        };
        return _this;
    }

    _createClass(PopupPicker, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                value = _props.value,
                options = _props.options;

            this.resetValue(value, options);
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.updatePicker();
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.value != null && nextProps.value !== this.state.pickerValue) {
                this.setState({
                    pickerValue: this.formatPickerProp(nextProps.value)
                });
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            this.updatePicker();
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeChild(this.wrapper);
        }
    }, {
        key: 'getMultiPickerConfig',
        value: function getMultiPickerConfig(_ref) {
            var options = _ref.options,
                looped = _ref.looped,
                unit = _ref.unit;

            var value = this.state.pickerValue;
            var renderedOpts = this.formatPickerOpt(options);
            var renderedLooped = this.formatPickerProp(looped);
            var renderedUnit = this.formatPickerProp(unit);

            return renderedOpts.map(function (optGroup, i) {
                return {
                    options: optGroup,
                    value: value[i],
                    looped: renderedLooped[i] != null ? renderedLooped[i] : renderedLooped[0],
                    unit: renderedUnit[i] != null ? renderedUnit[i] : renderedUnit[0]
                };
            });
        }
    }, {
        key: 'getPickerValue',
        value: function getPickerValue(val, options) {
            var value = options.find(function (item) {
                return item.value === val;
            });
            var defValue = options[0] ? options[0].value : null;
            return value ? val : defValue;
        }
    }, {
        key: 'getOnChangeValue',
        value: function getOnChangeValue(value, i) {
            return this.state.pickerValue.map(function (val, idx) {
                return idx === i ? value : val;
            });
        }
    }, {
        key: 'resetValue',
        value: function resetValue(value, options) {
            if (value === null || value === undefined) {
                this.setState({
                    pickerValue: this.defaultPickerValue(options)
                });
            } else {
                this.setState({
                    pickerValue: this.formatPickerProp(value)
                });
            }
        }
    }, {
        key: 'handleTap',
        value: function handleTap() {
            var beforePopupShow = this.props.beforePopupShow;

            var _willShow = true;
            if ((0, _util.isFunction)(beforePopupShow)) {
                _willShow = beforePopupShow();
            }
            if (_willShow !== false) {
                this.show();
            }
        }
    }, {
        key: 'show',
        value: function show() {
            this.setState({ show: true });
        }
    }, {
        key: 'hide',
        value: function hide() {
            this.setState({ show: false });
        }
    }, {
        key: 'handlePopupOk',
        value: function handlePopupOk() {
            var _this2 = this;

            var onChange = this.props.onChange;

            var renderedOpts = this.formatPickerOpt(this.props.options);
            var pickerValue = this.state.pickerValue;

            renderedOpts.forEach(function (opt, i) {
                pickerValue[i] = _this2.getPickerValue(pickerValue[i], opt);
            });
            this.setState({ pickerValue: pickerValue });
            this.hide();
            onChange(this.state.pickerValue.length > 1 ? this.state.pickerValue : this.state.pickerValue[0]);
        }
    }, {
        key: 'createWrapper',
        value: function createWrapper() {
            this.wrapper = document.createElement('div');
            this.wrapper.className = 'this-element-is-a-tricky-hack-for-popuppicker-please-just-ignore-it';
            document.body.appendChild(this.wrapper);
        }
    }, {
        key: 'updatePicker',
        value: function updatePicker() {
            if (this.wrapper == null) {
                this.createWrapper();
            }
            _reactDom2.default.unstable_renderSubtreeIntoContainer(this, this.renderPicker(), this.wrapper);
        }
    }, {
        key: 'defaultPickerValue',
        value: function defaultPickerValue(options) {
            options = this.formatPickerOpt(options);
            if (Array.isArray(options)) {
                return options.map(function (pickerOpt) {
                    return pickerOpt[0].value;
                });
            }
            throw new Error('yo-popuppicker: option属性必须为一个对象数组或者二维数组，请检查。');
        }
    }, {
        key: 'formatPickerOpt',
        value: function formatPickerOpt(options) {
            if (!Array.isArray(options[0])) {
                return [options];
            }
            return options;
        }
    }, {
        key: 'formatPickerProp',
        value: function formatPickerProp(prop) {
            return Array.isArray(prop) ? prop : [prop];
        }
    }, {
        key: 'handlePopupCancel',
        value: function handlePopupCancel() {
            var _props2 = this.props,
                value = _props2.value,
                options = _props2.options;

            this.hide();
            this.resetValue(value, options);
        }
    }, {
        key: 'handlePickerChange',
        value: function handlePickerChange(option, i) {
            this.setState({
                pickerValue: this.getOnChangeValue(option.value, i)
            });
        }
    }, {
        key: 'renderPicker',
        value: function renderPicker() {
            var _this3 = this;

            var _props3 = this.props,
                popupHeader = _props3.popupHeader,
                duration = _props3.duration,
                pickerHeight = _props3.pickerHeight,
                popupExtraClass = _props3.popupExtraClass;

            var pickerConfigs = this.getMultiPickerConfig(this.props);
            var okBtn = null;
            var cancelBtn = null;
            var title = null;
            if (popupHeader) {
                title = popupHeader.title || defaultProps.popupHeader.title;
                okBtn = popupHeader.okBtn || defaultProps.popupHeader.okBtn;
                cancelBtn = popupHeader.cancelBtn || defaultProps.popupHeader.cancelBtn;
            }

            return _react2.default.createElement(
                _popup2.default,
                {
                    show: this.state.show,
                    duration: duration,
                    extraClass: (0, _classnames2.default)(popupExtraClass, 'yo-popup yo-popup yo-popup-picker'),
                    onMaskTap: this.handlePopupCancel.bind(this)
                },
                _react2.default.createElement(
                    'header',
                    { className: 'yo-header yo-header-popup-picker' },
                    _react2.default.createElement(
                        'span',
                        { className: 'title' },
                        title
                    ),
                    _react2.default.createElement(
                        _touchable2.default,
                        {
                            onTap: this.handlePopupCancel.bind(this),
                            touchClass: cancelBtn.touchClass || defaultProps.popupHeader.cancelBtn.touchClass
                        },
                        _react2.default.createElement(
                            'span',
                            { className: 'regret' },
                            cancelBtn.text || defaultProps.popupHeader.cancelBtn.text
                        )
                    ),
                    _react2.default.createElement(
                        _touchable2.default,
                        {
                            onTap: function onTap() {
                                _this3.handlePopupOk();
                            },
                            touchClass: okBtn.touchClass || defaultProps.popupHeader.okBtn.touchClass
                        },
                        _react2.default.createElement(
                            'div',
                            { className: 'affirm' },
                            okBtn.text || defaultProps.popupHeader.okBtn.text
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'bd' },
                    pickerConfigs.map(function (cfg, i) {
                        return _react2.default.createElement(_picker2.default, {
                            key: i,
                            options: cfg.options,
                            value: cfg.value,
                            height: pickerHeight,
                            looped: cfg.looped,
                            unit: cfg.unit,
                            onChange: function onChange(option) {
                                _this3.handlePickerChange(option, i);
                            }
                        });
                    })
                )
            );
        }
    }, {
        key: 'render',
        value: function render() {
            var touchClass = this.props.touchClass;

            return _react2.default.createElement(
                _touchable2.default,
                {
                    onTap: this.handleTap.bind(this),
                    touchClass: touchClass
                },
                this.props.children
            );
        }
    }]);

    return PopupPicker;
}(_react.Component);

PopupPicker.propTypes = propTypes;
PopupPicker.defaultProps = defaultProps;

exports.default = PopupPicker;