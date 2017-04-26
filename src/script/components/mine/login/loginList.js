import {Link} from 'react-router'
import React from 'react'

export default class  LoginList extends React.Component {
	render (){
		return(
			<div className="ldingdan">
				<div className="lalldingdan">
					<h2>全部订单</h2>
					<span><Link to="/dingdan" className="ldian">查看所有订单</Link></span>
				</div>
				<ul className="llist">
					<li>
						<span>0</span>
						<img src="./images/profile_pay.png" alt="" />
						代付款
					</li>
					<li className="lli">
						<span>0</span>
						<img src="./images/profile_transport.png" alt="" />
						待收货
					</li>
					<li className="lli">
						<span>0</span>
						<img src="./images/profile_comment.png" alt="" />
						待评论
					</li>
					<li>
						<span>0</span>
						<img src="./images/profile_like.png" alt="" />
						我的心愿单
					</li>
				</ul>
			</div>
			)
	}
}