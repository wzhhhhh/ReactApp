import React from 'react';
import {Link} from 'react-router'
import InputNumber from '../../../Component_dev/inputnumber/src';
import cartStore from '../../redux/cartStore';
import { connect } from 'react-redux';

class DetailMainList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			buyNumber: 1
		}
	}
	componentDidMount(){
		this.props.onChangeNumber({
			type: 'NUMBERPLUS'
		})
	}
	render(){
		console.log(this.props.number)
		console.log(this.props.onChangeNumber)
		let lis = this.props.goodsAddCarList.map((item)=>{
			return <span>{item.show_attr}</span>
		})
		return (
			<div className="DetailMainAddCar">
				<dl className="goodsInfo">
					<dt className="img">
						<img src={this.props.goodsAddCarInfo.detail_img} alt=""/>
					</dt>
					<dl className="info">
						<span className="infoTitle">{this.props.goodsAddCarInfo.goods_name}</span>
						<h1 className="price">{this.props.goodsAddCarInfo.miaohui_price}</h1>
					</dl>
				</dl>
				<div className="goodsChoose">
					{lis.length > 0 ? <span className="chooseTitle">样式分类</span> : ''}
					<ul className="chooses">
						{lis}
					</ul>
				</div>
				<div className="goodsCount">
					<div className="countNumber">
						<span className="number">{this.props.number}</span>
						<InputNumber
						    value={this.state.buyNumber}
    						onChange={buyNumber => this.setState({buyNumber})}
    						min={1}   
						/>
					</div>
					<div className="countPrice">
						<span className="priceAll">商品总价</span>
						<div className="priceBox">
							<span className="count">￥188</span>
							<span className="choose">购买数量购买数量</span>
						</div>
					</div>
				</div>
				<a className="sure">确定</a>
			</div>
		)
	}
}

export default connect(
	cartStore().mapStateToProps,
	cartStore().mapDispatchToProps
)(DetailMainList)