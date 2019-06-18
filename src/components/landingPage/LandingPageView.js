import React, { Component } from 'react'
import awfLogo from '../../images/awf.svg'
import Header from '../header'
import SoahLogo from '../../images/SOAH_logo.png'
import ScrollAnimation from 'react-animate-on-scroll'

import AnimationLogo from 'images/redLogo.png'
import AnimationBackground from 'images/SOAH_Still46.png?sizes[]=300,sizes[]=400,sizes[]=500'

import './landingPageView.scss'

class LandingPageView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <div className="animation">
          <img
            srcSet={AnimationBackground.srcSet}
            src={AnimationBackground.src}
            className="animation-background"
            alt="animation background"
          />
          <div className="animation-withLogo">
            <img
              src={AnimationLogo}
              className="animation-withLogo-logo"
              alt="logo"
            />
          </div>
        </div>
        <div className="header-container">
          <Header />
        </div>
        <div className="association-container">
          <p className="association-text">in association with</p>
          <img alt="Africa Wildlife Foundation logo" src={awfLogo} />
        </div>
        <div className="credits-container">
          <h1 className="credits-text">
            from executive producer sir richard branson
          </h1>
          <ScrollAnimation
            initiallyVisible={true}
            duration={2}
            delay={5.3}
            className="credits-text-border"
          >
            <h2 className="credits-text--bottom">a film by toby wosskow</h2>
          </ScrollAnimation>
        </div>
        <div className="movieTitle-container">
          <img className="movieTitle-image" src={SoahLogo} alt="Movie Logo" />
        </div>
      </div>
    )
  }
}

export default LandingPageView
