import React from 'react'
import {Link} from 'react-router'
import Mine from '../mine/Mine.js'
export default class Home extends React.Component {
  render(){
    return (
    	<div>
    		<h1>Home</h1>
    		<Link to="mine/abc">跳转</Link>
    	</div>
    )
  }
}
