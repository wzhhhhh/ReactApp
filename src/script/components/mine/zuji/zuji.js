import React from 'react'

export default class Zuji extends React.Component {

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
					<li className="oding">足迹</li>
					<li>清空</li>
				</ul>

				<ul className="zlist">
					<li>
						<div><img src="http://image.app.magicwe.com/images/201506/thumb_img/628_thumb_G_1433301157937.jpg" alt="" /></div>
						<div>
							<span>旅行包</span>
							<span className="zyan">￥86.70</span>
						</div>
						
					</li>
				</ul>

			</div>

			
			)
	}
}