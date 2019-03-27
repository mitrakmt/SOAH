import React, { Component } from 'react'

import redLogo from 'images/redLogo.png'

import '../learnMore.scss'

class ImageBox extends Component {
  render() {
    const { link, image, text } = this.props.data
    return (
      <a
        href={link}
        target="_blank"
        className="link"
        style={{ width: '100%' }}
        rel="noopener noreferrer"
      >
        <div className={`learnMore-images-container`}>
          <img src={image} className={`learnMore-images-image`} alt={text} />
          <img
            src={redLogo}
            className={`learnMore-images-container-logo`}
            alt="logo"
          />
          <h3 className={`learnMore-images-container-text`}>{text}</h3>
        </div>
      </a>
    )
  }
}

export default ImageBox
