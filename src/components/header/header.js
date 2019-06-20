import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import Imdb from 'components/social/imdb'

import { homeSections } from 'data'

import './header.scss'

class Header extends Component {
  navigateToView = view => {
    const isHomeView = homeSections
      .map(({ props: { sectionName } }) => sectionName)
      .includes(view)
    // Using view as an ID when it's a home section
    const elementFound = document.getElementById(view)

    if (isHomeView && elementFound) {
      elementFound.scrollIntoView({ behavior: 'smooth' })
    } else {
      this.props.history.push(`/${view}`)
      if (isHomeView) {
        setTimeout(() => {
          document.getElementById(view).scrollIntoView({ behavior: 'smooth' })
        }, 250)
      }
    }
  }

  render() {
    return (
      <div className="headerContainer" id="header">
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('trailer')}
        >
          Watch Film
        </h3>
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('theStory')}
        >
          The Story
        </h3>
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('takeAction')}
        >
          Take Action
        </h3>
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('lookInside')}
        >
          Look Inside
        </h3>
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('news')}
        >
          News
        </h3>
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('screenings')}
        >
          Screenings
        </h3>
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('press')}
        >
          Press
        </h3>
        <h3
          className="headerContainer-line"
          onClick={() => this.navigateToView('credits')}
        >
          Contact
        </h3>
        <div className="headerContainer-social">
          <Instagram
            href="https://www.instagram.com/sidesofahorn"
            width="15px"
            height="15px"
            fill="white"
            margin="0 10px 0 0"
          />
          <Twitter
            href="https://twitter.com/sidesofahorn"
            width="15px"
            height="15px"
            fill="white"
            margin="0 10px 0 0"
          />
          <Facebook
            href="https://www.facebook.com/sidesofahorn/"
            width="15px"
            height="15px"
            fill="white"
            margin="0 10px 0 0"
          />
          <Imdb
            href="https://www.imdb.com/title/tt7434998/"
            fill="white"
            margin="0"
          />
        </div>
      </div>
    )
  }
}

export default withRouter(Header)
