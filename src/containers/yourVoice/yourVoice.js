import React, { Component, Fragment } from 'react'
import { useYourVoiceSections } from '../../data'

import './section.scss'

class YourVoiceContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <div className="yourVoiceContainer" id="yourVoice">
          {useYourVoiceSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default YourVoiceContainer
