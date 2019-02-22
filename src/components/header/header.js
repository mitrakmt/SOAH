import React, { Component } from 'react'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import Imdb from 'components/social/imdb'

import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="headerContainer" id="header">
        <h3 className="headerContainer-line">Trailer</h3>
        <h3 className="headerContainer-line">The Story</h3>
        <h3 className="headerContainer-line">Take Action</h3>
        <h3 className="headerContainer-line">Look Inside</h3>
        <h3 className="headerContainer-line">News</h3>
        <h3 className="headerContainer-line">Screenings</h3>
        <h3 className="headerContainer-line">Press</h3>
        <h3 className="headerContainer-line">Contact</h3>
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
            width="15px"
            height="15px"
            fill="white"
            margin="0 10px 0 0"
          />
        </div>
      </div>
    )
  }
}

export default Header
