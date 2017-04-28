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
		{//为了获取头部的名称
			var arr = this.state.List.length
			for(var i = 0 ;i < arr;i++){
				var id = this.state.List[i].cat_id
				var catID = this.props.getID
				if(catID == id){
					// console.log(name)
					var name = this.state.List[i].cat_name
				}
			}
		}
		
		
		return(
            <div className="classheader">
            	<span onClick={this.back.bind(this)} className="back"></span>
            	<h1>{name}</h1>
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