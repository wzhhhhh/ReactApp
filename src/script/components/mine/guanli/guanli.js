import React, {Component} from 'react'
import {Link} from 'react-router'
import {hashHistory} from 'react-router'

export default class Guanli extends Component {

constructor(props){
		super(props)
		this.state = {
			username:localStorage.getItem('username')
		}
	}
	
	logout(){
		localStorage.removeItem('username')
		hashHistory.push("/mine")
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
				<ul className="glist">
					<li><span className="gqian gheader">头像</span><span className="ghou"><img src="http://m.miaohui.com/static/src/img/aside/user-avatar.png" alt="" /></span></li>
					<li><span className="gqian">昵称</span><span className="ghou">{this.state.username}</span></li>
					<li><span className="gqian">性别</span><span className="ghou">保密</span></li>
					<li><span className="gqian">生日</span><span className="ghou">0000-00-00</span></li>
					<li><span className="gqian">手机号</span><span className="ghou">13111111111</span></li>
					<li><span className="gqian">邮箱</span><span className="ghou">绑定</span></li>
					<li><span className="gqian">密码</span><span className="ghou">******</span></li>
				</ul>
				<div className="gor" onClick={this.logout.bind(this)}>退出登录</div>
				
			</div>
			)
	}
} 