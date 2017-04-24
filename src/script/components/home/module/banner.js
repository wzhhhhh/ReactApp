import React,{Component} from 'react'

export default class Banner extends Component {

	getBanner(pic){
		return pic.map((value,index)=>{
			return(<img src={value.pic} />)
		}
		)
	}

  	render(){
   		return (
	    	<div className="home-banner">
	    		{this.getBanner(this.props.banner)}
	    	</div>
	    )
	}
}