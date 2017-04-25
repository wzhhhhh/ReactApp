import React from 'react'

import DetailMainList from './DetailMainList.js'
import DetailMainFooter from './DetailMainFooter.js'
import DetailMainAddCar from './DetailMainAddCar.js'

export default class DetailMain extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			productInfo: {},
			addCarList: []
		}
	}
	goToDetailShow(id){
		this.props.lll(id);
	}
	render(){
		return (
			<div className="DetailMain">
				<div className="container">
					<DetailMainList goodsListInfo={this.state.productInfo}/>
					<DetailMainFooter onGoToDetailShow={this.goToDetailShow.bind(this)} goodsFooterInfo={this.state.productInfo}/>
				</div>
				<div className="modal">
					<div className="empty"></div>
					<DetailMainAddCar goodsAddCarList={this.state.addCarList} goodsAddCarInfo={this.state.productInfo}/>
				</div>
			</div>
		)
	}
	componentDidMount(){
		fetch(`api/productInfo/${this.props.params.id}`)
		// fetch('api/productInfo/1344')
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					productInfo: res.goods
				})
			})
		fetch(`api/productModel/${this.props.params.id}`)
		// fetch('api/productModel/1344')
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					addCarList: res.list
				})
			})
	}
}