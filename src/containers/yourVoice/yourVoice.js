import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'
import MetaImage from 'images/SOAH_FilmPoster.png'
import YourVoiceView from 'components/yourVoice/'

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
          <meta
            name="description"
            content="Learn more about Sides of a Horn and poaching in Africa."
          />
          <meta property="og:title" content="Sides of a Horn" />
          <meta property="og:image" content={MetaImage} />
        </MetaTags>
        <div className="yourVoiceContainer" id="yourVoice">
          <YourVoiceView />
        </div>
      </Fragment>
    )
  }
}

export default YourVoiceContainer
