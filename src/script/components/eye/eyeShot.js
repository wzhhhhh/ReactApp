import React from "react"
import Scroller from "../../../component_dev/scroller/src"
import List from "../../../component_dev/list/src"
import Popup from "../../../component_dev/popup/src"

class EyeShot extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      eyeShot: [<div/>],
	      page:1,
		  show:false,
		  hide:true
	    }
	}

	goEyeView(article_id){
        this.props.router.push(`/eyeView/${article_id}`)
    }

	render(){
		let list = this.state.eyeShot.map((value)=>{return (
               <div onClick={this.goEyeView.bind(this,value.article_id)} className="viewList">
					<div>
						<img src={value.image_url} alt=""/>
					</div>
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
						<Scroller
							extraClass="scroll-x"
							scrollX={true}
    						scrollY={false}
						>
							<b className="active">全部</b>
							<b>涨姿势</b>
							<b>户外</b>
							<b>家居</b>
							<b>时尚</b>
							<b>礼物</b>
							<b>数码</b>
							<b>创意生活</b>
							<b>设计感</b>
							<b>科技范</b>
							<b>母婴</b>
							<b>宠物</b>
							<b>测评</b>
							<b>欧洲杯</b>
						</Scroller>
						<i className="yo-ico navmore" onClick={()=>{this.setState({show:true})}}>&#xf033;</i>
					</div>
					<Popup
						show={this.state.show}
						hide={this.state.hide}
						direction="down"
						maskOffset={[47, 0]}
					>
						<div className="zw">
							<div className="navActive">
								<div className="nATitle">
									<span>切换频道</span>
									<i className="yo-ico nAIco" onClick={()=>{this.setState({hide:false})}}>&#xf033;</i>
								</div>
								<div className="nAList">
									<ul>
										<li><a className="active" href="#qqq">全部</a></li>
										<li><a href="#qqq">涨姿势</a></li>
										<li><a href="#qqq">户外</a></li>
										<li><a href="#qqq">家居</a></li>
										<li><a href="#qqq">时尚</a></li>
										<li><a href="#qqq">礼物</a></li>
										<li><a href="#qqq">数码</a></li>
										<li><a href="#qqq">创意生活</a></li>
										<li><a href="#qqq">设计感</a></li>
										<li><a href="#qqq">科技范</a></li>
										<li><a href="#qqq">母婴</a></li>
										<li><a href="#qqq">宠物</a></li>
										<li><a href="#qqq">测评</a></li>
										<li><a href="#qqq">欧洲杯</a></li>
									</ul>
								</div>
							</div>
						</div>
					</Popup>
				</div>
				<div className="viewListBox">
					<List
						ref="list"
						extraClass="list-y"
						dataSource={this.state.eyeShot}
					    renderItem={(item,i)=>{
					        return (
					            <div onClick={this.goEyeView.bind(this,item.article_id)} className="viewList">
									<div>

										<img src={item.image_url} alt=""/>
									</div>
									<h2>{item.subtitle}</h2>
								</div>
					        );
					    }}
						usePullRefresh={true}
					    onRefresh={() => {
					    	fetch(`/api/getSpecialTopicList?catID=5&page=1&size=10`)
				    		.then((response)=>response.json())
				    		.then((res)=>{
				    			this.setState({
				    				eyeShot:res.specialTopicList
				    			})
				    		})
					        this.refs.list.stopRefreshing(true); // 这个调用也可以放在异步操作的回调里之后
					    }}
					    useLoadMore={true}
					    onLoad={() => {
						    fetch(`/api/getSpecialTopicList?catID=5&page=${this.state.page++}&size=10`)
				    		.then((response)=>response.json())
				    		.then((res)=>{
				    			this.setState({
				    				eyeShot:this.state.eyeShot.concat(res.specialTopicList)
				    			})
				    		})
					        this.refs.list.stopLoading(true); // 这个调用也可以放在异步操作的回调里之后
					    }}
					>
					</List>
				</div>
			</div>
		)
	}
	componentDidMount(){
    	fetch('/api/getSpecialTopicList?catID=5&page=${this.state.page++}&size=10')
    		.then((response)=>response.json())
    		.then((res)=>{
    			this.setState({
    				eyeShot:res.specialTopicList
    			})
    		})
    }
}

export default EyeShot
