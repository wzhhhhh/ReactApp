import React from 'react'

import DetailMainList from './DetailMainList.js'
import DetailMainFooter from './DetailMainFooter.js'
import DetailMainAddCar from './DetailMainAddCar.js'
import cartStore from '../../redux/cartStore';
import { connect } from 'react-redux';
class DetailMain extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			productInfo: {},
			addCarList: [],
			IsShow: null
		}
	}
	addCarShow(IsShow){
		this.setState({
			IsShow: IsShow
		})
	}
	addCarHidden(){
		console.log(1111)
		this.setState({
			IsShow: false
		})
	}
	goBack(){
		this.props.goBack();
	}
	goToDetailShow(id){
		this.props.lll(id);
	}
	toGoodsShow(id){
		this.props.goToDetailShow(id);
	}
	render(){
		let show = {
			visibility: this.state.IsShow ? 'visible' : 'hidden'
		}
		console.log(this)
		return (
			<div className="DetailMain">
				<span className="back yo-ico" onClick={this.goBack.bind(this)}>&#xf07d;</span>
				<div className="buyGoodsTypeNumber">
					<img src="/images/common_cart_on.png" alt=""/>
					<span>{this.props.buyGoodsTypeNumber}</span>
				</div>
				<div className="container">
					<DetailMainList toGoodsShow={this.toGoodsShow.bind(this)} goodsListInfo={this.state.productInfo}/>
					<DetailMainFooter addCarIsShow={this.addCarShow.bind(this)} onGoToDetailShow={this.goToDetailShow.bind(this)} goodsFooterInfo={this.state.productInfo}/>
				</div>
				<div className="modal" style={show}>
					<div className="empty" onClick={this.addCarHidden.bind(this)} ></div>
					<DetailMainAddCar goodsAddCarList={this.state.addCarList} goodsAddCarInfo={this.state.productInfo}/>
				</div>
			</div>
		)
	}
	componentDidMount(){
		console.log(this.props.goodsId)
		fetch(`api/productInfo/${this.props.goodsId}`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					productInfo: res.goods
				})
			})
		fetch(`api/productModel/${this.props.goodsId}`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					addCarList: res.list
				})
			})
	}
}
export default connect(
  cartStore().mapStateToProps,
  cartStore().mapDispatchToProps
)(DetailMain)