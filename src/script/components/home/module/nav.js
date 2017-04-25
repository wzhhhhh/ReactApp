import React,{Component} from 'react'
import Scroller from '../../../../component_dev/scroller/src';


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