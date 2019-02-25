import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import redLogo from 'images/redLogo.png'
import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import Imdb from 'components/social/imdb'
import { homeSections } from 'data'

import './navigation.scss'

class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navigationOpen: false,
    }
  }

  toggleNavigation = () => {
    this.setState({
      navigationOpen: !this.state.navigationOpen,
    })
  }

  navigateToView = view => {
    const isHomeView = homeSections.map(({ props: { sectionName }}) => sectionName).includes(view)
    const elementFound = document.getElementById(view)

    if (isHomeView && elementFound) {
      elementFound.scrollIntoView({behavior: 'smooth'})
    } else {
      this.props.history.push(`/${view}`)
      if (isHomeView) {
        setTimeout(() => {
          document.getElementById(view).scrollIntoView({behavior: 'smooth'})
        }, 250);
      }
    }
  }

  render() {
    return (
      <div className="navigation">
        <div
          className={`navigation-menu ${
            this.state.navigationOpen ? 'navigation-menu-hide' : ''
          }`}
          onClick={this.toggleNavigation}
        >
          <span className="navigation-menu-line" />
          <span className="navigation-menu-line" />
          <span className="navigation-menu-line" />
        </div>
        <div
          className={`navigation-backdrop ${
            this.state.navigationOpen ? 'navigation-backdrop-visible' : ''
          }`}
          onClick={this.toggleNavigation}
        >
          <img
            src={redLogo}
            className={`navigation-logo-hide ${
              this.state.navigationOpen ? 'navigation-logo' : ''
            }`}
            alt="logo"
          />
          <h3
            className="navigation-line"
            onClick={() => this.navigateToView('')}
          >
            Home
          </h3>
          <h3 className="navigation-line" onClick={() => { this.navigateToView('trailer') }}>Trailer</h3>
          <h3 className="navigation-line" onClick={() => { this.navigateToView('theStory') }}>The Story</h3>
          <h3 className="navigation-line" onClick={() => { this.navigateToView('takeAction') }}>Take Action</h3>
          <h3 className="navigation-line" onClick={() => { this.navigateToView('lookInside') }}>Look Inside</h3>
          <h3 className="navigation-line" onClick={() => { this.navigateToView('news') }}>News</h3>
          <h3
            className="navigation-line"
            onClick={() => this.navigateToView('screenings')}
          >
            Screenings
          </h3>
          <h3
            className="navigation-line"
            onClick={() => this.navigateToView('press')}
          >
            Press
          </h3>
          <h3 className="navigation-line" onClick={() => { this.navigateToView('credits') }}>Contact</h3>
          <div
            className={`navigation-social ${
              this.state.navigationOpen ? 'navigation-social-visible' : ''
            }`}
          >
            <Instagram
              href="https://www.instagram.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="#fff"
            />
            <Facebook
              href="https://www.facebook.com/sidesofahorn/"
              width="15px"
              height="15px"
              fill="#fff"
            />
            <Twitter
              href="https://twitter.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="#fff"
            />
            <Imdb
              href="https://www.imdb.com/title/tt7434998/"
              width="15px"
              height="15px"
              fill="#fff"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Navigation)
