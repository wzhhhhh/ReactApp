import React from 'react'


import DetailMain from './DetailMain.js'

export default class Index extends React.Component {
	goToDetailShow(id){
		this.props.router.push(`/detailGoodsShow/${id}`)
	}
	goToCart(){
		this.props.router.push('/cart');
	}
	goBack(){
		this.props.router.goBack();
	}
	render(){
		return (
			<div className="DetailIndex">
				<DetailMain goToCart={this.goToCart.bind(this)} goToDetailShow={this.goToDetailShow.bind(this)} goBack={this.goBack.bind(this)} goodsId={this.props.params.id}  lll={this.goToDetailShow.bind(this)} />
			</div>
		)
	}
}