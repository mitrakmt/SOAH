import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './imageCarousel.scss'

class ImageCarousel extends Component {
  static propTypes = {
    images: PropTypes.array.isRequired,
    keyName: PropTypes.string.isRequired,
  }

  // The image object should includes props: src, title, alt

  constructor(props) {
    super(props)
    this.state = {
      selectedImageId: 0,
    }
  }

  selectImage = event => {
    this.setState({
      selectedImageId: parseInt(event.target.id),
    })
  }

  nextImage = () => {
    let currentPage = this.state.selectedImageId

    if (currentPage === this.props.images.length - 1) {
      this.setState({
        selectedImageId: 0,
      })
      return
    }

    this.setState({
      selectedImageId: ++currentPage,
    })
  }

  previousImage = () => {
    let currentPage = this.state.selectedImageId

    if (currentPage === 0) {
      this.setState({
        selectedImageId: this.props.images.length - 1,
      })
      return
    }

    this.setState({
      selectedImageId: --currentPage,
    })
  }

  render() {
    const { keyName, images } = this.props

    return (
      <div className="imageCarousel">
        <img
          src={images[this.state.selectedImageId].src}
          className="imageCarousel-mainImage"
          alt="Carousel"
        />
        <div className="imageCarousel-arrows">
          <h5
            className="imageCarousel-arrows-arrow"
            onClick={this.previousImage}
          >{`<`}</h5>
          <h5
            className="imageCarousel-arrows-arrow"
            onClick={this.nextImage}
          >{`>`}</h5>
        </div>
        {this.props.title && (
          <h5 className="imageCarousel-title">{this.props.title}</h5>
        )}
        <div className="imageCarousel-scroller">
          {images.map((image, index) => (
            <img
              src={image.src}
              key={`imageCarousel-${keyName}-${image.alt}`}
              className="imageCarousel-scroller-image"
              alt={image.alt}
              id={index}
              onClick={this.selectImage}
              style={
                this.state.selectedImageId === index
                  ? { border: '1px solid #a31f2b' }
                  : { border: '1px solid transparent' }
              }
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ImageCarousel
