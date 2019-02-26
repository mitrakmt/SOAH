import React, { Component } from 'react'

import './section.scss'

class UseYourVoiceSection extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div
        className={`${sectionName} useYourVoiceSectionContainer`}
        id={sectionName}
      >
        <Component {...this.props} />
      </div>
    )
  }
}

export default UseYourVoiceSection
