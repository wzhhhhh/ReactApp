<<<<<<< HEAD
<<<<<<< HEAD
import '../../common/tapEventPluginInit';
import './style.scss';
import Loading from './loading';
import loading from './loadingAPI';

export default Loading;
export { loading };
=======
/**
 * 加载动画api
 * @component loading
 * @type {Object}
 * @version 3.0.0
 * @description Loading API，调用后弹出一个居中的Loading Icon。
 *
 * @instructions {instruInfo: ./loading.md}{instruUrl: loading.html?hideIcon}
 * @author zongze.li
 */
import React, { Component, PropTypes } from 'react';
import ReactDom from 'react-dom';
import Modal from '../../modal/src/modal';
import Loading from './loading';
=======
import '../../common/tapEventPluginInit';
>>>>>>> master
import './style.scss';
import Loading from './loading';
import loading from './loadingAPI';

export default Loading;
<<<<<<< HEAD
export const loading = {
    /**
     * show展示
     * @method show
     * @category loading
     * @version 3.0.0
     * @param {Object} options 需要设置的组件属性，如预留顶部高度，额外样式之类的，具体见上面的属性文档描述。
     * @description api方法：显示Loding层，并设置传入的options参数中的属性。
     */
    show: (options) => {
        that.setState(Object.assign({}, options, { show: true }));
    },
    /**
     * hide隐藏
     * @method hide
     * @category loading
     * @version 3.0.0
     * @description api方法：隐藏Loding层。
     */
    hide: () => {
        that.setState({ show: false });
    }
};
>>>>>>> master
=======
export { loading };
>>>>>>> master

