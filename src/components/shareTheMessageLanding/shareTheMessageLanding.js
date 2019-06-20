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
              href="https://www.dropbox.com/sh/gxanxv1jjq4dgaa/AACTNOqeKWQN0lNROb9ytEeua?dl=0"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <Facebook
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sidesofahorn/videos/361030087963483/."
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <Twitter
              href="https://twitter.com/intent/tweet?text=Sides of a Horn will be released online around the globe on June 3, 2019 at
              www.rhinomovie.com in honor of %23WorldEnvironmentDay! Please watch and share the official
              trailer. https://youtu.be/0el9UwGt_Vk"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <LinkedIn
              href="https://www.linkedin.com/feed/update/urn:li:activity:6490510564752662528/"
              fill="white"
              margin="0 5px 0 0"
            />
            <Email
              href="mailto:?subject=Sides of a Horn - Trailer&body=Sides of a Horn will be released online around the globe on June 3, 2019 at
              www.rhinomovie.com! Please watch and share the official
              trailer here: https://youtu.be/0el9UwGt_Vk"
              fill="white"
              margin="0 5px 0 0"
            />
            <Tumblr
              href="http://www.tumblr.com/share/link?&url=https://www.youtube.com/watch?v=0el9UwGt_Vk"
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
