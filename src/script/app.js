
require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'

import Index from './components/Index'
import Home from './components/home/component'
import Banner from './components/home/module/banner'
import Classify from './components/classify/classify'
import EyeShot from './components/eye/eyeShot'
import Cart from './components/car/Cart'
import Login from './components/mine/login'
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'

// <<<<<<< HEAD
// ReactDOM.render (
// 	<Login />,
// 	document.getElementById('root')
// 	)

// // window.onload = function(){
// 	var plu = document.getElementsByClassName('loginall');
// 	console.log(1);
// 	plu.onmousemove = function(){
// 			console.log(109);
// 			plu.style.left = 0;
// 	}
	
	
// // }
// =======
ReactDOM.render((
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


//分类列表页
// import Classifylist from './components/classify/classifyList/classifylist'
// import Classifytopic from './components/classify/classifyList/classifytopic'



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

// =======
// require('../style/app.scss')

// import React from 'react'
// import ReactDOM from 'react-dom'

// import Login from './components/mine/login'

// ReactDOM.render (
// 	<Login />,
// 	document.getElementById('root')
// 	)
// >>>>>>> login
// >>>>>>> master
