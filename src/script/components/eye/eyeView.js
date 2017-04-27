import React from "react"
import EyeHeader from "./eyeCommon/eyeHeader"
import EyeContent from "./eyeCommon/eyeContent"
import EyeFooter from "./eyeCommon/eyeFooter"

class EyeView extends React.Component{
	back() {
	    this.props.router.goBack()
	    console.log(this)
	}
	render(){
		return(
			<div className="eyeView">
				<EyeHeader backHandler={this.back.bind(this)}></EyeHeader>
				<EyeContent></EyeContent>
				<EyeFooter></EyeFooter>
			</div>
			)
	}
}
export default EyeView