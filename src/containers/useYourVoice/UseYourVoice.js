import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'

import Navigation from 'components/navigation/navigation'

import { useYourVoiceSections } from '../../data'

import MetaImage from 'images/SOAH_FilmPoster.png'

import './section.scss'

class UseYourVoice extends Component {
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
            content="Speak up about the issue of poaching and make a difference."
          />
          <meta property="og:title" content="Sides of a Horn" />
          <meta property="og:image" content={MetaImage} />
        </MetaTags>
        <Navigation />
        <div className="useYourVoiceContainer" id="useYourVoice">
          {useYourVoiceSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default UseYourVoice
