import React from "react"

class classHeader extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      List: [] 
	    }
	}

	back() {
	    this.props.backHandler()
	}

	render(){
		
		return(
            <div className="classheader">
            	<span onClick={this.back.bind(this)} className="back"></span>
            	<h1>{this.state.List[this.props.getID] && this.state.List[this.props.getID].cat_name}</h1>
            	<span className="yo-ico list">&#xf07e;</span>
            </div>
		)
	}

	componentDidMount(){
    	fetch(`/api/homeData`)
    		.then((response)=>response.json())
    		.then((res)=>{
    			this.setState({
    				List:res.list.category
    			})
    		})
    }
}

export default classHeader