import React, { Component, Fragment } from 'react'

import { homeSections } from '../../data'
import './section.scss'

class Home extends Component {
  render() {
    return (
      <Fragment>
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
