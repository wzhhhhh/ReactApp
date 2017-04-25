import React,{Component} from 'react'
import {Link} from 'react-router'

export default class Header extends Component {
  	render(){
   		return (
	    	<div className="home-header">
	    		<div className="home-user">
					<a href="#jacascript:;"></a>
	    		</div>
	    		<div className="home-search">
					<Link to="/search"><img src="./images/home_search.png"/>搜索妙汇创意商品</Link>
	    		</div>
	    		<div className="home-scan">
					<a href="#jacascript:;"></a>
	    		</div>
	    	</div>
	    )
	}
}