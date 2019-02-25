import React, { Component } from 'react'

import './section.scss'

class ScreeningsSection extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div
        className={`${sectionName} screeningsSectionContainer`}
        id={sectionName}
      >
        <Component {...this.props} />
      </div>
    )
  }
}

export default ScreeningsSection
