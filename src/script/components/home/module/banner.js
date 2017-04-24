import React,{Component} from 'react';

// import Carousel from 'yo3/component/carousel';
import Carousel from '../../../../component_dev/carousel/src';


export default class Banner extends Component {

	getBanner(pic){
	return pic.map((value,index)=>{
			return(
				<li className="item"><img className="img" src={value.pic}/></li>  
			)
		}) 
	}

  	render(){
   		return (
			<Carousel extraClass ="home-banner">
				{this.getBanner(this.props.banner)}
			</Carousel>
    	)
	}
}