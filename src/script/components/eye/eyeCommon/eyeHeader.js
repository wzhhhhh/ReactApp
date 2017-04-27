import React from "react"

class EyeHeader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			view:[]
		}
	}
	back() {
	    this.props.backHandler()
	}
	render(){
		return(
			<div className="eh">
				<span onClick={this.back.bind(this)} className="back"></span>
            	<h1>{this.state.view.title}</h1>
            	<span className="share"></span>
			</div>
			)
	}
	componentDidMount(){
		fetch(`/api/article/547`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					view:res.article
				})
			})
	}
}
export default EyeHeader