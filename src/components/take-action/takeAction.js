import React, { Component } from 'react'

import awfLogo from '../../images/awf.svg'
import backgroundImage from 'images/SOAH_Still18.png'

import './takeAction.scss'

class TakeActionView extends Component {
  render() {
    const { sectionName } = this.props

    return (
      <div className={`${sectionName}`}>
        <img src={backgroundImage} className={`${sectionName}-background`} />
      </div>
    )
  }
}

export default TakeActionView
