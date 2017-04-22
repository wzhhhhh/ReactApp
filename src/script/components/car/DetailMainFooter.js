import React from 'react'

export default class DetailMainList extends React.Component {
	render(){
		return (
			<div className="DetailMainFooter">
				<div className="box">
					<h1 className="price">￥{this.props.goodsFooterInfo.shop_price}</h1>
					<div className="kefu">联系客服</div>
				</div>
				<div className="footer">
					<div className="say">
						<img src="./images/product_comment.png" alt=""/>
					</div>
					<div className="infoMore">查看详情</div>
					<div className="pay">立即购买</div>
					<div className="addCar">加入购物车</div>
				</div>
			</div>
		)
	}
}