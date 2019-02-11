import React, { Component } from 'react'

import './section.scss'

class HomeSection extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName} homeSectionContainer`} id={sectionName}>
        <h1>{sectionName}</h1>
      </div>
    )
  }
}

export default HomeSection
