import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/blur.css'
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
        <LazyLoadImage
          src={images[this.state.selectedImageId].src}
          className={`imageCarousel-mainImage ${
            this.props.title ? 'imageCarousel-mainImage-withTitle' : ''
          }`}
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
        <div
          className={`imageCarousel-scroller ${
            this.props.title ? 'imageCarousel-scroller-withTitle' : ''
          }`}
        >
          {images.map((image, index) => (
            <LazyLoadImage
              key={`imageCarousel-${keyName}-${image.alt}`}
              src={image.src}
              className={`imageCarousel-scroller-image ${
                this.state.selectedImageId === index
                  ? 'imageCarousel-scroller-image-selected'
                  : ''
              }`}
              alt={image.alt}
              effect="blur"
              id={index}
              onClick={this.selectImage}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ImageCarousel
