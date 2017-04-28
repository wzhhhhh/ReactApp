import React from "react"
import CartHeader from './CartHeader.js'
import CartList from './CartList.js'
import CartCount from './CartCount.js'

export default class CartIndex extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			goods_list: [],
			total: {} 
		}
	}
	render(){
		return(
			<div className="cartMain">
				<CartHeader />
				<CartList goods_list={this.state.goods_list}/>
				<CartCount total={this.state.total}/>
			</div>
			)
	}
	componentDidMount(){
		fetch(`api/cart/115140`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					goods_list: res.cart.goods_list,
					total: res.cart.total
				})
			})
	}
}