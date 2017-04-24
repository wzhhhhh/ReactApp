import React from "react"
import Header from "./Header"

class Classify extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      classList: []
	    }
	}


    render(){
        let lis = this.state.classList.map((value)=>{return (
                <li>
                    <img src={value.image} alt=""/>
                    <h1>{value.name}</h1>
                </li>
            )})
        return(
            <div className="Classify">
                <div className="header">分类</div>
               <ul>
                	{lis}
                </ul> 
            </div>
        )
    }

    componentDidMount(){
    	fetch('/api/homeData')
    		.then((response)=>response.json())
    		.then((res)=>{
                console.log(res.list.navigator)
    			this.setState({
    				classList:res.list.navigator
    			})
    		})
    }
}

export default Classify
