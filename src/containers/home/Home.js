import React, { Component } from 'react'

import Navigation from 'components/navigation/navigation'

import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        <h1>Home</h1>
        <Navigation />
      </div>
    )
  }
}

export default Home
