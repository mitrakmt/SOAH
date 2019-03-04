import React, { Component, Fragment } from 'react'

import Navigation from 'components/navigation/navigation'
import { useYourVoiceSections } from '../../data'
import './section.scss'

class UseYourVoice extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <Navigation />
        <div className="useYourVoiceContainer" id="useYourVoice">
          {useYourVoiceSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default UseYourVoice
