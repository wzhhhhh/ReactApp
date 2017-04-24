import React,{Component} from 'react'

export default class HomeNav extends Component {
	getnavpic(url){
		return  url.map((value,index)=>{
			return (
				<a href="#javascript:;"> <img src={value.icon} /> <p>{value.name}</p> </a>
				)
		})
	}
  	render(){
   		return (
	    	<div className="home-nav">
				{this.getnavpic(this.props.navpic)}
	    	</div>
	    )
	}
}