import React, { Component } from 'react'
import Facebook from 'components/social/facebook'
import Twitter from 'components/social/twitter'
import Instagram from 'components/social/instagram'
import LinkedIn from 'components/social/linkedin'
import Email from 'components/social/email'
import Tumblr from 'components/social/tumblr'
import FlipClock from '../../components/flipClock'
import ScrollAnimation from 'react-animate-on-scroll'
import './trailerView.scss'

class TrailerView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }
  }

  submitEmail = () => {
    setTimeout(() => {
      this.setState({
        email: '',
      })
    }, 1000)
  }

  updateEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    const { sectionName } = this.props

    return (
      <div className={`${sectionName}-view`}>
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
        <iframe
          className="thumbnail"
          src="https://www.youtube.com/embed/0el9UwGt_Vk"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Trailer Video"
        />
        <div className="footer">
          <div className="footer-section--mobileCenter">
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
                  margin="2px 4px 2px 4px"
                />
                <Twitter
                  href="https://twitter.com/sidesofahorn"
                  width="15px"
                  height="15px"
                  fill="white"
                  margin="2px 4px 2px 4px"
                />
                <Facebook
                  href="https://www.facebook.com/sidesofahorn/"
                  width="15px"
                  height="15px"
                  fill="white"
                  margin="2px 4px 2px 4px"
                />
              </div>
              <div className="socialGroup-line">
                <LinkedIn
                  href="https://linkedin.com/in/sidesofahorn"
                  fill="white"
                  margin="2px 4px 2px 4px"
                />
                <Email
                  href="https://linkedin.com/in/sidesofahorn"
                  fill="white"
                  margin="2px 4px 2px 4px"
                />
                <Tumblr
                  href="https://tumbler.com/in/sidesofahorn"
                  fill="white"
                  margin="2px 4px 2px 4px"
                />
              </div>
            </div>
          </div>
          <div className="footer-section--center">
            <div className="countdown-container">
              <h3 className="countdown-container-text">
                The short film will be released on June 3, 2019, in
              </h3>
            </div>
            <div className="flipClock-container">
              <FlipClock />
            </div>
          </div>
          <div className="footer-section--mobileCenter">
            <div className="latest-text">
              <h3>get the </h3>
              <h3>latest:</h3>
            </div>
            <div className="latest-form">
              <div id="mc_embed_signup">
                <form
                  action="https://whirlowparkpictures.us18.list-manage.com/subscribe/post?u=6ffdb5207ab2707139f3c06b9&amp;id=6aad220de9"
                  method="post"
                  id="mc-embedded-subscribe-form"
                  name="mc-embedded-subscribe-form"
                  className="validate"
                  target="_blank"
                  noValidate
                >
                  <div
                    id="mc_embed_signup_scroll"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      marginTop: '5px',
                    }}
                  >
                    <input
                      type="email"
                      className="latest-inputEmail"
                      placeholder="Email address"
                      name="EMAIL"
                      value={this.state.email}
                      id="mce-EMAIL"
                      onChange={this.updateEmail}
                      required
                    />
                    <button
                      type="submit"
                      name="subscribe"
                      id="mc-embedded-subscribe"
                      className="latest-inputSubmit"
                      onClick={this.submitEmail}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TrailerView
