import React, { Component } from 'react'

import Image1 from 'images/look-inside/SOAH_Still99.jpg'

import Quote from 'components/quote/quote'
import ImageCarousel from 'components/image-carousel/ImageCarousel'

import './lookInside.scss'

class LookInside extends Component {
  constructor(props) {
    super(props)
    this.state = {}

    this.images = []
  }
  render() {
    return (
      <div className="lookInside">
        <img src={Image1} alt="background" className="lookInside-background" />

        <ImageCarousel images={this.images} />
      </div>
    )
  }
}

export default LookInside
