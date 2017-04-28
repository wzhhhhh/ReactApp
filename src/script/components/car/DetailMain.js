import React from 'react'

import DetailMainList from './DetailMainList.js'
import DetailMainFooter from './DetailMainFooter.js'
import DetailMainAddCar from './DetailMainAddCar.js'

export default class DetailMain extends React.Component {
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
	goToDetailShow(id){
		this.props.lll(id);
	}
	render(){
		let show = {
			visibility: this.state.IsShow ? 'visible' : 'hidden'
		}
		return (
			<div className="DetailMain">
				<div className="container">
					<DetailMainList goodsListInfo={this.state.productInfo}/>
					<DetailMainFooter addCarIsShow={this.addCarShow.bind(this)} onGoToDetailShow={this.goToDetailShow.bind(this)} goodsFooterInfo={this.state.productInfo}/>
				</div>
				<div className="modal" style={show}>
					<div className="empty"></div>
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