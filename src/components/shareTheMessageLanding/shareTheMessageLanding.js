import React, { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import HeaderImage from 'images/SOAH_Still5_long.jpg'

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
            Share the Film
          </h3>
          <div className="shareTheMessageLanding-divider-social">
            <Facebook
              href="https://www.facebook.com/sidesofahorn/videos/2314945311932404/"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <Twitter
              href="https://twitter.com/intent/tweet?text=Watch @SidesofaHorn now at www.rhinomovie.com and join the conversation about Africa’s poaching crisis"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0 5px 0 0"
            />
            <LinkedIn
              href="https://www.linkedin.com/feed/update/urn:li:activity:6549210598977093632/"
              fill="white"
              margin="0 5px 0 0"
            />
            <Email
              href="mailto:?subject=Sides of a Horn - Global Release&body=Watch Sides of a Horn now at www.rhinomovie.com and join the conversation about Africa’s poaching crisis"
              fill="white"
              margin="0 5px 0 0"
            />
            <Tumblr
              href="http://www.tumblr.com/share/link?&url=https://www.youtube.com/watch?v=6pWVg-ZpTQk"
              fill="white"
              margin="0 5px 0 0"
            />
          </div>
        </div>
        <iframe
          className="shareTheMessageLanding-movie"
          src="https://www.youtube.com/embed/6pWVg-ZpTQk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Look Inside Video"
        />
        <div className="shareTheMessageLanding-dividerLeft">
          <h3 className="shareTheMessageLanding-dividerLeft-text">
            Share the Trailer
          </h3>
          <div className="shareTheMessageLanding-dividerLeft-social">
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
              href="https://twitter.com/intent/tweet?text=Watch @SidesofaHorn at www.rhinomovie.com and spread the word by sharing the
              official trailer: https://youtu.be/0el9UwGt_Vk"
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
              href="mailto:?subject=Sides of a Horn - Trailer&body=Watch Sides of a Horn at www.rhinomovie.com and spread the word by sharing the
              official trailer: https://youtu.be/0el9UwGt_Vk"
              fill="white"
              margin="0 5px 0 0"
            />
            <Tumblr
              href="http://www.tumblr.com/share/link?&url=https://www.youtube.com/watch?v=0el9UwGt_Vk"
              fill="white"
              margin="0 5px 0 0"
            />
          </div>
          <ScrollAnimation
            animateIn="fadeIn"
            delay={1}
            duration={2}
            className="shareTheMessageLanding-dividerLeft-line"
          />
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
