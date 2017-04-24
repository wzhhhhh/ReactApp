
import React , {Component}from 'react'
import ReactDOM from 'react-dom'


import Footer from './home/module/footer'
import Components from './home/component'

export default class Index extends Component{
	render (){
		return (
			<div className="m-box">
				{this.props.children}
				<Footer></Footer>
			</div>
		)
	}
}