import React from 'react'

export default class DetailMainList extends React.Component {
	render(){
		return (
			<div className="DetailMainList">
				<img src={this.props.goodsListInfo.detail_img} alt="" />
				<div className="content">
					<h1>{this.props.goodsListInfo.goods_name}</h1>
					<span className="text">{this.props.goodsListInfo.goods_brief}</span>
				</div>
			</div>
		)
	}
}