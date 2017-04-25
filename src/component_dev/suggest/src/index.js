<<<<<<< HEAD
<<<<<<< HEAD
import '../../common/tapEventPluginInit';
import './style.scss';
import Suggest from './suggest';

export default Suggest;
=======
/**
 * @component Suggest
 * @version 3.0.0
 * @description 输入提示组件, 根据用户的输入给出待选项并展示在输入框下方。
 * Suggest的内容分为两个区域, 推荐区域(recommendTmpl)会在用户输入开始前渲染, 可以用来给出一些热门推荐。
 * 结果区域(resultTmpl)用来响应用户的输入, 根据用户的输入给出输入提示。
 *
 * @author jiao.shen
 * @instructions {instruInfo: ./suggest/suggest.md}{instruUrl: suggest/city_select_example.html?hideIcon}
 * @instructions {instruInfo: ./suggest/useWithPopup.md}{instruUrl: suggest/use_with_popup.html?hideIcon}
 */
import React, { Component, PropTypes } from 'react';
import './style.scss';
=======
>>>>>>> master
import '../../common/tapEventPluginInit';
import './style.scss';
import Suggest from './suggest';

<<<<<<< HEAD
Suggest.propTypes = propTypes;
>>>>>>> master
=======
export default Suggest;
>>>>>>> master
