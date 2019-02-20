import React, { Component } from 'react'
import trailerThumbnail from '../../images/trailerThumbnail.jpeg'
import './trailerView.scss'

class TrailerView extends Component {
  render() {
    const { sectionName } = this.props
    return (
      <div className={`${sectionName}-view`}>
        <img className="thumbnail" alt="Sides of a Horn trailer thumbnail" src={trailerThumbnail} />
      </div>
    )
  }
}

export default TrailerView
