
require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'

import Index from './components/Index'
import Home from './components/home/component'
import Banner from './components/home/module/banner'
import Classify from './components/classify/classify'
import EyeShot from './components/eye/eyeShot'
import CartIndex from './components/car/CartIndex'
import Login from './components/mine/login'
import OnloginHeader from './components/mine/onlogin/onlogin'
import Dingdan from './components/mine/dingdan/dingdan'
import Zuji from './components/mine/zuji/zuji'
import Youhui from './components/mine/youhuiquan/youhuiquan'
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
			<Route path="home" component={Home}/>
			<Route path="classify" component={Classify}/>
			<Route path="eyeShot" component={EyeShot}/>
			<Route path="cart" component={CartIndex}/>
			<Route path="mine" component={Login}/>
		</Route>
			<Route path="onlogin" component={OnloginHeader}/>
			<Route path="dingdan" component={Dingdan}/>
			<Route path="zuji" component={Zuji}/>
			<Route path="youhui" component={Youhui}/>
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
// // >>>>>>> master
// =======
// 	),(document.getElementById('root')))
// >>>>>>> master
