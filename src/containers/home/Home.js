import React, { Component } from 'react'

import Navigation from 'components/navigation/navigation'
import LookInside from 'components/look-inside/lookInside'

import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        <h1>Home</h1>
        <Navigation />
        <LookInside />
      </div>
    )
  }
}

export default Home
