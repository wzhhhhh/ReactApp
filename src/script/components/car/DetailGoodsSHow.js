import React from 'react'
import Carousel from '../../../component_dev/carousel/src';
export default class DetailGoodsShow extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			imgList: [<div />]
		}
	}
	render(){
		let imgs = this.state.imgList.map((item)=>{return <li className="item"><img src={item.img_url} alt=""/></li>})
		return (
			<Carousel extraClass="DetailGoodsShow" autoplay={false} dots={false}>
				{imgs}
			</Carousel>
		)
	}
	componentDidMount(){
		fetch(`api/productDetailImage/${this.props.params.id}`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					imgList: res.image
				})
			})
	}
}