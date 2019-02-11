import React, { Component } from 'react'

import './home.scss'
import LetterFromTheDirector from '../../components/letter-from-the-director/letterFromTheDirector'

class Home extends Component {
  render() {
    return (
      <div className="homeContainer" id="home">
        <h1>Home</h1>
        <LetterFromTheDirector />
      </div>
    )
  }
}

export default Home
