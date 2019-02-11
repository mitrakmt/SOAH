import React, { Component } from 'react'

class LandingPageView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <h2>test view</h2>
      </div>
    )
  }
}

export default LandingPageView
