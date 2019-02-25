import React, { Component } from 'react'

import './section.scss'

class ShareTheMessageSection extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div
        className={`${sectionName} shareTheMessageSectionContainer`}
        id={sectionName}
      >
        <Component {...this.props} />
      </div>
    )
  }
}

export default ShareTheMessageSection
