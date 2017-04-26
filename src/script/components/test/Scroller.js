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
			return <img src={item.list_img} alt=""/>
		})
		console.log(imgs)
		return(
			<Scroller
			    scrollX={false}
			    scrollY={true}
			    ref="scroller"
			    usePullRefresh={true}
			    onRefresh={()=>{
			    	console.log(111)
			    	fetch('api/homeData?page=2&size=1')
					.then((response)=>response.json())
					.then((res)=>{
						this.setState({
							goods: res.list.goods.concat(this.state.goods)
						})
						this.refs.scroller.stopRefreshing(true);
					})
			    }}
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
					goods: res.list.goods
				})
			})
	}
}
