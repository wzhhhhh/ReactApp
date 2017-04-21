require('../style/app.scss');
import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRedirect, hashHistory} from 'react-router'
import Index from './components/index.js'
import Home from './components/home/Home.js'
import Classify from './components/classify/Classify.js'
ReactDOM.render((
  <Router history={hashHistory}>
  <Route path="/" component={Index}>
    <IndexRedirect to="/home" />
    <Route path="home" component={Home} />
    <Route path="classify" component={Classify} />
  </Route>
  </Router>
),document.getElementById('root'))
