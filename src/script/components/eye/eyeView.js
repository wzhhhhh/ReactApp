import React from "react"
import EyeHeader from "./eyeCommon/eyeHeader"
import EyeContent from "./eyeCommon/eyeContent"
import EyeFooter from "./eyeCommon/eyeFooter"

class EyeView extends React.Component{
	back() {
	    this.props.router.goBack()
	}
	goEyeView(id){
		this.props.params.id
	}
	render(){
		// console.log(this.props.params.id)
		return(
			<div className="eyeView">
				<EyeHeader backHandler={this.back.bind(this)} goEyeView={this.props.params.id}></EyeHeader>
				<EyeContent goEyeView={this.props.params.id}></EyeContent>
				<EyeFooter></EyeFooter>
			</div>
			)
	}
}
export default EyeView