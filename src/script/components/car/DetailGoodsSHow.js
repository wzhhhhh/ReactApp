import React from 'react'

export default class DetailGoodsShow extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			imgList: []
		}
	}
	render(){
		let imgs = this.state.imgList.map((item)=>{return <img src={item.img_url} alt=""/>})
		return (
			<div className="DetailGoodsShow">
				<div className="imgBox">{imgs}</div>
			</div>
		)
	}
	componentDidMount(){
		fetch('api/productDetailImage/1343')
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					imgList: res.image
				})
			})
	}
}