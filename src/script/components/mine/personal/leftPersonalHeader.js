import React, {Component} from 'react'

export default class LeftPersonalHeader extends Component {
	render (){
		return(
			<div className="lheader">
				<div className="tuo"><img src="./images/avatar.png" alt="" /></div>
				<div className="llogin">
					<span>登录/注册</span>
					<span className="orange">领取615元新人大礼包</span>
				</div>
			</div>
			)
	}
}