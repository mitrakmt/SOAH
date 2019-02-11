import React, { Component, Fragment } from 'react'
import Home from '../home'
import HomeSection from '../home/HomeSection'
import { homeSections } from '../../data'
import './app.scss'
import '../../styles/fonts.scss'

class App extends Component {
  render() {
    return (
      <Fragment>
        {homeSections.map(({ Container, props }) => <HomeSection key={props.sectionName} {...props} />)}
      </Fragment>
    )
  }
}

export default App
