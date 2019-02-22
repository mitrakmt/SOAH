import React, { Component } from 'react'
import Instagram from 'components/social/instagram'
import Twitter from 'components/social/twitter'
import Facebook from 'components/social/facebook'

// Logos
import AfricanWildlife from './components/africanWildlife'
import BroadRiverProductions from './components/broadRiverProductions'
import Frame48 from './components/frame48'
import Marks from './components/marks'
import TheTelevisionaries from './components/theTelevisionaries'
import Whirlow from './components/whirlow'
import YouKickedMyDog from './components/youKickedMyDog'

// Images
import Mountains from 'images/mountains.png'

import './credits.scss'

class Credits extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`} id="credits">
        <img
          src={Mountains}
          className="credits-background"
          alt="background mountains"
        />
        <div className="credits-header">
          <h2 className="credits-header-getInTouch">Get in touch</h2>
          <h4 className="credits-header-email">INFO@WHIRLOWPARKPICTURES.COM</h4>
          <div className="credits-header-social">
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
        </div>
        <div className="credits-names">
          <h4>
            executive producer{' '}
            <span className="credits-names-large">sir richard branson</span>{' '}
            presents a film by{' '}
            <span className="credits-names-large">toby wosskow</span>
            <br /> a{' '}
            <span className="credits-names-large">
              whirlow park pictures broad river productions ykmD productions the
              televisionaries{' '}
            </span>
            production
            <br /> in association with{' '}
            <span className="credits-names-large">
              frame 48 “sides of a horn” welile nzuza sherldon marema ayanda
              seoka dimpho motloung
              <br />
            </span>
            music by <span className="credits-names-large">joshua mosley</span>
            costume designer{' '}
            <span className="credits-names-large">
              gaserongoe ramatapa
            </span>{' '}
            production designer{' '}
            <span className="credits-names-large">vivienne mahloko</span>
            <br /> director of photograpy{' '}
            <span className="credits-names-large">nico aguilar</span> sound
            design <span className="credits-names-large">gerry vazquez</span>{' '}
            edited by <span className="credits-names-large">anjoum agrama</span>
            <br /> associate producer{' '}
            <span className="credits-names-large">
              sparkly kagiso mokgosi
            </span>{' '}
            creative producer{' '}
            <span className="credits-names-large">allison triegaardt</span>{' '}
            co-producer{' '}
            <span className="credits-names-large">aurelie stratton</span>
            <br /> produced by{' '}
            <span className="credits-names-large">
              toby wosskow charlie hicks emmanuel castis erika klopper
              <br />
            </span>
            written and directed by{' '}
            <span className="credits-names-large">toby wosskow</span>
          </h4>
        </div>
        <div className="credits-partners">
          <AfricanWildlife />
          <BroadRiverProductions />
          <Frame48 />
          <Marks />
          <TheTelevisionaries />
          <Whirlow />
          <YouKickedMyDog />
        </div>
        <div>
          <h3 className="credits-footer">
            WEB DESIGN BY:{' '}
            <a
              href="https://somethingdesignedinc.com/"
              target="_blank"
              className="credits-footer-SDLink"
              rel="noopener noreferrer"
            >
              {' '}
              SOMETHING DESIGNED INC.
            </a>{' '}
            | WEB DEVELOPMENT BY:
            <a
              href="https://doubletap.consulting"
              target="_blank"
              className="credits-footer-DTLink"
              rel="noopener noreferrer"
            >
              {' '}
              DOUBLETAP CONSULTING
            </a>
          </h3>
        </div>
      </div>
    )
  }
}

export default Credits
