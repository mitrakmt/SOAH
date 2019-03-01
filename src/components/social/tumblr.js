import React, { Component } from 'react'

import tumblrIcon from 'images/tumblr-logo.png'

import './social.scss'

class Tumblr extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <div style={this.props.margin ? { margin: this.props.margin } : {}}>
          <img
            src={tumblrIcon}
            className="social-iconContainer social-iconContainer-tumblr"
            style={{ height: this.props.height, width: this.props.width }}
            alt="tumblr"
          />
        </div>
      </a>
    )
  }
}

export default Tumblr
