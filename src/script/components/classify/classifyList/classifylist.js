import React from "react"

class Classifylist extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      List: []
	    }
	}

	gotoDetail(goods_id){
		this.props.gotoDetail(goods_id)
	}
	render(){
		let List = this.state.List.map((value)=>{return (
                <li onClick={this.gotoDetail.bind(this,value.goods_id)}>
					<img src={value.list_img} alt=""/>
					<p>{value.goods_name}</p>
					<b>{`￥${value.miaohui_price}`}</b>
				</li>
            )})
		return(
			<div className="clist">
				{List}
			</div>
			)
	}

	 componentDidMount(){
    	fetch(`/api/productList?catID=${this.props.getID}`)

    		.then((response)=>response.json())
    		.then((res)=>{
    			this.setState({
    				List:res.list.goods
    			})
    		})
    }
}

export default Classifylist