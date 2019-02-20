import React, { Component } from 'react'
import awfLogo from '../../images/awf.svg'
import Header from '../header'
import './landingPageView.scss'

class LandingPageView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <div className="test"></div>
        <div className="header-container">
          <Header />
        </div>
        <div className="association-container">
          <p className="association-text">in association with</p>
          <img alt="Africa Wildlife Foundation logo" src={awfLogo} />
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
