require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'

//分类主页面
// import Classify from './components/classify/classify'

//分类列表页
// import Classifylist from './components/classify/classifyList/classifylist'
// import Classifytopic from './components/classify/classifyList/classifytopic'

//视野主页面
import EyeShot from './components/eye/eyeShot'

ReactDOM.render((
	//分类主页面
	// <Classify />
	
	//分类列表页
	// <div>
	// 	<Classifytopic />
	// 	<Classifylist />
	// </div>
	
	//视野主页面
	<div>
		<EyeShot />
	</div>
),document.getElementById('root'))