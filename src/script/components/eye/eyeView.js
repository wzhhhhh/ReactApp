import React from "react"
import EyeHeader from "./eyeCommon/eyeHeader"
import EyeContent from "./eyeCommon/eyeContent"

class EyeView extends React.Component{
	render(){
		return(
			<div>
				<EyeHeader></EyeHeader>
				<EyeContent></EyeContent>
			</div>
			)
	}
}
export default EyeView