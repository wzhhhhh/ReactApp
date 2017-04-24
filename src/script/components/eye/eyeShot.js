import React from "react"

class EyeShot extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      eyeShot: []
	    }
	}
	render(){
		let list = this.state.eyeShot.map((value)=>{return (
               <div className="viewList">
					<a href="#qqq">
						<img src={value.image_url} alt=""/>
					</a>
					<h2>{value.subtitle}</h2>
				</div>
            )})
		return(
			<div className="eyeshot">
				<div className="eyeheader">
					<span>视野</span><i className="yo-ico listmore">&#xf07e;</i>
				</div>
				<div className="viewNav">
					<div className="nav">
						<a className="active" href="">全部</a>
						<a href="">涨姿势</a>
						<a href="">户外</a>
						<a href="">家居</a>
						<a href="">时尚</a>	
					</div>
					<i className="yo-ico navmore">&#xf033;</i>
				</div>
				<div className="viewListBox">
					{list}
				</div>
			</div>
		)
	}
	componentDidMount(){
    	fetch('/api/getSpecialTopicList')
    		.then((response)=>response.json())
    		.then((res)=>{
    			this.setState({
    				eyeShot:res.specialTopicList
    			})
    		})
    }
}

export default EyeShot