import React,{Component} from 'react'

export default class View extends Component {
	getview(val){
		return  val.map((value,index)=>{
			return (
				<li><i></i><a href="#javascript:;">{value.title}</a></li>
				)
		})
	}
  	render(){
   		return (
	    	<div className="home-view">
	    		<div className="view-img"><img src="./images/ic_index_article.png" /></div>
	    		<div className="view-text">
					<ul>
						{this.getview(this.props.viewtitle)}
					</ul>
	    		</div>
	    	</div> 
	    )
	}
}