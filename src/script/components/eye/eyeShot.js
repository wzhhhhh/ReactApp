import React from "react"

class EyeShot extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      eyeShot: []
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
						<a className="active" href="">全部</a>
						<a href="">涨姿势</a>
						<a href="">户外</a>
						<a href="">家居</a>
						<a href="">时尚</a>
						<a href="">家居</a>
						<a href="">时尚</a>
						<a href="">家居</a>
						<a href="">时尚</a>
						<i className="yo-ico navmore">&#xf033;</i>
					</div>
					<div className="zw">
						<div className="navActive">
							<div className="nATitle">
								<span>切换频道</span>
								<i className="yo-ico nAIco">&#xf033;</i>
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
				</div>
				<div className="viewListBox">
					{list}
				</div>
			</div>
		)
	}
	componentDidMount(){
    	fetch('/api/getSpecialTopicList')
    		.then((response)=>response.json())
    		.then((res)=>{
    			this.setState({
    				eyeShot:res.specialTopicList
    			})
    		})
    }
}

export default EyeShot