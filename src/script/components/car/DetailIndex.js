import React from 'react'


import DetailMain from './DetailMain.js'

export default class Index extends React.Component {
	goToDetailShow(id){
		this.props.router.push(`/detailGoodsShow/${id}`)
	}
	render(){
		return (
			<div className="DetailIndex">
				<DetailMain goodsId={this.props.params.id}  lll={this.goToDetailShow.bind(this)} />
			</div>
		)
	}
}