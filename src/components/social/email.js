import React, { Component } from 'react'

import emailIcon from 'images/email-icon.png'

import './social.scss'

class Email extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <div style={this.props.margin ? { margin: this.props.margin } : {}}>
          <img
            src={emailIcon}
            className="social-iconContainer social-iconContainer-email"
            style={{ height: this.props.height, width: this.props.width }}
            alt="email"
          />
        </div>
      </a>
    )
  }
}

export default Email
