import React from "react"

class EyeShot extends React.Component{
	// constructor(props) {
	//     super(props)
	//     this.state = {
	//       eyeShot: []
	//     }
	// }
	render(){
		// let lis = this.state.classList.map((value)=>{return (
  //               <li>
  //                   <img src={value.image} alt=""/>
  //                   <h1>{value.name}</h1>
  //               </li>
  //           )})
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
			</div>
		)
	}
	// componentDidMount(){
 //    	fetch('/api/getSpecialTopicList')
 //    		.then((response)=>response.json())
 //    		.then((res)=>{
 //                console.log(res.list.navigator)
 //    			this.setState({
 //    				eyeShot:res.specialTopicList
 //    			})
 //    		})
 //    }
}

export default EyeShot