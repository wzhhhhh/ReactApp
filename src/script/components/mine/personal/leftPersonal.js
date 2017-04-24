import React, {Component} from 'react'

import LeftPersonalHeader from './leftPersonalHeader'
import LeftPersonalList from './leftPersonalList'

export default class LeftPersonal extends Component {
	render (){
		return(
			<div className="leftpersonalpage">
				<LeftPersonalHeader />
				<LeftPersonalList />
			</div>
			)
	}
}
