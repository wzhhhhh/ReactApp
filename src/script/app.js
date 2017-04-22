require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'

// import Classify from './components/classify/classify'

import Classifylist from './components/classify/classifyList/classifylist'
import Classifytopic from './components/classify/classifyList/classifytopic'

ReactDOM.render((
	// <Classify />
	<div>
		<Classifytopic />
		<Classifylist />
	</div>
	
),document.getElementById('root'))