import React, { Component } from 'react'

import './social.scss'

class Facebook extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <div className="social-iconContainer social-iconContainer-facebook">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={this.props.width}
            height={this.props.height}
            fill={this.props.fill}
            viewBox="0 0 24 24"
          >
            <title>Facebook icon</title>
            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
          </svg>
        </div>
      </a>
    )
  }
}

export default Facebook
