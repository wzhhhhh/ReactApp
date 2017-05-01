import React from 'react'

export default class DetailMainList extends React.Component {
	toGoodsShow(id){
		this.props.toGoodsShow(id);
	}
	render(){
		return (
			<div className="DetailMainList">
				<img onClick={this.toGoodsShow.bind(this, this.props.goodsListInfo.goods_id)} src={this.props.goodsListInfo.detail_img} alt="" />
				<div className="content">
					<h1>{this.props.goodsListInfo.goods_name}</h1>
					<span className="text">{this.props.goodsListInfo.goods_brief}</span>
				</div>
			</div>
		)
	}
}