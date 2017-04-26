import React from 'react'

export default class Dingdan extends React.Component {

	back() {
    	this.props.router.goBack();
 	}

	render (){
		return(
			<div className="ding">
				<ul className="dingheader">
					<li className="otu" onClick={this.back.bind(this)}>
						<img src="http://m.miaohui.com/static/src/img/header_back.png" />
					</li>
					<li className="oding">订单列表</li>
				</ul>
				<ul className="dan">
				<li>待付款</li>
				<li className="li active">待收货</li>
				<li>全部</li>
			</ul>
			</div>

			
			)
	}
}