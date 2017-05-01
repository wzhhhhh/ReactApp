import React from 'react'


import DetailMain from './DetailMain.js'

export default class Index extends React.Component {
	goToDetailShow(id){
		this.props.router.push(`/detailGoodsShow/${id}`)
	}
	goBack(){
		this.props.router.goBack();
	}
	render(){
		return (
			<div className="DetailIndex">
				<DetailMain goBack={this.goBack.bind(this)} goodsId={this.props.params.id}  lll={this.goToDetailShow.bind(this)} />
			</div>
		)
	}
}