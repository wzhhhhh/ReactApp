import React,{Component} from 'react'

import LoginHeader from './loginHeader'
import LoginList from './loginList'
import LoginPage from './loginPage'
import OnloginHeader from '../onlogin/onlogin'

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

