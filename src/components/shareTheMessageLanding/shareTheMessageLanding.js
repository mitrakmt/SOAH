import React, { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import HeaderImage from 'images/SOAH_Still5_long.png'

import './shareTheMessageLanding.scss'

class ShareTheMessageLanding extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <div className="shareTheMessageLanding-header">
          <h3 className="shareTheMessageLanding-header-pageTitle">
            Share the Message
          </h3>
          <img
            src={HeaderImage}
            className="shareTheMessageLanding-header-image"
            alt="share the message"
          />
        </div>
        <div className="shareTheMessageLanding-divider">
          <ScrollAnimation
            animateIn="fadeIn"
            delay={1}
            duration={2}
            className="shareTheMessageLanding-divider-line"
          />
          <h3 className="shareTheMessageLanding-divider-text">
            Share the Trailer
          </h3>
          <div className="shareTheMessageLanding-divider-social">
            <Instagram
              href="https://www.instagram.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <Facebook
              href="https://www.facebook.com/sidesofahorn/"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <Twitter
              href="https://twitter.com/sidesofahorn"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <LinkedIn
              href="https://linkedin.com/in/sidesofahorn"
              fill="white"
              margin="0 5px 0 0"
            />
            <Email
              href="https://linkedin.com/in/sidesofahorn"
              fill="white"
              margin="0 5px 0 0"
            />
            <Tumblr
              href="https://tumbler.com/in/sidesofahorn"
              fill="white"
              margin="0 5px 0 0"
            />
          </div>
        </div>
        <iframe
          className="shareTheMessageLanding-movie"
          src="https://www.youtube.com/embed/0el9UwGt_Vk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Look Inside Video"
        />
      </div>
    )
  }
}

export default ShareTheMessageLanding
