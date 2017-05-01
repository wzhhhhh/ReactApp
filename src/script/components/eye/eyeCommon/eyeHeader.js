import React from "react"
import Popup from "../../../../component_dev/popup/src"
import {Link} from "react-router"


class EyeHeader extends React.Component{
	constructor(props){
		super(props)
		this.state={
			view:[],
			shareUp:false
		}
	}
	back() {
	    this.props.backHandler()
	}
	share =()=>{
		this.setState({
			shareUp:!this.state.shareUp
		})
	}
	render(){
		return(
			<div className="eh">
				<span onClick={this.back.bind(this)} className="back"></span>
            	<h1>{this.state.view.title}</h1>
            	<span className="share" onClick={this.share}></span>
				<Popup
					show={this.state.shareUp}
					extraClass="sharebox"
				>
					<div className="shareBlock">
						<h1>发现创意，乐享生活</h1>
						<div className="shareIcon">
							<div>
								<Link to="/sharepage">
									<img src="http://f1.webshare.mob.com/code/res/icon/sns_icon_1@2x_b.png" />
									<p>新浪微博</p>
								</Link>
							</div>
							<div>
								<Link to="/sharepage">
									<img src="http://f1.webshare.mob.com/code/res/icon/sns_icon_24@2x_b.png" />
									<p>QQ好友</p>
								</Link>
							</div>
							<div>
								<Link to="/sharepage">
									<img src="http://f1.webshare.mob.com/code/res/icon/sns_icon_6@2x_b.png" />
									<p>QQ空间</p>
								</Link>
							</div>
							<div>
								<Link to="/sharepage">
									<img src="http://f1.webshare.mob.com/code/res/icon/sns_icon_5@2x_b.png" />
									<p>豆瓣</p>
								</Link>
							</div>
						</div>
						<hr/>
						<div className="funIcon">
							<div>
								<Link>
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493552028677&di=e0be7c4018ddea1b43a602814baecded&imgtype=0&src=http%3A%2F%2Fm.qqzhi.com%2Fupload%2Fimg_5_1249290799D1812574114_23.jpg" />
									<p>复制链接</p>
								</Link>
							</div>
							<div>
								<Link>
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493551815222&di=04cacb8fc1fcd3bf962f73b6e608e72c&imgtype=0&src=http%3A%2F%2Fcms.iyuba.com%2Fcms%2Fnews%2Fimage%2F37683.jpg" />
									<p>邮件</p>
								</Link>
							</div>
							<div>
								<Link>
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493551917749&di=6563e817c476afe6d5e83280cffcba6a&imgtype=0&src=http%3A%2F%2Fm4.app111.com%2FAppImg%2F160x160%2F2016%2F03%2F17%2F10914963981458199497809.jpg" />
									<p>短信</p>
								</Link>
							</div>
							<div>
								<Link to="/home">
									<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493551976508&di=dab5aa4a4670092f233d5f531313bfdc&imgtype=0&src=http%3A%2F%2Fsrc.onlinedown.net%2Fsupply%2Fsup_logo%2Flogo-1122%2F102387_g.jpg" />
									<p>返回首页</p>
								</Link>
							</div>
						</div>
						<p className="esc" onClick={this.share}>取消</p>
					</div>
				</Popup>
			</div>
			)
	}
	componentDidMount(){
		let id = this.props.goEyeView
		fetch(`/api/article/${id}`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					view:res.article
				})

			})
	}
}
export default EyeHeader
