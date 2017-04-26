import React from "react"

import Loading, {loading} from '../../../../component_dev/loading/src'
import List from '../../../../component_dev/list/src'


class Classifylist extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      List: [<div/>],
      	  page: 1
	    }
	}

	gotoDetail(goods_id){
		this.props.gotoDetail(goods_id)
	}

	componentWillMount() {
	    loading.show()
	}

	isEmptyObject(e) {
	    var t;
	    for (t in e)
	        return !1;
	    return !0
	}

	render(){
		return(
			<div className="clist">
				<List
					ref="list"
					dataSource={this.state.List}
				    renderItem={(value,i)=>{
				        return (
			                <li onClick={this.gotoDetail.bind(this,value.goods_id)}>
								<img src={value.list_img} alt=""/>
								<p>{value.goods_name}</p>
								<b>{`￥${value.miaohui_price}`}</b>
							</li>
			            )
				    }}
				
					usePullRefresh={true}
					onRefresh={() => {
				        fetch(`/api/getRecommendTipsGoodsList?page=${this.state.page++}&size=10&catID=${this.props.getID}&tag=`)
			    		.then((response)=>response.json())
			    		.then((res)=>{
			    			this.setState({
			    				List:res.list.goods
			    			})
			    		})
				        this.refs.list.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
				    }}

				    useLoadMore={true}
				    onLoad={() => {
				        fetch(`/api/getRecommendTipsGoodsList?page=${this.state.page++}&size=10&catID=${this.props.getID}&tag=`)
			    		.then((response)=>response.json())
			    		.then((res)=>{
			    			this.setState({
			    				List:this.state.List.concat(res.list.goods)
			    			})
			    		})
				        this.refs.list.stopLoading(true); // 这个调用也可以放在异步操作的回调里之后
				    }}
				></List>
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
    			loading.hide()
	    		// console.log(this.state.List)
    				
    		})
    }
}

export default Classifylist