import React, { Component, Fragment } from 'react'

import Navigation from 'components/navigation/navigation'

import { screeningsSections } from '../../data'
import './section.scss'

class Screenings extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
        <div className="screeningsContainer" id="screenings">
          <Navigation />
          {screeningsSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default Screenings
