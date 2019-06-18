import React, { Component } from 'react'

class Quote extends Component {
  render() {
    return (
      <svg
        width={this.props.medium ? '120' : '192'}
        height="70px"
        viewBox="0 0 24 41"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={
          this.props.medium
            ? {
                marginTop: 35,
                marginLeft: 20,
              }
            : { margin: '0px 20px' }
        }
      >
        <g
          id="Welcome"
          stroke="none"
          strokeWidth="1"
          fill="#fff"
          fillRule="evenodd"
          opacity="0.800334821"
        >
          <g id="Screenings-1" transform="translate(-178.000000, -728.000000)">
            <image
              id="Bitmap"
              x="173"
              y="728"
              width={this.props.medium ? '17' : '32'}
              height={this.props.medium ? '21' : '42'}
              xlinkHref="data:image/png;base64,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"
            />
          </g>
        </g>
      </svg>
    )
  }
}

export default Quote
