import React, { Component } from 'react'

import './section.scss'

class PressSection extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div className={`${sectionName} pressSectionContainer`} id={sectionName}>
        <Component {...this.props} />
      </div>
    )
  }
}

export default PressSection
