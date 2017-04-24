require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'

import Index from './components/Index'
import Home from './components/home/component'
import Banner from './components/home/module/banner'

import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home" />
			<route path="home" component={Home}/>
		</Route>
	</Router>	
	),(document.getElementById('root')))
//分类主页面
// import Classify from './components/classify/classify'

//分类列表页
// import Classifylist from './components/classify/classifyList/classifylist'
// import Classifytopic from './components/classify/classifyList/classifytopic'

//视野主页面
import EyeShot from './components/eye/eyeShot'

// ReactDOM.render((
// 	//分类主页面
// 	//<Classify />
	
// 	//分类列表页
// 	//<div>
// 	//	<Classifytopic />
// 	//	<Classifylist />
// 	//</div>
	
// 	//视野主页面
// 	// <div>
// 	// 	<EyeShot />
// 	// </div>
// ),document.getElementById('root'))

// import Index from './components/index.js'

// ReactDOM.render(
// 	<Index/>,document.getElementById("root")
// )

