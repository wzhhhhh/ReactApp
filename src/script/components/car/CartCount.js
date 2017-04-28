import React from "react"

export default class CartCount extends React.Component{
	render(){
		return(
			<div className="cartCount">
				<div className="checkAll"></div>
				<div className="count">全选&nbsp;&nbsp;总价:&nbsp;{this.props.total.goods_price}</div>
				<span className="toPay">去结算({this.props.total.real_goods_count})</span>
			</div>
			)
	}
}
