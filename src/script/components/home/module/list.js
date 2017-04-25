import React,{Component} from 'react'

export default class List extends Component {
	getlist(val){
		return  val.map((value,index)=>{
			return (
				<div>
					<img src={value.list_img} />
					<h5>{value.goods_name} </h5>
					<p>{value.shop_price}</p>
				</div>
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