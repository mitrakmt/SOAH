import React, { Component } from 'react'

import '../fundTheCause.scss'

class ImageBox extends Component {
  render() {
    const { link, image, text, buttonText, donateLink, title } = this.props.data
    return (
      <div className={`fundTheCause-images-container`}>
        {title && (
          <h3 className="fundTheCause-images-container-title">{title}</h3>
        )}
        {image && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img
              src={image}
              alt="logo"
              className="fundTheCause-images-container-logo"
            />
          </a>
        )}
        <h3 className={`fundTheCause-images-container-text`}>{text}</h3>
        {buttonText && (
          <a
            className="fundTheCause-images-container-button link"
            href={donateLink}
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
