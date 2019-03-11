import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'

import Navigation from 'components/navigation/navigation'

import { pressSections } from '../../data'

import MetaImage from 'images/SOAH_FilmPoster.png'

import './section.scss'

class Press extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sides of a Horn - Press</title>
          <meta name="description" content="Press details and information." />
          <meta property="og:title" content="Sides of a Horn" />
          <meta property="og:image" content={MetaImage} />
        </MetaTags>
        <Navigation />
        <div className="pressContainer" id="press">
          {pressSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default Press
