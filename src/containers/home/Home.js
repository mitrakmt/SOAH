import React, { Component } from 'react'

import Press from 'components/press/press'

import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        <h1>Home</h1>
        <Press />
      </div>
    )
  }
}

export default Home
