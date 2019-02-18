import React, { Component } from 'react'
import './landingPageView.scss'

class LandingPageView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <div className="association-container">
          <p className="association-text">in association with</p>
        </div>
        <div className="credits-container">
          <h1 className="credits-text">from executive producer sir richard branson</h1>
          <h2 className="credits-text--bottom">a film by toby wosskow</h2>
        </div>
        <div className="movieTitle-container">
          <h3 className="credits-text">Sides of a Horn</h3>
        </div>
      </div>
    )
  }
}

export default LandingPageView
