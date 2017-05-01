import React from 'react'

export default class Dizhi extends React.Component {

	constructor(props){
		super(props)
		this.state = {
			position:{},
			province:[],
			city:[],
			district:[]
		}
	}

	back() {
    	this.props.router.goBack();
 	}

	render (){
		return(
			<div className="ding">
				<ul className="dingheader">
					<li className="otu" onClick={this.back.bind(this)}>
						<img src="http://m.miaohui.com/static/src/img/header_back.png" />
					</li>
					<li className="oding">收货地址</li>
				</ul>

				<div>我的位置：{this.state.province+' '+this.state.city+' '+this.state.district}</div>
			</div>

			
			
			)
	}

	componentDidMount(){
		let getLocation = ()=>{
			if(navigator.geolocation){
				navigator.geolocation.getCurrentPosition(showPosition,showErrors)
			}else{
				this.setState({
					position:'浏览器不支持地理定位'
				})
			}
		}
		let showPosition =(position)=>{
			
			// let obj = {}
			// obj[latitude] = position.coords.latitude;
			// obj[longitude] = position.coords.longitude;
			// this.setState({
			// 	position: obj
			// })

			this.setState({
				position:{
					latitude:position.coords.latitude,
					longitude:position.coords.longitude  
				}
			})

		}
		let showErrors = (error)=>{
			switch (error.code) {
				case error.PERMISSION_DENIED:
				alert('定位失败，用户拒绝请求地理位置')
				break;
				case error.POSITION_UNAVAILABLE:
				alert('定时失败 用户信息不可用')
				break;
				case error.TIMEOUT:
				alert('定位失败 连接超时')
				break;
				case error.UNKNOWN_ERROR:
				alert('定位失败 未知错误')
				break;

			}
		}
		
		getLocation();
		
		
	}

	componentDidUpdate(){
		fetch(`/weizhi/geocoder/v2/?output=json&ak=dAOEfi1nxSazMtKskodMox4e&location=${this.state.position.latitude},${this.state.position.longitude}`)
	 .then(response=>response.json())
	 .then(res=>{
	 	this.setState({
    				province:res.result.addressComponent.province,
    				city:res.result.addressComponent.city,
    				district:res.result.addressComponent.district
    			})
	 })
	 .catch(e=>{
	 	console.log(e);
	 })
	}

}