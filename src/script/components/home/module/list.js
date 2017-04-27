import React,{Component} from 'react'
import {Link} from 'react-router'


export default class List extends Component {
	getlist(val){
		return  val.map((value,index)=>{
			return (
				<Link to={`/detail/${value.goods_id}`}>
					<img src={value.list_img} />
					<h5>{value.goods_name} </h5>
					<p>{value.shop_price}</p>
				</Link>
				)
		})
	}
  	render(){
   		return (
	    	<div className="home-list">
	    		{this.getlist(this.props.list)}
	    	</div> 
	    )
	}
}