import React,{Component} from 'react'
import Scroller from '../../../../component_dev/scroller/src';
import {Link} from 'react-router'

export default class HomeNav extends Component {
	getnavpic(url){
		return  url.map((value,index)=>{
			return (
				<Link to={`/classList/${value.cat_id}`}> <img src={value.icon} /> <p>{value.cat_name}</p> </Link>
				)
		})
	}
  	render(){
   		return (
	    	<div className="home-nav">
		    	<Scroller
					scrollX={true}
					scrollY={false}
		    	>
					{this.getnavpic(this.props.navpic)}
		    	</Scroller>			
	    	</div>
	    )
	}
}