import React, { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'
import Quote from 'components/quote/quote'

import './pleaseDonate.scss'

class PleaseDonate extends Component {
  render() {
    return (
      <div className="pleaseDonate">
        <div className="pleaseDonate-header">
          <h3 className="pleaseDonate-header-title">Please Donate</h3>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={1}
            className="pleaseDonate-header-line"
          />
        </div>
        <div className="pleaseDonate-body">
          <h4 className="pleaseDonate-text">
            From saving orphaned rhino calves to investigating the crime
            syndicates that fund poachers, there are many incredible
            organizations that tackle the complex set of unique issues that give
            rise to poaching. Please take a moment to learn about your options
            and donate to the organization of your choice.
          </h4>
          <div className="pleaseDonate-row">
            <Quote medium />
            <h4 className="pleaseDonate-quote">
              What you do makes a difference, and you have to decide what kind
              of difference you want to make. The greatest danger to our future
              is apathy.
              <br />
              <br />- DR. JANE GOODALL
            </h4>
            <Quote medium />
          </div>
        </div>
      </div>
    )
  }
}

export default PleaseDonate
