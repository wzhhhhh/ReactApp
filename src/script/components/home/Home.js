import React,{Component} from 'react'


import Banner from './build/banner'
import HomeNav from './build/nav'
import HomeView from './build/view'
import HomeActivity from './build/activity'




export default class Home extends Component {
	constructor(props){
		super(props)
		this.state={
			banner:[],
			navpic:[],
			viewtitle:[],
			activity:[]
		}
	}
  	render(){
   		return (
	    	<div className="home-content">
	    		<Banner banner={this.state.banner} />
	    		<HomeNav navpic={this.state.navpic} />
				<HomeView viewtitle={this.state.viewtitle} />
				<HomeActivity activity={this.state.activity}/>
				<img src="http://image.app.magicwe.com/images/201704/goods_img/1344_L_1492591839082.jpg"/>
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
				activity:res.list.promotions
			})
		})
	}
}