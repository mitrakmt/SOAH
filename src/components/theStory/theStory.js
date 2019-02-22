import React, { Component } from 'react'

import BackgroundImage from 'images/SOAH_Still99.jpg'
import Quote from 'components/quote/quote'

import './theStory.scss'

class TheStory extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}`}>
        <img
          src={BackgroundImage}
          alt="background"
          className="theStory-background"
        />
        <div className="theStory-header">
          <span className="theStory-header-line" />
          <h3 className="theStory-header-text">The Story</h3>
        </div>
        <div className="theStory-description">
          <Quote />
          <p className="theStory-description-text">
            Sides of a Horn is the first film to tell the story of Africa&#39;s
            poaching war from both sides of the fence. Based on actual events,
            and filmed in the townships and game reserves most directly impacted
            by wildlife crime, this dramatic short film paints an unbiased
            portrait of a modern war that is tearing communities apart and
            driving a pre-historic species to the verge of extinction.
          </p>
        </div>
      </div>
    )
  }
}

export default TheStory
