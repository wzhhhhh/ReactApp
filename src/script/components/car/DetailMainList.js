import React from 'react'

export default class DetailMainList extends React.Component {
	render(){
		console.log(this.props.goodsInfo.goods_id)
		return (
			<div className="DetailMainList">
				<img src={this.props.goodsInfo.goods_img} alt="" />
				<div className="content">
					<h1>{this.props.goodsInfo.goods_name}</h1>
					<span className="text">{this.props.goodsInfo.goods_brief}</span>
				</div>
			</div>
		)
	}
}