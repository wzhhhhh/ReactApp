import React from "react";
import CartListItemNumber from './CartListItemNumber';
import Scroller from '../../../component_dev/scroller/src';
import InputNumber from '../../../Component_dev/inputnumber/src';
export default class CartList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			goodsBuyNumberList: {}
		}
	}
 	componentDidUpdate(){
		this.props.goods_list.forEach((item) => {
			console.log(item['goods_id'])
			let id = item['goods_id'];
			let number = item['goods_number']
			this.setState = {
				goodsBuyNumber: {
					id: number
				}
			}	
		})
 	}
	render(){
		let lists = this.props.goods_list.map((item)=>{
			return (
				<div className="item">
					<div className="check"></div>
					<div className="img">
						<img src={item.goods_thumb} alt=""/>
					</div>
					<div className="info">
						<div className="title">{item.goods_name}</div>
						<div className="attr">{item.goods_attr}</div>
						<div className="price">{item.subtotal}</div>
						<div className="bottom">
							<InputNumber
								ref={item.goods_id}
							    value={this.state.goodsBuyNumberList}
    							onChange={	goodsBuyNumber => this.setState({goodsBuyNumber})}
	    						min={1}
							/>
							<div className="empty"></div>
							<img src="/images/delete_cart.png" className="delete" />
						</div>
					</div>
				</div>
			)
		})
		return(
			<Scroller
			    scrollX={false}
			    scrollY={true}
			    extraClass={'yo-flex'}
			>
			    <div>
			    	{lists}
			    </div>
			</Scroller>
		)
	}
}
