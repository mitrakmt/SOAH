import React, { Component } from 'react'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import PosterArtImage from 'images/SOAH_FilmPoster.png'

// import HeaderImage from 'images/SOAH_Still39.png'

import './posterArt.scss'

class PosterArt extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <div className="posterArt-left">
          <h4 className="posterArt-left-text">poster art by annis naeem</h4>
          <span className="posterArt-left-line" />
        </div>
        <img
          src={PosterArtImage}
          className="posterArt-image"
          alt="Poster - Moonlight"
        />
        {/* <span className="posterArt-filler" /> */}
        <div className="posterArt-right">
          <span className="posterArt-right-line" />
          <div className="posterArt-right-social">
            <Instagram
              href="https://www.instagram.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0px 0px 10px 0px"
            />
            <Twitter
              href="https://twitter.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0px 0px 10px 0px"
            />
            <Facebook
              href="https://www.facebook.com/sidesofahorn/"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0px 0px 10px 0px"
            />
            <LinkedIn
              href="https://linkedin.com/in/sidesofahorn"
              fill="white"
              margin="0px 0px 10px 0px"
            />
            <Email
              href="https://linkedin.com/in/sidesofahorn"
              fill="white"
              margin="0px 0px 10px 0px"
            />
            <Tumblr
              href="https://tumbler.com/in/sidesofahorn"
              fill="white"
              margin="0px 0px 10px 0px"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PosterArt
