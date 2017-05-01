import React from 'react';
import {Link} from 'react-router'
import InputNumber from '../../../Component_dev/inputnumber/src';

export default class DetailMainList extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			buyNumber: 1,
			chooseObj: {},
			chooseWhoInfo: null,
			chooseWhoAttr: null
		}
	}
	// componentWillReceiveProps(nextProps){
	// 	// console.log(nextProps)
	// 	let obj = {};
	// 	nextProps.goodsAddCarList.forEach((item) => {
	// 		obj[item.show_attr] = false;
	// 	})
	// 	// console.log(obj)
	// 	this.setState({
	// 		chooseObj: obj
	// 	})
	// 	console.log(this.state)
	// }
	// componentWillUpdate(){
	// 	// console.log(nextProps)
	// 	let obj = {};
	// 	this.props.goodsAddCarList.forEach((item) => {
	// 		obj[item.show_attr] = false;
	// 	})
	// 	// console.log(obj)
	// 	this.state = {
	// 		chooseObj: obj
	// 	}
	// 	console.log(this.state)
	// }
	active(attr, showAttr){
		console.log(showAttr)
		for(let i in this.state.chooseObj){
			this.state.chooseObj[i] = false;
		}
		let obj = {};
		obj[attr] = true;
		let newObj = Object.assign(this.state.chooseObj, obj);
		this.setState({
			chooseWhoAttr: showAttr,
			chooseWhoInfo: attr,
			chooseObj: newObj
		})
	}
	addCar(){
		// console.log(this.props.goodsAddCarInfo.goods_id)
		// console.log(this.state.chooseWhoAttr[0])
		let headers = new Headers({
		'Content-Type': 'application/json'
		 // 'Content-Type': 'application/x-www-form-urlencoded'
		})
		fetch(`/api/addCart`,{
			method: 'POST', 
			headers: headers,
			body: JSON.stringify({
				goods_id: this.props.goodsAddCarInfo.goods_id,
				one_step_buy: 0,
				spec: this.state.chooseWhoAttr[0]
			})
		})
		.then((response)=>response.json())
		.then((res)=>{
			console.log(res)
		})
		.catch(e=>console.log(e))
	}
	render(){
		// console.log(this.props.goodsAddCarInfo)
		// console.log(this.props.goodsAddCarList)
		let lis = this.props.goodsAddCarList.map((item)=>{
			let attr = item.show_attr;
			let active = this.state.chooseObj[attr] ? 'active' : ' ';
			return <span className={active} onClick={this.active.bind(this, item.show_attr, item.goods_attr)}>{item.show_attr}</span>
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
						<span className="number">购买数量</span>
						<InputNumber
						    value={this.state.buyNumber}
    						onChange={buyNumber => {
    							this.setState({buyNumber})
    						}}
    						min={1}
						/>
					</div>
					<div className="countPrice">
						<span className="priceAll">商品总价</span>
						<div className="priceBox">
							<span className="count">{(this.props.goodsAddCarInfo.shop_price * this.state.buyNumber).toFixed(1)}</span>
							<span className="choose">{this.state.chooseWhoInfo}</span>
						</div>
					</div>
				</div>
				<a onClick={this.addCar.bind(this)} className="sure">确定</a>
			</div>
		)
	}
}
