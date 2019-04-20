import React, { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import PosterArtImage from 'images/SOAH_FilmPoster.png'

import './posterArt.scss'

class PosterArt extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <div className="posterArt-left">
          <h4 className="posterArt-left-text">Share The Poster</h4>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={1}
            className="posterArt-left-line"
          />
        </div>
        <img
          src={PosterArtImage}
          className="posterArt-image"
          alt="Poster - Moonlight"
        />
        <div className="posterArt-right">
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={1}
            className="posterArt-right-line"
          />
          <div className="posterArt-right-social">
            <Instagram
              href="https://www.dropbox.com/sh/3pxgvtp3elikouf/AADmWPlqXBo5YxWZl1BI9pY_a?dl=0"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0px 0px 10px 0px"
            />
            <Twitter
              href="https://twitter.com/intent/tweet?text=Sides of a Horn will be released online around the globe on June 3, 2019 at www.rhinomovie.com in honor of %23WorldEnvironmentDay! Please share the official poster and help spread the word: https://www.dropbox.com/home/SOAH%20-%20Marketing%20Assets/PRESS%20MATERIALS/Poster"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0px 0px 10px 0px"
            />
            <Facebook
              href="https://www.facebook.com/sharer/sharer.php?u=https://www.facebook.com/sidesofahorn/photos/a.112563962785395/309177506457372/?type=3&theater"
              width="15px"
              height="15px"
              fill="#fff"
              margin="0px 0px 10px 0px"
            />
            <LinkedIn
              href="https://www.linkedin.com/shareArticle?mini=true&url=https://www.linkedin.com/feed/update/urn:li:ugcPost:6445915668696170496&source=LinkedIn"
              fill="white"
              margin="0px 0px 10px 0px"
            />
            <Email
              href="mailto:?subject=Sides of a Horn - Poster&body=Sides of a Horn will be released online around the globe on June 3, 2019 at www.rhinomovie.com in honor of %23WorldEnvironmentDay! Please share the official poster and help spread the word: https://www.dropbox.com/home/SOAH%20-%20Marketing%20Assets/PRESS%20MATERIALS/Poster"
              fill="white"
              margin="0px 0px 10px 0px"
            />
            <Tumblr
              href="http://www.tumblr.com/widgets/share/tool?shareSource=legacy&canonicalUrl=http://www.rhinomovie.com/static/media/SOAH_FilmPoster.123c2514.png&posttype=photo&caption=Sides of a Horn will be released online around the globe on June 3, 2019 at www.rhinomovie.com in honor of %23WorldEnvironmentDay! Please share the official poster and help spread the word: https://www.dropbox.com/home/SOAH%20-%20Marketing%20Assets/PRESS%20MATERIALS/Poster&title=Sides of a Horn will be released online around the globe on June 3, 2019 at www.rhinomovie.com in honor of %23WorldEnvironmentDay! Please share the official poster and help spread the word: https://www.dropbox.com/home/SOAH%20-%20Marketing%20Assets/PRESS%20MATERIALS/Poster"
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
