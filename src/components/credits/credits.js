import React, { Component } from 'react'
// import Social from 'components/social';

// Logos
import AfricanWildlife from './components/africanWildlife'
import BroadRiverProductions from './components/broadRiverProductions'
import Frame48 from './components/frame48'
import Marks from './components/marks'
import TheTelevisionaries from './components/theTelevisionaries'
import Whirlow from './components/whirlow'
import YouKickedMyDog from './components/youKickedMyDog'

import './credits.scss'

class Credits extends Component {
  render() {
    return (
      <div className="credits" id="credits">
        <div className="credits-header">
          <h2 className="credits-header-getInTouch">Get in touch</h2>
          <h4 className="credits-header-email">INFO@WHIRLOWPARKPICTURES.COM</h4>
          {/* <Social /> */}
        </div>
        <div className="credits-names">
          <h4>
            executive producer{' '}
            <span className="credits-names-large">sir richard branson</span>{' '}
            presents a film by{' '}
            <span className="credits-names-large">toby wosskow</span> a{' '}
            <span className="credits-names-large">
              whirlow park pictures broad river productions ykmD productions the
              televisionaries
            </span>
            production in association with{' '}
            <span className="credits-names-large">
              frame 48 “sides of a horn” welile nzuza sherldon marema ayanda
              seoka dimpho motloung
            </span>
            music by <span className="credits-names-large">joshua mosley</span>
            costume designer{' '}
            <span className="credits-names-large">
              gaserongoe ramatapa
            </span>{' '}
            production designer{' '}
            <span className="credits-names-large">vivienne mahloko</span>{' '}
            director of photograpy{' '}
            <span className="credits-names-large">nico aguilar</span> sound
            design <span className="credits-names-large">gerry vazquez</span>{' '}
            edited by <span className="credits-names-large">anjoum agrama</span>{' '}
            associate producer{' '}
            <span className="credits-names-large">sparkly kagiso mokgosi</span>
            creative producer{' '}
            <span className="credits-names-large">allison triegaardt</span>{' '}
            co-producer{' '}
            <span className="credits-names-large">aurelie stratton</span>{' '}
            produced by{' '}
            <span className="credits-names-large">
              toby wosskow charlie hicks emmanuel castis erika klopper
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
            WEB DESIGN BY: SOMETHING DESIGNED INC. | WEB DEVELOPMENT BY:
            DOUBLETAP CONSULTING
          </h3>
        </div>
      </div>
    )
  }
}

export default Credits
