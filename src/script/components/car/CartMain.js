import React from "react"
import CartHeader from './CartHeader.js'
import CartList from './CartList.js'
import CartCount from './CartCount.js'
export default class CartMain extends React.Component{
	render(){
		return(
			<div className="cartMain">
				<CartHeader />
				<CartList />
				<CartCount />
			</div>
			)
	}
}
