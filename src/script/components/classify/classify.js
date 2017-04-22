import React from "react"

class Classify extends React.Component{
	// constructor(props) {
	//     super(props)
	//     this.state = {
	//       navigator: []
	//     }
	// }

	// getClassify(list){
	// 	return list.map((value,index)=>{
	// 		return(
	// 			<li>
 //            		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
 //            		<h1>全部商品</h1>
 //            	</li>
	// 		)
	// 	})
	// }

    render(){
        return(
            <div className="Classify">
               <ul>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                	<li>
                		<img src="http://image.app.magicwe.com/images/201609/1473674096960910726.png" alt=""/>
                		<h1>全部商品</h1>
                	</li>
                </ul> 
            </div>
        )
    }

    // componentDidMount(){
    // 	 console.log(11)
    // 	// let type = this.props.list.type
    // 	fetch(`/api/homeData`)
    // 		.then((response)=>response.json())
    // 		.then((res)=>{
    // 			this.setState({
    // 				url:res.list.navigator.image,
    // 				name:res.list.navigator.name
    // 			})
    // 		})
	   //  console.log(this.State.url)
    // }
}

export default Classify
