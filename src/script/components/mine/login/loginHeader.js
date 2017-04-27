import React from 'react'
import {Link} from 'react-router'
import Popup from '../../../../component_dev/popup/src'
import Toast from '../../../../component_dev/toast/src'


export default class  LoginHeader extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			popupShow:false,
			username:localStorage.getItem('username')
		}
	}

	registor(){
		 let username = this.refs.username.value;
		 let password = this.refs.password.value;
		 this.setState({
			popupShow:false
		 })
	let headers = new Headers({
		'Content-Type':'application/x-www-form-urlencoded'
	})

		 fetch('/nlogin/users/registor',{
			method:'POST',
			headers:headers,
			body:`username=${username}&password=${password}`
		 })
		 .then(response=>response.json())
		 .then(res=>{
		 	if(res.status === 'ok'){
		 	Toast.show('注册成功',1000);
		 	} else{
		 	Toast.show('注册失败',1000);
		 	}
		 })
		 .catch(e=>{
		 	console.log(e);
		 })
	}
	
	render (){
		
		return(

			<div className="loginheader">
				<div className="lxkf">联系客服</div>
				{
					
					this.state.username ? (<ul className="lzhong">
					<li className="ltu"><img src="./images/avatar.png" alt="" /></li>
					<li><span>{this.state.username}</span><span className="m">M0</span></li>
					<li className="lhuise"><span className="mq">0个秒钻</span><Link to="/youhui" className="ldian"><span className="mq">1张优惠券</span></Link></li>
				</ul>) : (<ul className="lzhong">
					<li className="ltu"><img src="./images/avatar.png" alt="" /></li>
					<li><Link to="/onlogin" className="ldian">点击登录</Link></li>
					<li className="lhuise" onClick = {()=>{this.setState({popupShow:true})}}>速来注册，获得全球创意</li>
				</ul>)	
				}
				
				
				<div className="lshezhi"><img src="./images/profile_preference.png" alt="" /></div>
				<Popup 
					ref = "registor"
					show = {this.state.popupShow}
					height="300"
					extraClass="regi"
					>
					<div><input type="text" ref="username" placeholder="用户名" /></div>
					<div><input type="password" ref="password" placeholder="密码" /></div>
					<div><input type="button" value="提交" onClick={this.registor.bind(this)} /></div>
				</Popup>
			</div>

			)
	}
}