import React,{Component} from 'react'
import HomeList from '../../../component_dev/list/src';
console.dir(HomeList)

import Banner from './module/banner'
import HomeNav from './module/nav'
import HomeView from './module/view'
import HomeActivity from './module/activity'
import List from './module/list'


export default class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			banner:[<div/>],
			navpic:[],
			viewtitle:[],
			activity:[],
			list:[]
		}
	}
  	render(){
   		return (
	    	<div className="home-content">
	    		<Banner banner={this.state.banner} />
	    		<HomeNav navpic={this.state.navpic} />
				<HomeView viewtitle={this.state.viewtitle} />
				<HomeActivity activity={this.state.activity}/>
				<List list={this.state.list}></List>
	    	</div>	
	    )
	}
	componentDidMount(){
		fetch('/api/homeData')
		.then((response)=>response.json())
		.then((res)=>{
			this.setState({
				banner:res.list.banner,
				navpic:res.list.navigator,
				viewtitle:res.list.topic,
				activity:res.list.promotions,
				list:res.list.goods
			})
		})
	}
}