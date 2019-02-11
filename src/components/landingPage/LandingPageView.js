import React, { Component } from 'react'
import './landingPageView.scss'

class LandingPageView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <div className="credits-container">
          <p>from executive producer sir richard branson</p>
          <p>a film by toby wosskow</p>
        </div>
      </div>
    )
  }
}

export default LandingPageView
