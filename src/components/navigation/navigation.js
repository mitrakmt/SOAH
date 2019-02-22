import React, { Component } from 'react'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import Imdb from 'components/social/imdb'

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

  render() {
    return (
      <div className="navigation">
        <div className="navigation-menu" onClick={this.toggleNavigation}>
          <span className="navigation-menu-line" />
          <span className="navigation-menu-line" />
          <span className="navigation-menu-line" />
        </div>
        <div
          className={`navigation-backdrop ${
            this.state.navigationOpen ? 'navigation-backdrop-visible' : ''
          }`}
        >
          <h3 className="navigation-line">Trailer</h3>
          <h3 className="navigation-line">The Story</h3>
          <h3 className="navigation-line">Take Action</h3>
          <h3 className="navigation-line">Look Inside</h3>
          <h3 className="navigation-line">News</h3>
          <h3 className="navigation-line">Screenings</h3>
          <h3 className="navigation-line">Press</h3>
          <h3 className="navigation-line">Contact</h3>
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

export default Navigation
