import React, { Component } from 'react'

import linkedinIcon from 'images/linkedin-logo.png'

import './social.scss'

class LinkedIn extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <div style={this.props.margin ? { margin: this.props.margin } : {}}>
          <img
            src={linkedinIcon}
            className="social-iconContainer social-iconContainer-linkedin"
            style={{ height: this.props.height, width: this.props.width }}
            alt="linkedin"
          />
        </div>
      </a>
    )
  }
}

export default LinkedIn
