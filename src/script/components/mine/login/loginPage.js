import React from 'react'

export default class  LoginPage extends React.Component {
	render (){
		return(
			<div className="llistpage">
				<ul>
					<li className="lpage"><img src="./images/coupons.png" alt="" />优惠券</li>
					<li><img src="./images/profile_address.png" alt="" />收货地址</li>
					<li><img src="./images/profile_footprint.png" alt="" />足迹</li>
				</ul>
				<ul>
					<li><img src="./images/account_manage.png" alt="" />账号管理</li>
					<li><img src="./images/profile_reward.png" alt="" />分享有奖</li>
				</ul>
			</div>
			)
	}
}