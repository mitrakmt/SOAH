import React, { Component } from 'react'

import imdbIcon from 'images/imdb_logo.png'

import './social.scss'

class Imdb extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" rel="noopener noreferrer">
        <div style={this.props.margin ? { margin: this.props.margin } : {}}>
          <img
            src={imdbIcon}
            className="social-iconContainer social-iconContainer-imdb"
            style={{ height: this.props.height, width: this.props.width }}
            alt="imdb"
          />
        </div>
      </a>
    )
  }
}

export default Imdb
