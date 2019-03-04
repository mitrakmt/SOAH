import React, { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import './shareTheStory.scss'

class LookInside extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <div className="shareTheStory-topSection">
          <div className="shareTheStory-topSection-left">
            <iframe
              className="shareTheStory-topSection-left-video"
              src="https://www.youtube.com/embed/sIWl6msIH0Y"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Look Inside Video"
            />
          </div>
          <div className="shareTheStory-topSection-right">
            <ScrollAnimation
              animateIn="fadeIn"
              duration={2}
              className="shareTheStory-topSection-line"
            />
            <h3 className="shareTheStory-topSection-header">
              Share the behind the scenes film
            </h3>
            <div className="shareTheStory-topSection-social">
              <Instagram
                href="https://www.dropbox.com/sh/k9v3uy8jc9pawb0/AADNK3ilnU0FUMEELzcTzme_a?dl=0"
                width="15px"
                height="15px"
                fill="#fff"
                margin="0 5px 0 0"
              />
              <Facebook
                href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sidesofahorn/videos/209543396420784/"
                width="15px"
                height="15px"
                fill="#fff"
                margin="0 5px 0 0"
              />
              <Twitter
                href="https://twitter.com/intent/tweet?text=Sides of a Horn will be released online around the globe on June 3, 2019 at
                www.rhinomovie.com in honor of %23WorldEnvironmentDay! Please watch and share the official trailer. https://youtu.be/sIWl6msIH0Y"
                width="15px"
                height="15px"
                fill="#fff"
                margin="0 5px 0 0"
              />
              <LinkedIn
                href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/feed/update/urn:li:ugcPost:6445915668696170496&source=LinkedIn"
                fill="white"
                margin="0 5px 0 0"
              />
              <Email
                href="mailto:?subject=Sides of a Horn - Trailer&body=Sides of a Horn will be released online around the globe on June 3, 2019 at
                www.rhinomovie.com in honor of #WorldEnvironmentDay! Please watch and share the official
                trailer here: https://youtu.be/0el9UwGt_Vk"
                fill="white"
                margin="0 5px 0 0"
              />
              <Tumblr
                href="http://www.tumblr.com/share/link?url=https://www.youtube.com/watch?v=sIWl6msIH0Y"
                fill="white"
                margin="0 5px 0 0"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LookInside
