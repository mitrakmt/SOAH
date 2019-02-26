import React, { Component } from 'react'

import './section.scss'

class LearnMoreSection extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div
        className={`${sectionName} learnMoreSectionContainer`}
        id={sectionName}
      >
        <Component {...this.props} />
      </div>
    )
  }
}

export default LearnMoreSection
