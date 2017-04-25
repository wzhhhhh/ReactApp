import React,{Component} from 'react'
// import ReactDOM from 'react-dom'

import LoginHeader from './loginHeader'
import LoginList from './loginList'
import LoginPage from './loginPage'
import OnloginHeader from '../onlogin/onlogin'
// import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'


export default class Loginall extends Component {
	render (){
		return(
			<div className="loginall" id="loginall">
				<LoginHeader />
				<LoginList />
				<LoginPage />
			</div>
			)
	}
}

// ReactDOM.render((
// 	<Router history={hashHistory}>
// 		<Route path="/onlogin" component={OnloginHeader}>
			
// 		</Route>
// 	</Router>	
// 	),(document.getElementById('loginall')))
