import React,{Component} from 'react'

import {Link} from 'react-router'

export default class Footer extends Component {
  	render(){
   		return (
	    	<div className="home-footer">
	    		<Link to="/home" activeClassName="active"><img src="./images/common_home.png" /><p>首页</p> </Link>
	    		<Link to="/banner" activeClassName="active"><img src="./images/common_category.png" /><p>分类</p> </Link>
	    		<Link to="/qwe" activeClassName="active"><img src="./images/common_find.png" /><p>视野</p> </Link>
	    		<Link to="/asd" activeClassName="active"><img src="./images/common_cart.png" /><p>购物车</p> </Link>
	    		<Link to="/zxc" activeClassName="active"><img src="./images/common_profile.png" /><p>我的妙汇</p> </Link>
	    	</div>
	    )
	}
}	