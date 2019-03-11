import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'

import Navigation from 'components/navigation/navigation'

import { learnMoreSections } from '../../data'

import MetaImage from 'images/SOAH_FilmPoster.png'

import './section.scss'

class LearnMore extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sides of a Horn - Learn More</title>
          <meta
            name="description"
            content="Learn more about Sides of a Horn and poaching in Africa."
          />
          <meta property="og:title" content="Sides of a Horn" />
          <meta property="og:image" content={MetaImage} />
        </MetaTags>
        <Navigation />
        <div className="learnMoreContainer" id="learnMore">
          {learnMoreSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default LearnMore
