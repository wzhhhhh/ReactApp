
require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'


import Index from './components/Index'
import Home from './components/home/component'

import Banner from './components/home/module/banner'
import Classify from './components/classify/classify'
import ClassList from './components/classify/ClassList'
import EyeShot from './components/eye/eyeShot'
import CartIndex from './components/car/CartIndex'
import Login from './components/mine/login'

import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home" />
			<route path="home" component={Home}/>
			<route path="classify" component={Classify}/>
			<route path="eyeShot" component={EyeShot}/>
			<route path="cart" component={CartIndex}/>
			<route path="mine" component={Login}/>			
		</Route>
		<Route path="classList/:id" component={ClassList}/>
	</Router>	
),(document.getElementById('root')))
