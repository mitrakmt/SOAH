import React, { Component } from 'react'

import './section.scss'

class FundTheCauseSection extends Component {
  render() {
    const { Component, sectionName } = this.props
    return (
      <div
        className={`${sectionName} fundTheCauseSectionContainer`}
        id={sectionName}
      >
        <Component {...this.props} />
      </div>
    )
  }
}

export default FundTheCauseSection
