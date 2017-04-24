import React,{Component} from 'react'

import LoginHeader from './loginHeader'
import LoginList from './loginList'
import LoginPage from './loginPage'

export default class Loginall extends Component {
	render (){
		return(
			<div className="loginall">
				<LoginHeader />
				<LoginList />
				<LoginPage />
			</div>
			)
	}
}