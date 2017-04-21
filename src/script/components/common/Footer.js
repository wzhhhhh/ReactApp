import React from 'react'

import {Link} from "react-router"
export default class Footer extends React.Component {
  render(){
    return (
      <div>
        <Link to='/home'>home</Link>
        <Link to='/classify'>classify</Link>
      </div>
    )
  }
}
