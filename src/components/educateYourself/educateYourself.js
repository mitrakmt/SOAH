import React, { Component } from 'react'

import ScrollAnimation from 'react-animate-on-scroll'

import './educateYourself.scss'

class EducateYourself extends Component {
  render() {
    return (
      <div className="educateYourself">
        <div className="educateYourself-header">
          <h3 className="educateYourself-header-title">Educate Yourself</h3>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={2}
            delay={1}
            className="educateYourself-header-line"
          />
        </div>
        <div className="educateYourself-body">
          <h4 className="educateYourself-text">
            The rhino poaching crisis is a global problem that has arisen from a
            complex set of inextricably linked issues. The more we can do to
            educate ourselves on the current situation, the better equipped we
            will be to tackle the problem. Please take a moment to read through
            the pages below and learn more about this urgent issue.
          </h4>
        </div>
      </div>
    )
  }
}

export default EducateYourself
