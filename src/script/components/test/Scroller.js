import React from "react"
import Scroller from '../../../component_dev/scroller/src'

export default class Scroll extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			goods: []
		} 
	}
	render(){
		let imgs = this.state.goods.map((item)=>{
			return <img src={item.goods_img} alt=""/>
		})
		return(
			<Scroller
			    scrollX={true}
			    scrollY={false}
			>
			    <div>{imgs}</div>
			</Scroller>	
		)
	}
	componentDidMount(){
		console.log(this.props.goodsId)
		fetch('api/homeData?page=1&size=10')
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					list: res.list.goods
				})
			})
	}
}
