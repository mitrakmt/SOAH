import React, { Component } from 'react'

import '../fundTheCause.scss'

class LargeBox extends Component {
  render() {
    const { link, image, text, buttonText, donateLink } = this.props.data
    return (
      <div className={`fundTheCause-images-largeContainer`}>
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
            className="fundTheCause-images-largeContainer-logo"
          />
        </a>
        <h3 className={`fundTheCause-images-largeContainer-text`}>{text}</h3>
        {buttonText && (
          <a
            className="fundTheCause-images-largeContainer-button link"
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

export default LargeBox
