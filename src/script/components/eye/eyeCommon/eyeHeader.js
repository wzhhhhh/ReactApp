import React from "react"

class EyeHeader extends React.Component{
	render(){
		return(
			<div className="eh">
				<span onClick={this.back.bind(this)} className="back"></span>
            	<h1>我是一个标题</h1>
            	<span className="yo-ico list">&#xf07e;</span>
			</div>
			)
	}
}
export default EyeHeader