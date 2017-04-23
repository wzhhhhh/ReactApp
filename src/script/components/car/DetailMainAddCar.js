import React from 'react'

export default class DetailMainList extends React.Component {
	render(){
		console.log(this.props.goodsAddCarList)
		console.log(this.props.goodsAddCarInfo)
		let lis = this.props.goodsAddCarList.map((item)=>{
			return <span>{item.show_attr}</span>
		})
		return (
			<div className="DetailMainAddCar">
				<dl className="goodsInfo">
					<dt className="img">
						<img src={this.props.goodsAddCarInfo.detail_img} alt=""/>
					</dt>
					<dl className="info">
						<span className="infoTitle">{this.props.goodsAddCarInfo.goods_name}</span>
						<h1 className="price">{this.props.goodsAddCarInfo.miaohui_price}</h1>
					</dl>
				</dl>
				<div className="goodsChoose">
					<span className="chooseTitle">样式分类</span>
					<ul className="chooses">
						{lis}
					</ul>
				</div>
				<div className="goodsCount">
					<div className="countNumber">
						<span className="number">购买数量</span>
						<div className="numberBox">
							<input type="button" value="-"/>
							<input type="text"/>
							<input type="button" value="+"/>
						</div>
					</div>
					<div className="countPrice">
						<span className="priceAll">商品总价</span>
						<div className="priceBox">
							<span className="count"></span>
							<div className="choose"></div>
						</div>
					</div>
				</div>
				<div className="sure">确定</div>
			</div>
		)
	}
}