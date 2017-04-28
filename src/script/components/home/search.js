import React,{Component} from 'react'
import {Link} from 'react-router'
import Scroller from '../../../component_dev/scroller/src';

import Header from './module/header'
export default class Search extends Component {
	constructor(props){
		super(props)
		this.state={
			hostsearch:[],
			searchList:[],
		}
	}

	back(){
		this.props.router.goBack()
	}
	
	getHotSearch(url){
		return url.map((value,index)=>{
			return  (<Link>{value}</Link>)
		}) 
	}


	keypress(){
		let headers = new Headers({
		'Content-Type': 'application/json'
		 // 'Content-Type': 'application/x-www-form-urlencoded'
		})
		fetch(`/api/searchList`,{
			method: 'POST', 
			headers: headers,
			body: JSON.stringify({
				page:1,
				size:10,
				searchKey: `${this.refs.text.value}`
			})
		})
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				searchList:res.list.goods
			})
			
		}).catch(e=>console.log(e))
	}
	getGoods(goods){
		return goods.map((value,index)=>{
			return (<Link className="search-goods" to={`/detail/${value.goods_id}`}>
					<img src={value.goods_img} />
					<p>{value.goods_name}</p>
					<b>￥{value.shop_price}</b>
				</Link>)
		})
		
	}
	

	componentWillMount(){
		let headers = new Headers({
		'Content-Type': 'application/json'
		 // 'Content-Type': 'application/x-www-form-urlencoded'
		})
		fetch(`/api/hotSearches`,{
			method: 'POST', 
			headers: headers,
			body: JSON.stringify({
				number: '9'
			})
		})
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				hostsearch:this.state.hostsearch.concat(res.keywords)
			})
		}).catch(e=>console.log(e))
	}



  	render(){
   		return (
   			<div className="m-search-box">
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
		    	<Scroller extraClass="search-box" >
			    	<div>
				    	<div className="search-hot">
							<p>热门搜索关键词：</p>
							<div className="search-result">
								{this.getHotSearch(this.state.hostsearch)}
							</div>
				    	</div>
				    	<div className="search-List">
							{this.getGoods(this.state.searchList)}
				    	</div>
				    </div>	
			    </Scroller>
	    	</div>
	    )
	}
	
}