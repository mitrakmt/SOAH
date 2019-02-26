import React, { Component } from 'react'

import './section.scss'

class HomeSection extends Component {
  render() {
    const { Component, sectionName, additionalClasses } = this.props
    return (
      <div className={`homeSectionContainer ${additionalClasses}`} id={sectionName}>
        <Component {...this.props} />
      </div>
    )
  }
}

export default HomeSection
