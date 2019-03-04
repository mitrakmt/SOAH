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
        <div className="homeContainer" id="home">
          <Navigation />
          {homeSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default Home
