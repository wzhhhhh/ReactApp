import {Link} from 'react-router'
import React from 'react'

export default class  LoginPage extends React.Component {
	render (){
		return(
			<div className="llistpage">
				<ul>
					<Link to="/youhui" className="ldian"><li className="lpage"><img src="./images/coupons.png" alt="" />优惠券</li></Link>
					<li><img src="./images/profile_address.png" alt="" />收货地址</li>
					<Link to="/zuji" className="ldian"><li><img src="./images/profile_footprint.png" alt="" />足迹</li></Link>
					<li><img src="./images/account_manage.png" alt="" />账号管理</li>
					<li className="lpage"><img src="./images/profile_reward.png" alt="" />分享有奖</li>
				</ul>
			</div>
			)
	}
}