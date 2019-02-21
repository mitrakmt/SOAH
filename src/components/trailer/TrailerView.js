import React, { Component } from 'react'
import trailerThumbnail from '../../images/trailerThumbnail.jpeg'
import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import Imdb from 'components/social/imdb'
import FlipClock from '../../components/flipClock'
import './trailerView.scss'

class TrailerView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <img className="thumbnail" alt="Sides of a Horn trailer thumbnail" src={trailerThumbnail} />
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
              <div className="socialGroup-line">

                <Facebook
                  href="https://www.facebook.com/sidesofahorn/"
                  width="15px"
                  height="15px"
                  fill="white"
                />
                <Imdb
                  href="https://www.imdb.com/title/tt7434998/"
                  width="15px"
                  height="15px"
                  fill="white"
                />
                <Instagram
                  href="https://www.instagram.com/sidesofahorn"
                  width="15px"
                  height="15px"
                  fill="white"
                />
              </div>
            </div>
          </div>
          <div className="footer-section">
            <h3>the short film will be released ON world ENVIRONMENT</h3>
            <h3>DAY on JUNE 5, 2019, let the countdown begin:</h3>
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
              <input className="latest-inputEmail" placeholder="Email address" />
              <button className="latest-inputSubmit">Count me in!</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrailerView
