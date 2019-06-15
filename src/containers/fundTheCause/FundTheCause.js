import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'

import Navigation from 'components/navigation/navigation'

import { fundTheCauseSections } from '../../data'

import MetaImage from 'images/SOAH_FilmPoster.png'

import './section.scss'

class FundTheCause extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sides of a Horn - Fund the Cause</title>
          <meta
            name="description"
            content="Fund the cause - save Rhinos around the world."
          />
          <meta property="og:title" content="Sides of a Horn" />
          <meta property="og:image" content={MetaImage} />
        </MetaTags>
        <Navigation />
        <div className="fundTheCauseContainer" id="fundTheCause">
          {fundTheCauseSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default FundTheCause
