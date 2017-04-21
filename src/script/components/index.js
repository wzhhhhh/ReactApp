import React from 'react'

import Header from './common/Header.js'
import Footer from './common/Footer.js'

export default class Index extends React.Component {
  render(){
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}
