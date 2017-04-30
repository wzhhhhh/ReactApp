import React from "react"
import Scroller from "../../../component_dev/scroller/src"
import List from "../../../component_dev/list/src"
import Popup from "../../../component_dev/popup/src"
import {Link} from "react-router"
import Modal from "../../../component_dev/modal/src"


class EyeShot extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      eyeShot: [<div/>],
	      page:1,
		  show:false,
		  showSpan:false
	    }
	}

	goEyeView(article_id){
        this.props.router.push(`/eyeView/${article_id}`)
    }

	handleHide =()=>{
	    this.setState({
		   showSpan:!this.state.showSpan
	   })
    }

	toggle = ()=>{
		this.setState({
			show:!this.state.show
		})
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
					<span>视野</span>
					<i className="yo-ico listmore" onClick={this.handleHide}>&#xf07e;</i>
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
				<div className="viewNav">
					<div className="nav">
						<Scroller
							extraClass="scroll-x"
							scrollX={true}
    						scrollY={false}
						>
							<Link  to="/eyeShot" activeClassName="active">全部</Link>
							<Link activeClassName="active">涨姿势</Link>
							<Link activeClassName="active">户外</Link>
							<Link activeClassName="active">家居</Link>
							<Link activeClassName="active">时尚</Link>
							<Link activeClassName="active">礼物</Link>
							<Link activeClassName="active">数码</Link>
							<Link activeClassName="active">创意生活</Link>
							<Link activeClassName="active">设计感</Link>
							<Link activeClassName="active">科技范</Link>
							<Link activeClassName="active">母婴</Link>
							<Link activeClassName="active">宠物</Link>
							<Link activeClassName="active">测评</Link>
							<Link activeClassName="active">欧洲杯</Link>
						</Scroller>
						<i className="yo-ico navmore" onClick={this.toggle}>&#xf033;</i>
					</div>
					<Popup
						show={this.state.show}
						direction="down"
						maskOffset={[47, 0]}
					>
						<div className="zw">
							<div className="navActive">
								<div className="nATitle">
									<span>切换频道</span>
									<i className="yo-ico nAIco" onClick={this.toggle}>&#xf033;</i>
								</div>
								<div className="nAList">
									<ul>
										<li><Link activeClassName="active" className="active">全部</Link></li>
										<li><Link activeClassName="active">涨姿势</Link></li>
										<li><Link activeClassName="active">户外</Link></li>
										<li><Link activeClassName="active">家居</Link></li>
										<li><Link activeClassName="active">时尚</Link></li>
										<li><Link activeClassName="active">礼物</Link></li>
										<li><Link activeClassName="active">数码</Link></li>
										<li><Link activeClassName="active">创意生活</Link></li>
										<li><Link activeClassName="active">设计感</Link></li>
										<li><Link activeClassName="active">科技范</Link></li>
										<li><Link activeClassName="active">母婴</Link></li>
										<li><Link activeClassName="active">宠物</Link></li>
										<li><Link activeClassName="active">测评</Link></li>
										<li><Link activeClassName="active">欧洲杯</Link></li>
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
