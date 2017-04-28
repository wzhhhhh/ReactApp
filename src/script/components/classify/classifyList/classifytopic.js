import React from "react"
import Popup from '../../../../component_dev/popup/src';



class Classifytopic extends React.Component{
	constructor(props){
		super(props)
		this.state={
			show:false
		}
	}
	render(){
		return(
			<div className="prilist">
				<div className="topic" onClick={()=>{this.setState({show:true})}}>
					<p>价格筛选</p><i className="yo-ico">&#xf033;</i>
				</div>
				<Popup
					show={this.state.show}
					direction="down"
                    maskOffset={[93, 0]}
				>
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
				</Popup>

			</div>
			)
		}
	}

export default Classifytopic
