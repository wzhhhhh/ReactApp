import React from "react"
import Header from "./Header"
import {Link} from 'react-router'


import Scroller from '../../../component_dev/scroller/src'


class Classify extends React.Component{
	constructor(props) {
	    super(props)
	    this.state = {
	      classList: []
	    }
	}

    gotoList(cat_id){
        this.props.router.push(`/classList/${cat_id}`)
    }
    render(){
        // console.log(cat_id)
        let lis = this.state.classList.map((value)=>{return (        
            <li onClick={this.gotoList.bind(this,value.cat_id)}>
                <img src={value.image} alt=""/>
                <h1>{value.cat_name}</h1>
            </li>              
        )})
        return(
            <div className="classbox">
                <Header />
                <Scroller ref="scroller" >
                    <div className="Classify">               
                        <ul>
                            {lis}
                            <li>
                                <img src="http://image.app.magicwe.com/images/201701/1483718889395978610.png" alt=""/>
                                <h1>本期推荐</h1>
                            </li>
                             <li>
                                <img src="http://image.app.magicwe.com/images/201609/1473674187842567614.png" alt=""/>
                                <h1>3D展示</h1>
                            </li>
                             <li>
                                <img src="http://image.app.magicwe.com/images/201609/1473674198371194517.png" alt=""/>
                                <h1>全景展示</h1>
                            </li>
                        </ul> 
                    </div>
                </Scroller>
            </div>
            
        )
    }

    componentDidMount(){
    	fetch('/api/homeData')
    		.then((response)=>response.json())
    		.then((res)=>{
    			this.setState({
    				classList:res.list.category
    			})
    		})
    }
}

export default Classify
