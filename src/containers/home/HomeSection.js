import React, { Component } from 'react'

import './section.scss'

class HomeSection extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div className={`${sectionName} homeSectionContainer`} id={sectionName}>
        <Component {...this.props} />
      </div>
    )
  }
}

export default HomeSection
