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
    const initialSelectorPosition = window.innerWidth / 2 - 70
    // Used for selectImage() calculation
    this.initialSelectorPosition = initialSelectorPosition
    this.state = {
      selectedImageId: 0,
      selectorXTranslation: initialSelectorPosition,
      transitioning: false,
    }
  }

  selectImage = event => {
    const selectedImageId = parseInt(event.target.id)
    this.setState({
      transitioning: true,
    })

    // Setting to a specific image
    setTimeout(() => {
      this.setState({
        selectedImageId,
        transitioning: false,
        selectorXTranslation:
          this.initialSelectorPosition - 150 * selectedImageId,
      })
    }, 250)
  }

  nextImage = () => {
    const currentPage = this.state.selectedImageId
    this.setState({
      transitioning: true,
    })

    setTimeout(() => {
      if (currentPage === this.props.images.length - 1) {
        this.setState({
          selectedImageId: 0,
          transitioning: false,
        })
      } else {
        this.setState({
          selectedImageId: currentPage + 1,
          selectorXTranslation: this.state.selectorXTranslation - 150,
          transitioning: false,
        })
      }
    }, 250)
  }

  previousImage = () => {
    const currentPage = this.state.selectedImageId

    if (currentPage === 0) {
      // Go to last image in view
      this.setState({
        selectedImageId: this.props.images.length - 1,
        selectorXTranslation:
          this.initialSelectorPosition - 150 * (this.props.images.length - 1),
      })
      return
    } else {
      this.setState({
        selectedImageId: currentPage - 1,
        selectorXTranslation: this.state.selectorXTranslation + 150,
      })
    }
  }

  render() {
    const { keyName, images } = this.props

    return (
      <div className="imageCarousel">
        <div className="imageCarousel-mainImage-container">
          <a
            href={images[this.state.selectedImageId].src}
            className="imageCarousel-downloadIcon"
            download
          >
            <svg
              className="imageCarousel-downloadIcon-icon"
              viewBox="0 0 29 27"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g
                id="Welcome"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="Screenings-3"
                  transform="translate(-1352.000000, -53.000000)"
                  fill="#BE1E2D"
                  fillRule="nonzero"
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
            style={this.state.transitioning ? { opacity: 0 } : { opacity: 1 }}
            alt="Carousel"
            id="ImageCarouselSelectedImage"
          />
          <div className="imageCarousel-sideArrows">
            <h5
              className="imageCarousel-sideArrows-left"
              onClick={this.previousImage}
            >
              {`<`}
            </h5>
            <h5
              className="imageCarousel-sideArrows-right"
              onClick={this.nextImage}
            >
              {`>`}
            </h5>
          </div>
        </div>
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
          style={{
            transform: `translateX(${this.state.selectorXTranslation}px)`,
          }}
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
