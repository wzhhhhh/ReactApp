import React,{Component} from 'react'

export default class Activity extends Component {

	getactivity(content){
		return   content.map((value,index)=>{
			return (
					<div>
						<h3><i></i><b>{value.ad_name}</b></h3>
						<p>&nbsp;{value.ad_title}</p>
						<div><img src={value.ad_code} /></div>
						<b><span>距离结束</span><i>15:20:36</i></b>
	    			</div>
				)
		})
	}


  	render(){
   		return (

	    	<div className="home-activity">
   				{this.getactivity(this.props.activity)}
	     	</div>
	    )
	}
}