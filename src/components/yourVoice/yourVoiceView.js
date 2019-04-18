import React, { Component } from 'react'
import HeaderImage from 'images/SOAH_Still33.png'
import Navigation from 'components/navigation/navigation'
import USGImage from 'images/eop_seal.png'
import NewZealandImage from 'images/newzealand.png'
import FacebookLogo from 'images/facebooklogo.png'
import SouthAfricaImage from 'images/southafrica.png'
import ScrollAnimation from 'react-animate-on-scroll'

import './yourVoiceView.scss'

class YourVoiceView extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className="yourVoiceView">
          <h1 className="yourVoiceView-pageTitle">Use Your Voice</h1>
          <img
            src={HeaderImage}
            className="yourVoiceView-headerImage"
            alt="Two men staring at a screen"
          />
          <div className="yourVoiceView-body">
            <div className="yourVoiceView-body-header">
              <h3 className="yourVoiceView-body-header-title">make change</h3>
              <ScrollAnimation
                animateIn="fadeIn"
                duration={2}
                delay={1}
                className="yourVoiceView-body-header-line"
              />
            </div>
            <div className="yourVoiceView-body-body">
              <h4 className="yourVoiceView-body-text">
                Write to key policymakers, international organizations, and
                corporations to voice your concerns about the rhino horn trade.
                Encourage them to impose sanctions, create wildlife-friendly
                policies, and prosecute wildlife traffickers to the fullest
                extent of the law.
              </h4>
              <div className="change-row">
                <a
                  href="https://www.pa.org.za/write/draft/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="change-image change-image-southafrica"
                    src={SouthAfricaImage}
                    alt="south africa"
                  />
                </a>
                <div className="change-right">
                  <h3 className="change-header">
                    The South African Government
                  </h3>
                  <p className="change-text">
                    write to the south african minister of environmental
                    affairs, nomvula mokonyane.
                  </p>
                </div>
              </div>
              <div className="change-row">
                <a
                  href="https://www.whitehouse.gov/contact/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="change-image" src={USGImage} alt="USG" />
                </a>
                <div className="change-right">
                  <h3 className="change-header">
                    The United states Government
                  </h3>
                  <p className="change-text">
                    Write to the White House to ask what they are doing to stop
                    illegal trade and smuggling.
                  </p>
                </div>
              </div>
              <div className="change-row">
                <a
                  href="mailto:David.parker@parliament.govt.nz"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="change-image"
                    src={NewZealandImage}
                    alt="New Zealand"
                  />
                </a>
                <div className="change-right">
                  <h3 className="change-header">The New Zealand Government</h3>
                  <p className="change-text">
                    Urge David Parker, New Zealand’s Minister for the
                    Environment, to end the country’s domestic trade in rhino
                    horn and ivory.
                  </p>
                </div>
              </div>
              <div className="change-row">
                <a
                  href="https://www.facebook.com/help/contact/268228883256323"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="change-image"
                    src={FacebookLogo}
                    alt="Facebook"
                  />
                </a>
                <div className="change-right">
                  <h3 className="change-header">Facebook Japan</h3>
                  <p className="change-text">
                    Ask Facebook Japan to take measures against the sale of
                    wildlife products on their platform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default YourVoiceView
