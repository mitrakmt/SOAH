import React, { Component, Fragment } from 'react'

import Navigation from 'components/navigation/navigation'
import { learnMoreSections } from '../../data'
import './section.scss'

class LearnMore extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <div className="learnMoreContainer" id="learnMore">
          <Navigation />
          {learnMoreSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default LearnMore
