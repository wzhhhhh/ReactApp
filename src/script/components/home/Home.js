import React,{Component} from 'react'
import Loading,{loading} from '../../../component_dev/Loading/src'
import Scroler from '../../../component_dev/scroller/src';
import Link from "react-router";

import Banner from './module/banner'
import HomeNav from './module/nav'
import HomeView from './module/view'
import HomeActivity from './module/activity'
import HomeList from './module/list'


export default class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			banner:[<div/>],
			navpic:[],
			viewtitle:[],
			activity:[],
			list:[],
			page:2
		}
	}
	componentWillMount() {
   		loading.show()
 	}
  	render(){
   		return (
   			<Scroler
				ref="loading"
				useLoadMore={true}
				onLoad={() => {
					fetch(`/api/homeData?page=${this.state.page++}&size=10`)
					.then((response)=>response.json())
					.then((res)=>{
						this.setState({
							list:this.state.list.concat(res.list.goods)
						})
					})

		        this.refs.loading.stopLoading(true);
		    }}
   			>
		    	<div className="home-content">
		    		<Banner banner={this.state.banner} />
		    		<HomeNav navpic={this.state.navpic} />
					<HomeView viewtitle={this.state.viewtitle} />
					<HomeActivity activity={this.state.activity}/>
					<HomeList list={this.state.list}></HomeList>
		    	</div>	
	    	</Scroler>
	    )
	}
	componentDidMount(){
		fetch('/api/homeData')
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				banner:res.list.banner,
				navpic:res.list.category,
				viewtitle:res.list.topic,
				activity:res.list.promotions,
				list:res.list.goods
			})
		})
		loading.hide()
	}
}