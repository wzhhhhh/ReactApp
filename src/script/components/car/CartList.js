import React from "react";
import CartListItemNumber from './CartListItemNumber';
import Scroller from '../../../component_dev/scroller/src';
import InputNumber from '../../../Component_dev/inputnumber/src';
import cartStore from '../../redux/cartStore';
import { connect } from 'react-redux';
class CartList extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			goodsBuyNumberList: {}
		}
	}
 	componentWillReceiveProps(nextProps){
 		// console.log(nextProps)
		let obj = {};
		nextProps.goods_list.forEach((item) => {
			let id = item['goods_id'];
			let number = item['goods_number'];
			obj[id] = number;
			this.setState({
				goodsBuyNumberList: obj
			})	
		})
 	}
	render(){
		// console.log(this.state.goodsBuyNumberList)
		let obj = {};
		let lists = this.props.goods_list.map((item)=>{
			let id = item['goods_id'];
			let number = item['goods_number'];
			obj[id] = number;
			// console.log(this.state.goodsBuyNumberList[id])
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
							    value={this.state.goodsBuyNumberList[id]}
    							onChange={value => {
    								// console.log(value);
    								obj[id] = value.toString();
    								// console.log(obj)
    								this.setState({
    									goodsBuyNumberList: obj
    								})
    							}}
	    						min={1}
							/>
							<div className="empty"></div>
							<img onClick={this.props.onChangeNumber.bind(this,{type: 'DELETE'})} src="/images/delete_cart.png" className="delete" />
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


export default connect(
  cartStore().mapStateToProps,
  cartStore().mapDispatchToProps
)(CartList)