import React,{Component} from 'react'

import Home from './Home'
import Header from './build/header'

export default class Components extends Component {
  	render(){
   		return (
	    	<div className="home-box">
	    		<Header></Header>
				<Home></Home>
	    	</div>
	    )
	}
}