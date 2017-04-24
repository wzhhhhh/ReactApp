require('../style/app.scss')

import React from 'react'
import ReactDOM from 'react-dom'

import Login from './components/mine/login'

ReactDOM.render (
	<Login />,
	document.getElementById('root')
	)

// window.onload = function(){
	var plu = document.getElementsByClassName('loginall');
	console.log(1);
	plu.onmousemove = function(){
			console.log(109);
			plu.style.left = 0;
	}
	
	
// }