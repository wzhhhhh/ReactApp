import React from "react"

class Classifytopic extends React.Component{
	render(){
		return(
			<div className="prilist">
				<div className="topic">
					<p>价格筛选</p><i className="yo-ico">&#xf033;</i>
				</div>
				
				<ul className="pricelist">
					<li>全部</li>
					<li>0-300</li>
					<li>301-1000</li>
					<li>101-2000</li>
					<li>2001-4000</li>
					<li>4000元以上</li>
					<li>
						自定义价格 
						<input type="text"/>
						-<input type="text"/>
						<input type="button" value="确定"/>
					</li>
				</ul>
			</div>
			)
	}
}
export default Classifytopic
