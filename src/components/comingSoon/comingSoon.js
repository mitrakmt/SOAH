import React, { Component } from 'react'

import './comingSoon.scss'

class ComingSoon extends Component {
  render() {
    const { sectionName } = this.props

    return (
      <div className={`${sectionName}`}>
        <h2 className="comingSoon-text">Coming soon!</h2>
      </div>
    )
  }
}

export default ComingSoon
