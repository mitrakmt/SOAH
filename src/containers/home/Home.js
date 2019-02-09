import React, { Component } from 'react'

import Header from 'components/header/header'

import './home.scss'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        <h1>Home</h1>
        <Header />
      </div>
    )
  }
}

export default Home
