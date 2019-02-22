import React, { Component } from 'react'

import LetterFromTheDirector from 'components/letter-from-the-director/letterFromTheDirector'
import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'

import SOAH_PressKit from './SOAH_PressKit.pdf'

import HeaderImage from 'images/SOAH_Still39.png'

import './press.scss'

class Press extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <h3 className="press-pageTitle">Press</h3>
        <img
          src={HeaderImage}
          className="press-headerImage"
          alt="Two men staring at a screen"
        />
        <LetterFromTheDirector />
        <div className="press-infoSection">
          <div className="press-infoSection-box">
            <a
              href={SOAH_PressKit}
              className="press-infoSection-box-link"
              download
            >
              <h4 className="press-infoSection-box-header">
                DOWNLOAD THE ELECTRONC PRESS KIT HERE
              </h4>
            </a>
          </div>
          <div className="press-infoSection-box">
            <h4 className="press-infoSection-box-header">
              TAG US @SIDESOFAHORN
            </h4>
            <div className="press-infoSection-box-row">
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
        <div className="press-infoSection">
          <div className="press-infoSection-box column">
            <h4 className="press-infoSection-box-header">USA Press Contact</h4>
            <span className="press-infoSection-box-divider" />
            <h5 className="press-infoSection-box-subtext">Toby Wosskow</h5>
            <h5 className="press-infoSection-box-subtext">
              Writer / Director / Producer
            </h5>
            <h5 className="press-infoSection-box-subtext">
              twosskow@gmail.com
            </h5>
            <h5 className="press-infoSection-box-subtext">407.257.8292</h5>
          </div>
          <div className="press-infoSection-box column">
            <h4 className="press-infoSection-box-header">
              South Africa Press Contact
            </h4>
            <span className="press-infoSection-box-divider" />
            <h5 className="press-infoSection-box-subtext">Emmanuel Castis</h5>
            <h5 className="press-infoSection-box-subtext">Producer</h5>
            <h5 className="press-infoSection-box-subtext">
              emmanuel@ykmd.co.za
            </h5>
            <h5 className="press-infoSection-box-subtext">0.83.357.3330</h5>
          </div>
        </div>
      </div>
    )
  }
}

export default Press
