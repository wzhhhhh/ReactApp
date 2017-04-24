import React from 'react'

export default class  LoginHeader extends React.Component {
	render (){
		return(
			<div className="loginheader">
				<div className="lxkf">联系客服</div>
				<ul className="lzhong">
					<li className="ltu"><img src="./images/avatar.png" alt="" /></li>
					<li>点击登录</li>
					<li className="lhuise">速来登录，获得全球创意</li>
				</ul>
				<div className="lshezhi"><img src="./images/profile_preference.png" alt="" /></div>
			</div>
			)
	}
}