import React from 'react'
import Carousel from '../../../component_dev/carousel/src';
export default class DetailGoodsShow extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			imgList: [<div />]
		}
	}
	goBack(){
		this.props.router.goBack()
	}
	render(){
		let imgs = this.state.imgList.map((item)=>{return <li className="item"><img src={item.img_url} alt=""/></li>})
		return (
			<div className="goodsShowBox">
				<span className="back yo-ico" onClick={this.goBack.bind(this)}>&#xf07d;</span>
				<Carousel extraClass="DetailGoodsShow" autoplay={false} dots={false}>
					{imgs}
				</Carousel>
			</div>
		)
	}
	componentDidMount(){
		fetch(`api/productDetailImage/${this.props.params.id}`)
			.then((response)=>response.json())
			.then((res)=>{
				console.log(res)
				this.setState({
					imgList: res.image
				})
			})
	}
}