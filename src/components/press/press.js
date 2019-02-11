import React, { Component } from 'react'

import LetterFromTheDirector from 'components/letter-from-the-director/letterFromTheDirector'
import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'

import HeaderImage from 'images/SOAH_Still39.png'

import './press.scss'

class Press extends Component {
  render() {
    return (
      <div className="press">
        <img
          src={HeaderImage}
          className="press-headerImage"
          alt="Two men staring at a screen"
        />
        <LetterFromTheDirector />
        <div className="press-infoSection">
          <div className="press-infoSection-box">
            <h4>DOWNLOAD THE ELECTRONC PRESS KIT HERE</h4>
          </div>
          <div className="press-infoSection-box">
            <h4>TAG US @SIDESOFAHORN</h4>
            <Instagram
              href="https://www.instagram.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="white"
            />
            <Twitter
              href="https://twitter.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="white"
            />
            <Facebook
              href="https://www.facebook.com/sidesofahorn/"
              width="15px"
              height="15px"
              fill="white"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Press
