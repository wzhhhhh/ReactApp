require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'

import Index from './components/Index'
import Home from './components/home/component'
import Banner from './components/home/module/banner'
import Classify from './components/classify/classify'
import ClassList from './components/classify/ClassList'
import EyeShot from './components/eye/eyeShot'
import EyeView from './components/eye/EyeView'
import CartIndex from './components/car/CartIndex'
import Login from './components/mine/login'
import Detail from './components/car/DetailIndex'
import DetailGoodsShow from './components/car/DetailGoodsShow'
import Search from  './components/home/search'
import OnloginHeader from './components/mine/onlogin/onlogin'
import Dingdan from './components/mine/dingdan/dingdan'
import Zuji from './components/mine/zuji/zuji'
import Youhui from './components/mine/youhuiquan/youhuiquan'
import Guanli from './components/mine/guanli/guanli'
import Dizhi from './components/mine/dizhi/dizhi'
import {Router, Route, hashHistory, browserHistory, IndexRedirect} from 'react-router'


import cartStore from './redux/cartStore';
import { Provider } from 'react-redux';
ReactDOM.render((
	<Provider store={cartStore().cartStore} >
		<Router history={hashHistory}>
			<Route path="/" component={Index}>
				<IndexRedirect to="/home" />
				<Route path="home" component={Home}/>
				<Route path="classify" component={Classify}/>
				<Route path="eyeShot" component={EyeShot}/>
				<Route path="cart" component={CartIndex}/>
				<Route path="mine" component={Login}/>
			</Route>
			<Route path="/search" component={Search} />
			<Route path="/detail/:id" component={Detail}/>
			<Route path="/detailGoodsShow/:id" component={DetailGoodsShow}/>
			<Route path="/classList/:id" component={ClassList}/>
			<Route path="/eyeView/:id" component={EyeView}/>
			<Route path="/onlogin" component={OnloginHeader}/>
			<Route path="/dingdan" component={Dingdan}/>
			<Route path="/zuji" component={Zuji}/>
			<Route path="/youhui" component={Youhui}/>
			<Route path="/guanli" component={Guanli}/>
			<Route path="/dizhi" component={Dizhi}/>
		</Router>	
	</Provider>
	),(document.getElementById('root')))
