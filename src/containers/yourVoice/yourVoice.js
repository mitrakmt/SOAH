import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import MetaImage from 'images/SOAH_FilmPoster.png'
import { useYourVoiceSections } from '../../data'

import './section.scss'

class YourVoiceContainer extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sides of a Horn - Use Your Voice</title>
          <meta name="description" content="Use your voice" />
          <meta property="og:title" content="Sides of a Horn" />
          <meta property="og:image" content={MetaImage} />
        </MetaTags>
        <div className="yourVoiceContainer" id="yourVoice">
          {useYourVoiceSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default YourVoiceContainer
