import React from 'react'


import DetailMain from './DetailMain.js'

export default class Index extends React.Component {
	goToDetailShow(id){
		console.log(id);
		console.log(this);
		console.log(`/detailGoodsShow/${id}`)
		this.props.router.push(`/detailGoodsShow/${id}`)
	}
	render(){
		return (
			<div className="DetailIndex">
				<DetailMain lll={this.goToDetailShow.bind(this)} />
			</div>
		)
	}
}