import React from 'react'

export default class DetailMainList extends React.Component {
	render(){
		return (
			<div className="DetailMainFooter">
				<div className="bg"></div>
				<div className="box">
					<h1 className="price">￥{this.props.goodsFooterInfo.shop_price}</h1>
					<div className="kefu">联系客服</div>
				</div>
				<div className="footer">footer</div>
			</div>
		)
	}
}