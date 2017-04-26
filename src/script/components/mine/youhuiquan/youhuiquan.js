import React from 'react'

export default class Youhui extends React.Component {

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
					<li className="odeng">可用优惠券</li>
					<li className="owang">添加</li>
				</ul>
				<div className="oin">
					<div className="oxuan">
						<span className="ohuan">可使用</span>
						<span>已失效</span>
					</div>
				</div>
				<div className="yquan">
					<img src="./images/aaa.jpg" alt="" />
				</div>
			</div>
			)
	}
}