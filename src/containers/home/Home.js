import React, { Component, Fragment } from 'react'

import Navigation from 'components/navigation/navigation'

import { homeSections } from '../../data'

import './section.scss'

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
        <Navigation />
        <div className="homeContainer" id="home">
          {homeSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default Home
