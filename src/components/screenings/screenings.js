import React, { Component } from 'react'

import HeaderImage from 'images/screenings_background.jpg'
import Quote from 'components/quote/grayQuote'
import ImageCarousel from 'components/image-carousel/imageCarousel'

import Image1 from 'images/world-rhino-day/img_9498.jpg'
import Image2 from 'images/world-rhino-day/img_9657.jpg'
import Image3 from 'images/world-rhino-day/img_9711.jpg'
import Image4 from 'images/world-rhino-day/img_9740.jpg'
import Image5 from 'images/world-rhino-day/img_9747.jpg'
import Image6 from 'images/world-rhino-day/img_9770.jpg'
import Image7 from 'images/world-rhino-day/img_9789.jpg'

import './screenings.scss'

class Screenings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
    }

    // ID IS REQUIRED
    this.upcomingScreenings = [
      {
        line1: 'SEDONA INTERNATIONAL FILM FESTIVAL',
        line2: 'WORLD PREMIERE',
        line3: 'FEBRUARY 28 AT 7:20 PM | MARCH 2 AT 10AM',
        id: 0,
      },
      {
        line1: 'RAPIDLION FILM FESTIVAL',
        line2: 'UK PREMIERE',
        line3: 'MARCH 3 AT 10:30AM',
        id: 1,
      },
      {
        line1: 'MANCHESTER FILM FESTIVAL',
        line2: 'UK PREMIERE',
        line3: 'MARCH 8 AT 6PM',
        id: 2,
      },
      {
        line1: 'ENVIRONMENTAL FILM FESTIVAL',
        line2: 'IN THE NATION’S CAPITAL',
        line3: 'MARCH 16 AT 2PM',
        id: 3,
      },
    ]

    // ID IS REQUIRED
    this.pastScreenings = [
      {
        line1: 'WORLD RHINO DAY',
        line2: 'PRIVATE SCREENING',
        line3: 'SEPTEMBER 22, 2018',
        id: 0,
      },
    ]
    this.images = [
      {
        src: Image1,
        alt: 'Viewing',
      },
      {
        src: Image2,
        alt: 'OnStage',
      },
      {
        src: Image3,
        alt: 'Panel',
      },
      {
        src: Image4,
        alt: 'Panel2',
      },
      {
        src: Image5,
        alt: 'Panel3',
      },
      {
        src: Image6,
        alt: 'Panel4',
      },
      {
        src: Image7,
        alt: 'Cast',
      },
    ]
  }

  submitEmail = () => {
    // submit this.state.email
    this.setState({
      email: '',
    })
  }

  updateEmail = event => {
    this.setState({
      email: event.target.value,
    })
  }

  render() {
    const { sectionName } = this.props

    return (
      <div className={`${sectionName}`}>
        <h3 className="screenings-pageTitle">Screenings</h3>
        <img
          src={HeaderImage}
          className="screenings-headerImage"
          alt="Two men staring at a screen"
        />
        <div className="screenings-body screenings-body-firstCard">
          <div className="screenings-body-header">
            <h3 className="screenings-body-header-upcomingTitle">
              Upcoming Screenings
            </h3>
            <span className="screenings-body-header-line" />
          </div>
          <div className="screenings-body-body">
            {this.upcomingScreenings.map(screening => (
              <div
                className="screenings-body-screening"
                key={`upcomingScreenings-${screening.id}`}
              >
                <Quote />
                <h4 className="screenings-body-text">
                  {screening.line1}
                  <br />
                  {screening.line2}
                  <br />
                  {screening.line3}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="screenings-body">
          <div className="screenings-body-header">
            <h3 className="screenings-body-header-pastTitle">
              Past Screenings
            </h3>
            <span className="screenings-body-header-line" />
          </div>
          <div className="screenings-body-body">
            {this.pastScreenings.map(screening => (
              <div
                className="screenings-body-screening"
                key={`pastScreenings-${screening.id}`}
              >
                <Quote />
                <h4 className="screenings-body-text">
                  {screening.line1}
                  <br />
                  {screening.line2}
                  <br />
                  {screening.line3}
                </h4>
              </div>
            ))}
          </div>
        </div>

        <div className="screenings-infoSection">
          <div className="screenings-infoSection-funding">
            <div className="screenings-infoSection-funding-text">
              <h3>
                WE ARE CURRENTLY RAISING FUNDS TO RELEASE SIDES OF A HORN AROUND
                THE WORLD THROUGH A GLOBAL ACTIVATION CAMPAIGN. PLEASE CONSIDER
                MAKING A GIFT!
              </h3>
            </div>
            <div className="screenings-infoSection-funding-text">
              <h3>
                IF YOU WOULD LIKE TO HOST YOUR OWN PRIVATE SCREENING EVENT,
                PLEASE CONTACT{' '}
                <a
                  href="mailto:INFO@WHIRLOWPARKPICTURES.COM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="screenings-infoSection-funding-email"
                >
                  INFO@WHIRLOWPARKPICTURES.COM
                </a>
                .
              </h3>
            </div>
          </div>
          <div className="screenings-infoSection-box">
            <a
              href="https://secure.awf.org/rhino-movie?utm_source=1901kickstarter&utm_medium=referral&utm_campaign=fy19soah"
              target="_blank"
              className="screenings-infoSection-box-header"
              rel="noopener noreferrer"
            >
              <h4 className="screenings-infoSection-box-header">
                Donate to Sides of a Horn
              </h4>
            </a>
          </div>
          <div className="screenings-infoSection-box">
            <div className="screenings-infoSection-box-column">
              <h4 className="screenings-infoSection-box-column-text">
                be first to receive important updates and notifications of the
                film release
              </h4>
            </div>
            <div className="screenings-infoSection-box-column">
              <input
                className="screenings-infoSection-box-column-input"
                value={this.state.email}
                onChange={this.updateEmail}
                placeholder="Email"
              />
              <button
                className="screenings-infoSection-box-column-submit"
                onClick={this.submitEmail}
              >
                Count Me In
              </button>
            </div>
          </div>
        </div>
        <ImageCarousel
          images={this.images}
          keyName="screeningsImageCarousel"
          title="LOS ANGELES PRIVATE SCREENING - WORLD RHINO DAY 2018"
        />
      </div>
    )
  }
}

export default Screenings
