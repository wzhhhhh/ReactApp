import React from 'react'

import Header from './header'
import Footer from './footer'

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header data="a1" />
        <Header />
        <Header />
        <Header />
        <section>content</section>
        <Footer />
      </div>
    )
  }
}
