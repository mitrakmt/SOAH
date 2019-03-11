import React, { Component, Fragment } from 'react'
import MetaTags from 'react-meta-tags'

import Navigation from 'components/navigation/navigation'

import { homeSections } from '../../data'

import MetaImage from 'images/SOAH_FilmPoster.png'

import './section.scss'

class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Sides of a Horn - Home</title>
          <meta
            name="description"
            content="An epic story about Rhino poaching in Africa."
          />
          <meta property="og:title" content="Sides of a Horn" />
          <meta property="og:image" content={MetaImage} />
        </MetaTags>
        <Navigation />
        <div className="homeContainer" id="home">
          {homeSections.map(({ Container, props }) => (
            <Container key={props.sectionName} {...props} />
          ))}
        </div>
      </Fragment>
    )
  }
}

export default Home
