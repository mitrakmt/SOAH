import React, { Component } from 'react'

import Screenings from 'components/screenings/screenings'

import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        <h1>Home</h1>
        <Screenings />
      </div>
    )
  }
}

export default Home
