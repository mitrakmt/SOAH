import React, { Component, Fragment } from 'react'

import Navigation from 'components/navigation/navigation'
import { pressSections } from '../../data'
import './section.scss'

class Press extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <div className="pressContainer" id="press">
          <Navigation />
          {pressSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default Press
