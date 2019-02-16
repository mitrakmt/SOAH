import React, { Component, Fragment } from 'react'
import Home from '../home'
import { homeSections } from '../../data'
import './app.scss'
import '../../styles/fonts.scss'

class App extends Component {
  render() {
    return (
      <Fragment>
        <Home />
        {homeSections.map(({ Component, props }) => (
          <Component {...props} />
        ))}
      </Fragment>
    )
  }
}

export default App
