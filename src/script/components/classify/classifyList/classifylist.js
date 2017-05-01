import React from "react"
import List from "../../../../component_dev/list/src"
import Loading, {loading} from '../../../../component_dev/loading/src'



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
	Zuji(data){
		this.props.Zuji(data)
		localStorage.setItem("info",data)

		// console.log(a);
		// localStorage.setItem("zuji",arr)
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
		// // console.log(this.props.Zuji(data))
		// let arr = [];
		// var a = localStorage.getItem("info");
		// arr = arr.concat(a)
		// localStorage.setItem("arr",arr)
		// var array = localStorage.getItem("arr");
		//
		// console.log(array);
		return(
			<div className="clist">
				<List
					ref="list"
					dataSource={this.state.List}
				    renderItem={(value,i)=>{
				    	if (!this.isEmptyObject(value)) {
					        return (
				                <li onClick={this.gotoDetail.bind(this,value.goods_id)}>
									<div onClick={this.Zuji.bind(this,[value.list_img,value.goods_name,value.miaohui_price])}>
										<img src={value.list_img} alt="" />
										<p>{value.goods_name}</p>
										<b>{`￥${value.miaohui_price}`}</b>
									</div>
								</li>
				            )
					    }
				    }}
					usePullRefresh={true}
					onRefresh={() => {
				        fetch(`/api/productList?page=${this.state.page++}&size=10&catID=${this.props.getID}&tag=`)
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
				        fetch(`/api/productList?page=${this.state.page++}&size=10&catID=${this.props.getID}&tag=`)
			    		.then((response)=>response.json())
			    		.then((res)=>{
		    				if (res.list.goods.length > 0) {
		    					this.setState({
			                      List:this.state.List.concat(res.list.goods)
			                    })
		                    	this.refs.list.stopLoading(true);
		                   	}else{
		                    this.refs.list.resetLoadStatus(false);
		                   	}
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
