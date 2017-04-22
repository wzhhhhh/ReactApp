import React from 'react'

import DetailMainList from './DetailMainList.js'
import DetailMainFooter from './DetailMainFooter.js'
import DetailMainAddCar from './DetailMainAddCar.js'

export default class Index extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			productInfo: {},
			productDetailImage: {}
		}
	}
	render(){
		return (
			<div className="DetailMain">
				<DetailMainList goodsListInfo={this.state.productInfo}/>
				<DetailMainFooter goodsFooterInfo={this.state.productInfo}/>
				<DetailMainAddCar />
			</div>
		)
	}
	componentDidMount(){
		fetch('api/productInfo/1343')
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					productInfo: res.goods
				})
			})
	}
}