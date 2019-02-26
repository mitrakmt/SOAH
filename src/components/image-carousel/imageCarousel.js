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
        <a href={images[this.state.selectedImageId].src} download>
          <svg
            className="imageCarousel-downloadIcon"
            width="29px"
            height="27px"
            viewBox="0 0 29 27"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="Welcome"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g
                id="Screenings-3"
                transform="translate(-1352.000000, -53.000000)"
                fill="#BE1E2D"
                fill-rule="nonzero"
              >
                <g id="60932" transform="translate(1352.000000, 53.000000)">
                  <polygon
                    id="Shape"
                    points="12.7210216 0 12.7210216 11.3751226 8 11.3751226 15.5000163 21 23 11.3751226 18.2790111 11.3751226 18.2790111 0"
                  />
                  <polygon
                    id="Shape"
                    points="23.8538622 21.3568465 5.14613779 21.3568465 5.14613779 19 0 19 0 27 29 27 29 19 23.8538622 19"
                  />
                </g>
              </g>
            </g>
          </svg>
        </a>
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
