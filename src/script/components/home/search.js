import React,{Component} from 'react'



import Header from './module/header'
export default class Search extends Component {

	back(){
		this.props.router.goBack()

	}

	keypress(){
		let headers = new Headers({
		'Content-Type': 'application/json;charset=UTF-8'
		 // 'Content-Type': 'application/x-www-form-urlencoded'
		})
		fetch(`/api/searchList`,{
			method: 'POST', 
			headers:headers,
			body:`page=1&size=10&searchKey=${'电池'}`
		})
		.then((response)=>response.json())
		.then((res)=>{
			console.log(res)
		}).catch(e=>console.log(e))
	}
	
  	render(){
   		return (
	    	<div className="m-search">
	    		<div className="search-goback" onClick={this.back.bind(this)}>
	    			<img src="/images/menu_back.png" />
	    		</div>
	    		<div className="search-input">
					<input type="text" ref="text" onBlur={this.keypress.bind(this)}/><img src="/images/home_search.png" />
	    		</div>
	    		<div className="search-scan">
					<img src="/images/home_qrcode_p.png" />
	    		</div>
	    	</div> 
	    )
	}
}