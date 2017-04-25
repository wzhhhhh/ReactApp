import React from 'react'

export default class OnloginHeader extends React.Component {
	render (){
		return(
			<div className="onlogin">
				<ul className="onloginheader">
					<li><img src="http://m.miaohui.com/static/src/img/header_back.png" />></li>
					<li>登录</li>
					<li>忘记密码？</li>
				</ul>
				<div>
					<div>
						<span>普通登录</span>
						<span>手机动态验证码登录</span>
					</div>
					<form>
						<input type="text" placeholder="用户名" />
						<input type="password" placeholder="密码" />
						<input type="button" value="登录" />
					</form>
					<div>
						<p><span>首次</span>登录，即送<span>615</span>元新人大礼包</p>
						<input type="checkbox" /> 已经阅读并同意<span>《妙汇服务条款》</span>
					</div>
					<div>
						<i><span>使用社交网络登录</span></i>
						<div>
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