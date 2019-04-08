import React, { Component } from 'react'

import './section.scss'

class YourVoice extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div
        className={`${sectionName} yourVoiceContainer`}
        id={sectionName}
      >
        <Component {...this.props} />
      </div>
    )
  }
}

export default YourVoice
