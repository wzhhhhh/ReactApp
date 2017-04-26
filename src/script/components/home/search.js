import React,{Component} from 'react'
import Suggest from '../../../component_dev/suggest/src';



import Header from './module/header'
export default class Search extends Component {
	back(){
		this.props.router.goBack()
	}
	
  	render(){
   		return (
	    	<div className="m-search">
	    		<div className="search-goback" onClick={this.back.bind(this)}>
	    			<img src="/images/menu_back.png" />
	    		</div>
	    		<div className="search-input">
					<input type="text" /><img src="/images/home_search.png" />
	    		</div>
	    		<div className="search-scan">
					<img src="/images/home_qrcode_p.png" />
	    		</div>
	    	</div> 
	    )
	}
}