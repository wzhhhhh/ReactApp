import React, {Component} from 'react'

export default class LeftPersonalList extends Component {
	render (){
		return(
			<div className="leftpolist">
				<ul className="ul lshang">
					<li><img src="http://m.miaohui.com/static/src/img/aside/qunbudingdan.png" alt="" /><span>全部订单</span></li>
					<li><img src="./images/youhui.png" alt="" /><span>优惠券</span></li>
					<li><img src="./images/xinyuan.png" alt="" /><span>我的心愿单</span></li>
				</ul>
				<ul className="ul lxia">
					<li><img src="./images/fenxiang.png" alt="" /><span>分享有奖</span></li>
					<li><img src="./images/lianxi.png" alt="" /><span>联系客服</span></li>
					<li><img src="./images/shezhi.png" alt="" /><span>设置</span></li>
				</ul>
				<div className="lx">
					<p>客服电话:<b className="oran">400-600-5423</b></p>
					<p>(周一到周五9:00-18:00)</p>
				</div>
			</div>
			)
	}
}