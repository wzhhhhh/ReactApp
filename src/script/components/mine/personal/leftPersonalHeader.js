import React, {Component} from 'react'

export default class LeftPersonalHeader extends Component {

constructor(props){
		super(props)
		this.state = {
			username:localStorage.getItem('username')
		}
	}

	render (){
		return(
			<div className="lheader">
				<div className="tuo"><img src="./images/avatar.png" alt="" /></div>
				{
					this.state.username ? (<div className="llogin">
					<span className="gon">{this.state.username}</span>
					<span className="yong gon">13111111111</span>
				</div>):(<div className="llogin">
					<span>登录/注册</span>
					<span className="orange">领取615元新人大礼包</span>
				</div>)
				}
				
			</div>
			)
	}
}