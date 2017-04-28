import React from 'react'
import Toast from '../../../../component_dev/toast/src'
import {hashHistory} from 'react-router'


export default class OnloginHeader extends React.Component {

	back() {
    	this.props.router.goBack();
 	}

 	login() {
 		let username = this.refs.username.value;
		let password = this.refs.password.value;


		let headers = new Headers({
		'Content-Type':'application/x-www-form-urlencoded'
	})

		 fetch('/nlogin/users/login',{
			method:'POST',
			headers:headers,
			body:`username=${username}&password=${password}`
		 })
		 .then(response=>response.json())
		 .then(res=>{
		 	if(res.username){
		 	localStorage.setItem('username',res.username);
		 	hashHistory.push("/mine")	
		 	} else{
		 	Toast.show('登录失败',1000);
		 	}
		 })
		 .catch(e=>{
		 	console.log(e);
		 })
 	}

	render (){
		return(
			<div className="onlogin">
				<ul className="onloginheader">
					<li className="otu" onClick={this.back.bind(this)}>
						<img src="http://m.miaohui.com/static/src/img/header_back.png" />
					</li>
					<li className="odeng">登录</li>
					<li className="owang">忘记密码？</li>
				</ul>
				<div className="oin">
					<div className="oxuan">
						<span className="ohuan">普通登录</span>
						<span>手机动态验证码登录</span>
					</div>
					<form className="odengl">
						<input type="text" ref="username" placeholder="用户名" />
						<input type="password" ref="password" placeholder="密码" />
						<input className="in" type="button" onClick={this.login.bind(this)} value="登录" />
					</form>
					<div className="ohua">
						<p><span>首次</span>登录，即送<span>615</span>元新人大礼包</p>
						<input type="checkbox" /> 已经阅读并同意<span>《妙汇服务条款》</span>
					</div>
					<div className="oshejiao">
						<i><span>使用社交网络登录</span></i>
						<div className="osj">
							<img src="./images/qq.png" alt="" />
							<img src="./images/wechat.png" alt="" />
							<img src="./images/weibo.png" alt="" />
						</div>
					</div>
				</div>
			</div>
			
			)
	}
}