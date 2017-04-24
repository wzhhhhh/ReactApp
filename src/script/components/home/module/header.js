import React,{Component} from 'react'

export default class Header extends Component {
  	render(){
   		return (
	    	<div className="home-header">
	    		<div className="home-user">
					<a href="#jacascript:;"><img src="./images/avatar.png"/></a>
	    		</div>
	    		<div className="home-search">
					<a href="#jacascript:;"><img src="./images/home_search.png"/>搜索妙汇创意商品</a>
	    		</div>
	    		<div className="home-scan">
					<a href="#jacascript:;"><img src="./images/home_qrcode_n.png"/></a>
	    		</div>
	    	</div>
	    )
	}
}