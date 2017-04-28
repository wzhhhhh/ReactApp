import React from "react"
import Scroller from "../../../../component_dev/scroller/src"
class EyeContent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			view:[]
		}				
	}
	render(){  
		let page=this.state.view.content;
		return(
			<div className="viewport">
				<Scroller>
					<div>
						<div>
							<img src={this.state.view.image_url} alt=""/>
						</div>
						<div>
							<h2>{this.state.view.title}</h2>
						</div>
					</div>
					<div dangerouslySetInnerHTML={{__html:page}} />
				</Scroller>
				
			</div>
			)
	}
	componentDidMount(){
		let id = this.props.goEyeView
		fetch(`/api/article/${id}`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					view:res.article
				})
				
			})
	}
}
export default EyeContent