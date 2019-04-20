import React, { Component } from 'react'

import ImageCarousel from 'components/image-carousel/imageCarousel'
import ScrollAnimation from 'react-animate-on-scroll'

import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'

import Image1 from 'images/look-inside/_mg_0047.jpg'
import Image2 from 'images/look-inside/_mg_0048.jpg'
import Image3 from 'images/look-inside/_mg_0049.jpg'
import Image4 from 'images/look-inside/_mg_0123.jpg'
import Image5 from 'images/look-inside/_mg_0294.jpg'
import Image6 from 'images/look-inside/_mg_0308.jpg'
import Image7 from 'images/look-inside/_mg_0635.jpg'
import Image8 from 'images/look-inside/_mg_0676.jpg'
import Image9 from 'images/look-inside/_mg_0727.jpg'
import Image10 from 'images/look-inside/_mg_0776.jpg'
import Image11 from 'images/look-inside/_mg_0915.jpg'
import Image12 from 'images/look-inside/img_0010.jpg'
import Image13 from 'images/look-inside/img_0169.jpg'
import Image14 from 'images/look-inside/img_0203.jpg'
import Image15 from 'images/look-inside/img_0306.jpg'
import Image16 from 'images/look-inside/img_0409.jpg'
import Image17 from 'images/look-inside/img_0492.jpg'
import Image18 from 'images/look-inside/img_0502.jpg'
import Image19 from 'images/look-inside/img_0570.jpg'
import Image20 from 'images/look-inside/img_0575.jpg'
import Image21 from 'images/look-inside/img_0594.jpg'
import Image22 from 'images/look-inside/img_9994.jpg'

import './lookInside.scss'

class LookInside extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.images = [
      {
        src: Image1,
        alt: 'Look Inside 1',
      },
      {
        src: Image2,
        alt: 'Look Inside 2',
      },
      {
        src: Image3,
        alt: 'Look Inside 3',
      },
      {
        src: Image4,
        alt: 'Look Inside 4',
      },
      {
        src: Image5,
        alt: 'Look Inside 5',
      },
      {
        src: Image6,
        alt: 'Look Inside 6',
      },
      {
        src: Image7,
        alt: 'Look Inside 7',
      },
      {
        src: Image8,
        alt: 'Look Inside 8',
      },
      {
        src: Image9,
        alt: 'Look Inside 9',
      },
      {
        src: Image10,
        alt: 'Look Inside 10',
      },
      {
        src: Image11,
        alt: 'Look Inside 11',
      },
      {
        src: Image12,
        alt: 'Look Inside 12',
      },
      {
        src: Image13,
        alt: 'Look Inside 13',
      },
      {
        src: Image14,
        alt: 'Look Inside 14',
      },
      {
        src: Image15,
        alt: 'Look Inside 15',
      },
      {
        src: Image16,
        alt: 'Look Inside 16',
      },
      {
        src: Image17,
        alt: 'Look Inside 17',
      },
      {
        src: Image18,
        alt: 'Look Inside 18',
      },
      {
        src: Image19,
        alt: 'Look Inside 19',
      },
      {
        src: Image20,
        alt: 'Look Inside 20',
      },
      {
        src: Image21,
        alt: 'Look Inside 21',
      },
      {
        src: Image22,
        alt: 'Look Inside 22',
      },
    ]
  }

  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <div className="lookInside-topSection">
          <div className="lookInside-topSection-left">
            <iframe
              className="lookInside-topSection-left-video"
              src="https://www.youtube.com/embed/sIWl6msIH0Y"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Look Inside Video"
            />
          </div>
          <div className="lookInside-topSection-right">
            <ScrollAnimation
              animateIn="fadeIn"
              duration={2}
              delay={1}
              className="lookInside-topSection-line"
            />
            <h3 className="lookInside-topSection-header">Behind the Scenes</h3>
            <h4 className="lookInside-topSection-subheader">
              Spread the word. Share the BTS Film:
            </h4>
            <div className="lookInside-topSection-row">
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
                www.rhinomovie.com in honor of %23WorldEnvironmentDay! Please watch and share the behind the official behind the scenes film. https://youtu.be/sIWl6msIH0Y"
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
                href="mailto:?subject=Sides of a Horn - Behind the Scenes Film&body=Sides of a Horn will be released online around the globe on June 3, 2019 at
                www.rhinomovie.com in honor of #WorldEnvironmentDay! Please watch and share the official
                behind the scenes film here: https://youtu.be/sIWl6msIH0Y"
                fill="white"
                margin="0 5px 0 0"
              />
              <Tumblr
                href="http://www.tumblr.com/share/link?url=https://www.youtube.com/watch?v=sIWl6msIH0Y"
                fill="white"
                margin="0"
              />
            </div>
          </div>
        </div>
        <div>
          <ImageCarousel images={this.images} keyName="LookInsideContainer" />
        </div>
      </div>
    )
  }
}

export default LookInside
