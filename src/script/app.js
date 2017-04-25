
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
import Search from  './components/home/search'

console.dir(Search)
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'

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
		<Route path="/search" component={Search}>
		</Route>
	</Router>	
),(document.getElementById('root')))
