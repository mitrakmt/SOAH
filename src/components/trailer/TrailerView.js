import React, { Component } from 'react'
import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'
import FlipClock from '../../components/flipClock'
import './trailerView.scss'

class TrailerView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <iframe
          className="thumbnail"
          src="https://www.youtube.com/embed/0el9UwGt_Vk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Trailer Video"
        />
        <div className="footer">
          <div className="footer-section">
            <div className="cta-container">
              <h3>spread the word.</h3>
              <h3>share the trailer:</h3>
            </div>
            <div className="socialGroup-container">
              <div className="socialGroup-line">
                <Instagram
                  href="https://www.instagram.com/sidesofahorn"
                  width="15px"
                  height="15px"
                  fill="white"
                  margin="3px 5px 3px 5px"
                />
                <Twitter
                  href="https://twitter.com/sidesofahorn"
                  width="15px"
                  height="15px"
                  fill="white"
                  margin="3px 5px 3px 5px"
                />
                <Facebook
                  href="https://www.facebook.com/sidesofahorn/"
                  width="15px"
                  height="15px"
                  fill="white"
                  margin="3px 5px 3px 5px"
                />
              </div>
              <div className="socialGroup-line">
                <LinkedIn
                  href="https://linkedin.com/in/sidesofahorn"
                  width="15px"
                  height="15px"
                  fill="#fff"
                  margin="3px 5px 3px 5px"
                />
                <Email
                  href="https://linkedin.com/in/sidesofahorn"
                  width="15px"
                  height="15px"
                  fill="#fff"
                  margin="3px 5px 3px 5px"
                />
                <Tumblr
                  href="https://tumbler.com/in/sidesofahorn"
                  width="15px"
                  height="15px"
                  fill="#fff"
                  margin="3px 5px 3px 5px"
                />
              </div>
            </div>
          </div>
          <div className="footer-section">
            <div className="countdown-container">
              <h3>the short film will be released ON world ENVIRONMENT</h3>
              <h3>DAY on JUNE 5, 2019, let the countdown begin:</h3>
            </div>
            <div className="flipClock-container">
              <FlipClock />
            </div>
          </div>
          <div className="footer-section">
            <div className="latest-text">
              <h3>get the</h3>
              <h3>latest:</h3>
            </div>
            <div className="latest-form">
              <input
                className="latest-inputEmail"
                placeholder="Email address"
              />
              <button className="latest-inputSubmit">Count me in!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrailerView
