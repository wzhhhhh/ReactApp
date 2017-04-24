
require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'


//分类主页面
// import Header from './components/classify/Header'
// import Classify from './components/classify/classify'

//分类列表页
// import Header from './components/classify/Header'
// import Classifylist from './components/classify/classifyList/classifylist'
// import Classifytopic from './components/classify/classifyList/classifytopic'

//视野主页面
import Index from './components/Index'
import Home from './components/home/component'
import Banner from './components/home/module/banner'
import Classify from './components/classify/classify'
import EyeShot from './components/eye/eyeShot'
import Cart from './components/car/Cart'
import Login from './components/mine/login'
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'

ReactDOM.render((
	//分类主页面
	// <div>
	// 	<Header />
	// 	<Classify />
	// </div>
	
	
	//分类列表页
	// <div>
	// 	<Header />
	// 	<Classifytopic />
	// 	<Classifylist />
	// </div>
	
	//视野主页面
	//<div>
	//	<EyeShot />
	//</div>
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home" />
			<route path="home" component={Home}/>
			<route path="classify" component={Classify}/>
			<route path="eyeShot" component={EyeShot}/>
			<route path="cart" component={Cart}/>
			<route path="mine" component={Login}/>
		</Route>
	</Router>	
),(document.getElementById('root')))
