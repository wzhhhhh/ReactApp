import React from "react"
import Modal from "../../../../component_dev/modal/src"
import {Link} from "react-router"

class classHeader extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      List: [] ,
		  showSpan:false
	    }
	}

	handleHide=()=>{
		this.setState({
			showSpan:!this.state.showSpan
		})
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
            	<span className="yo-ico list" onClick={this.handleHide}>&#xf07e;</span>
				<Modal
					show={this.state.showSpan}
					align="top"
					contentOffset={[170,0]}
					maskOffset={[47, 0]}
					animation= "fade"
					>
					<div className="hidetitle">
						<p>
							<i className="yo-ico">&#xf067;</i>
							<Link to="/zuji">足迹</Link>
						</p>
						<p>
							<i className="yo-ico">&#xf04a;</i>
							<Link to="/search">搜索</Link>
						</p>
					</div>
				</Modal>
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
