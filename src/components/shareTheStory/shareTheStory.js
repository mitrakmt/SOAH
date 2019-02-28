import React, { Component } from 'react'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import RhinoImage from 'images/SOAH_rhino.png'

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
            <span className="shareTheStory-topSection-line" />
            <h3 className="shareTheStory-topSection-header">
              Share the behind the scenes film
            </h3>
            <div className="shareTheStory-topSection-social">
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
              <LinkedIn
                href="https://linkedin.com/in/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
              <Email
                href="https://linkedin.com/in/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
              <Tumblr
                href="https://tumbler.com/in/sidesofahorn"
                width="15px"
                height="15px"
                fill="#fff"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LookInside
