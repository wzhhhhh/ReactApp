import React from "react"
import ClassHeader from "./classifyList/classHeader"
import Classifytopic from "./classifyList/classifytopic"
import Classifylist from "./classifyList/classifylist"

class ClassList extends React.Component{
	gotoDetail(id){
		this.props.router.push(`/detail/${id}`)
	}
	Zuji(data){
		// console.log(this)
	}
	getID(id){
		this.props.params.id
	}
	back() {
	    this.props.router.goBack()
	}
	render(){
		// console.log(this);
		return(
			<div className="classList">
				<ClassHeader backHandler={this.back.bind(this)} getID={this.props.params.id}/>
				<Classifytopic />
				<Classifylist gotoDetail={this.gotoDetail.bind(this)} getID={this.props.params.id} Zuji={this.Zuji}/>
			</div>

			)
	}
}

export default ClassList
