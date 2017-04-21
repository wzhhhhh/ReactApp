import React from 'react'

export default class Mine extends React.Component {
  render(){
  	console.log(this)
    return (
    	<div>
    		<h1>{this.props.params.type}</h1>
    	</div>
    )
  }
}
