import React from 'react'
import {Link} from 'react-router'

export default class  LoginHeader extends React.Component {
	render (){
		return(
			<div className="loginheader">
				<div className="lxkf">联系客服</div>
				<ul className="lzhong">
					<li className="ltu"><img src="./images/avatar.png" alt="" /></li>
					<Link to="/onlogin" className="ldian"><li>点击登录</li></Link>
					<li className="lhuise">速来登录，获得全球创意</li>
				</ul>
				{/*<ul className="lzhong">
					<li className="ltu"><img src="./images/avatar.png" alt="" /></li>
					<li><span>用户名</span><span>M0</span></li>
					<li className="lhuise"><span>0个秒钻</span><span>7张优惠券</span></li>
				</ul>*/}
				<div className="lshezhi"><img src="./images/profile_preference.png" alt="" /></div>
			</div>

			)
	}
}