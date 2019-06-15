import React, { Component } from 'react'

import '../fundTheCause.scss'

class ImageBox extends Component {
  render() {
    const { link, image, text, buttonText, redButton } = this.props.data
    return (
      <div className={`fundTheCause-images-container`}>
        <img
          src={image}
          alt="logo"
          className="fundTheCause-images-container-logo"
        />
        <h3 className={`fundTheCause-images-container-text`}>{text}</h3>
        {buttonText && (
          <a
            className="fundTheCause-images-container-button link"
            style={redButton ? { backgroundColor: '#D0021B' } : {}}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>{buttonText}</h3>
          </a>
        )}
      </div>
    )
  }
}

export default ImageBox
