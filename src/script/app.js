require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import Index from './components/index.js'
import Home from './components/home/Home.js'
import Classify from './components/classify/Classify.js'
import Mine from './components/mine/Mine.js'
ReactDOM.render((
  <Router history={hashHistory}>
  <Route path="/" component={Index}>
    <IndexRedirect to="/home" />
    <Route path="home" component={Home} />
    <Route path="classify" component={Classify} />
  </Route>
  <Route path="/mine/:type" component={Mine}></Route>
  </Router>
),document.getElementById('root'))
