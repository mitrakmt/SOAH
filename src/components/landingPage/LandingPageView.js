import React, { Component } from 'react'
import awfLogo from '../../images/awf.svg'
import Header from '../header'
import SoahLogo from '../../images/SOAH_logo.png'
import ScrollAnimation from 'react-animate-on-scroll'
import { homeSections } from 'data'

import AnimationLogo from 'images/redLogo.png'
import AnimationBackground from 'images/SOAH_Still46.png?sizes[]=512,sizes[]=1024'

import './landingPageView.scss'

class LandingPageView extends Component {
  navigateToView(view) {
    const isHomeView = homeSections
    .map(({ props: { sectionName } }) => sectionName)
    .includes(view)
  // Using view as an ID when it's a home section
  const elementFound = document.getElementById(view)

  if (isHomeView && elementFound) {
    elementFound.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    })
  } else {
    this.props.history.push(`/${view}`)
    if (isHomeView) {
      setTimeout(() => {
        document.getElementById(view).scrollIntoView({
          behavior: 'smooth',
          block: 'start',
          inline: 'start',
        })
      }, 250)
    }
  }
  }
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
        <h3
          className="watchFilmCTA"
          onClick={() => this.navigateToView('trailer')}
        >
          Watch Film
        </h3>
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
