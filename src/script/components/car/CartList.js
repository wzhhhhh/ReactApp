import React from "react";
import CartListItemNumber from './CartListItemNumber';
import Scroller from '../../../component_dev/scroller/src';
export default class CartList extends React.Component{
	
	render(){
		let lists = this.props.goods_list.map((item)=>{
			return (
				<div className="item">
					<div className="check"></div>
					<img className="img" src={item.goods_thumb} alt=""/>
					<div className="info">
						<div className="title">{item.goods_name}</div>
						<div className="attr">{item.goods_attr}</div>
						<div className="price">{item.subtotal}</div>
						<div className="bottom">
							<CartListItemNumber />
							<div className="delete">删除</div>
						</div>
					</div>
				</div>
			)
		})
		return(
			<div className="cartList">
				<Scroller
				    scrollX={false}
				    scrollY={true}
				    
				>
				    <div>
				    	{lists}
				    </div>
				</Scroller>
			</div>
		)
	}
}
