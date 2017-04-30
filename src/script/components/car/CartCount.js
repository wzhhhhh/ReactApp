import React from "react"
import cartStore from '../../redux/cartStore';
import { connect } from 'react-redux';

class CartCount extends React.Component{
	render(){
		return(
			<div className="cartCount">
				<div className="checkAll"></div>
				<div className="count">全选&nbsp;&nbsp;总价:&nbsp;{this.props.total.goods_price}</div>
				<span className="toPay">去结算({this.props.buyGoodsTypeNumber})</span>
			</div>
			)
	}
	// componentWillReceiveProps(nextProps){
	// 	console.log(nextProps)
	// 	this.props.onChangeNumber({
	// 		type: 'RESET',
	// 		buyGoodsTypeNumber: this.props.total.real_goods_count
	// 	})
	// }
	// componentDidMount(){
	// 	console.log(this.props.total.real_goods_count)
	// 	this.props.onChangeNumber({
	// 		type: 'RESET',
	// 		buyGoodsTypeNumber: this.props.total.real_goods_count
	// 	})
	// }
	componentDidMount(){
		let headers = new Headers({
		'Content-Type': 'application/json'
		 // 'Content-Type': 'application/x-www-form-urlencoded'
		})
		fetch(`/api/alertCart`,{
			method: 'POST', 
			headers: headers,
			body: JSON.stringify({
				goodsID: '110368',
				number: 2
			})
		})
		.then((response)=>response.json())
		.then((res)=>{
			console.log(res)
		}).catch(e=>console.log(e))
	}
}
export default connect(
  cartStore().mapStateToProps,
  cartStore().mapDispatchToProps
)(CartCount)