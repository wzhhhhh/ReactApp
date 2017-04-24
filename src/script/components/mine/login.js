import React,{Component} from 'react'

import Loginall from './login/loginall'
import LeftPersonal from './personal/leftPersonal'


export default class Login extends Component {
	render (){
		return(
			<div className="ce">
				<LeftPersonal />
				<Loginall />
			</div>
			)
	}
}
