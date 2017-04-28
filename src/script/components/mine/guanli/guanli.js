import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Guanli extends Component {

constructor(props){
		super(props)
		this.state = {
			username:localStorage.getItem('username')
		}
	}
	
	back() {
    	this.props.router.goBack();
 	}

	render (){
		return(
			<div className="onlogin">
				<ul className="onloginheader">
					<li className="otu" onClick={this.back.bind(this)}>
						<img src="http://m.miaohui.com/static/src/img/header_back.png" />
					</li>
					<li className="odeng">账号管理</li>
					<li className="owang"></li>
				</ul>
				<ul>
					<li>头像<span><img src="http://m.miaohui.com/static/src/img/aside/user-avatar.png" alt=""></span></li>
					<li>昵称<span>{this.state.username}</span></li>
					<li>性别<span>保密</span></li>
					<li>生日<span>0000-00-00</span></li>
					<li>手机号<span>13111111111</span></li>
					<li>邮箱<span>绑定</span></li>
					<li>密码<span>******</span></li>
				</ul>
			</div>
			)
	}
}