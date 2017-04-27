import React from "react"
import Scroller from "../../../../component_dev/scroller/src"
class EyeContent extends React.Component{
	constructor(props){
		super(props)
		this.state={
			view:[]
		}
	}
	render(){  
		// var page=this.state.view;
  //   	console.log(page);
		return(
			<div className="viewport">
				{/*<Scroller>*/}
					<div>
						<div>
							<img src={this.state.view.image_url} alt=""/>
						</div>
						<div>
							<h2>{this.state.view.title}</h2>
						</div>
					</div>
					<div>
						<p>前段时间张绍刚向大众提出了一个问题：&ldquo;如果给你一张移民火星的单程票, 你去吗？&rdquo;当时观众席下哗啦啦一大片人都举手表示想去。很多人就纳闷了，真过去这么一大群人在火星上吃什么？</p>
						<p><img src="http://image.app.magicwe.com/images/upload/Image/1(18).jpeg" alt="" /></p>
						<p>嘿嘿~还别说，火星上真有东西可以给大家伙儿吃。</p>
						<p>据了解，美国一位女太空人Peggy Whitson打破了在太空最长时间的记录，目前已经待了超过534天。而在这几百天里，她所吃的食物都来自于一个充气温室。</p>
						<p><img src="http://image.app.magicwe.com/images/upload/Image/2(299).jpg" alt="" /></p>
						<p>这个充气温室是专门为在太空（月球或火星）中生活的宇航员而设计，其最大作用就是持续为他们提供蔬菜水果等食物。</p>
						<p><img src="http://image.app.magicwe.com/images/upload/Image/3(304).jpg" alt="" /></p>
						<p>美国航天局的科学家们选择使用一个大型铝质框架、覆盖塑料的圆柱装置种植农作物，再通过宇航员自身呼出的二氧化氮引入温室之中，然后被植物用于光合作用和产生氧气，从而达到再生效果。</p>
						<p><img src="http://image.app.magicwe.com/images/upload/Image/4(280).jpg" alt="" /></p>
						<p>如今这群科学家又去找到亚利桑那大学的农业部门，想要将这个充气温室做的更好，比如可以更好的进行水回收或废物回收。</p>
						<p><img src="http://image.app.magicwe.com/images/upload/Image/5(263).jpg" alt="" /></p>
						<p>听说他们还在里面安装了很多传感器，以便于监控环境条件和各种信息。同时还有一个控制器，编程控制和改变植物生长的日常变化，酷到炸有没有！</p>
						<p><img src="http://image.app.magicwe.com/images/upload/Image/6(234).jpg" alt="" /></p>
						<p>讲真，谁能想到几年前还遥不可及的火星，如今已经变得越来越接近我们了呢。</p>
						<hr />
						<p><img src="http://image.app.magicwe.com/images/upload/Image/妙语连珠底部图3(1)(2).jpg" alt="" /></p>"
					</div>
				{/*</Scroller>*/}
			</div>
			
			
			)
	}
	componentDidMount(){
		fetch(`/api/article/547`)
			.then((response)=>response.json())
			.then((res)=>{
				this.setState({
					view:res.article
				})
			})
	}
}
export default EyeContent