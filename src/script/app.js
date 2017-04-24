require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'

import Index from './components/Index'
import Home from './components/home/component'
import Banner from './components/home/build/banner'

import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'

ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/" component={Index}>
			<IndexRedirect to="/home" />
			<route path="home" component={Home}/>
		</Route>
	</Router>	
	),(document.getElementById('root')))