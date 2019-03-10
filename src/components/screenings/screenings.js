import React, { Component } from 'react'

import HeaderImage from 'images/screenings_background.jpg'
import Quote from 'components/quote/grayQuote'
import ImageCarousel from 'components/image-carousel/imageCarousel'
import ScrollAnimation from 'react-animate-on-scroll'

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
        line1: 'MANCHESTER FILM FESTIVAL',
        line2: 'UK PREMIERE',
        line3: 'MARCH 8 AT 6PM',
        link: 'http://www.maniff.com/sides-of-a-horn/',
        id: 1,
      },
      {
        line1: 'ENVIRONMENTAL FILM FESTIVAL',
        line2: 'IN THE NATION’S CAPITAL',
        line3: 'MARCH 16 AT 2PM',
        link: 'https://dceff.org/film/sides-of-a-horn/',
        id: 2,
      },
      {
        link: 'https://wildlifefilms.org/films/2019-official-selections/',
        line1: 'INTERNATIONAL WILDLIFE FILM FESTIVAL',
        line2: 'April 13 at 7pm | April 19 at 3:45pm',
        line3: '',
        id: 3,
      },
    ]

    // ID IS REQUIRED
    this.pastScreenings = [
      {
        line1: 'SEDONA INTERNATIONAL FILM FESTIVAL',
        line2: 'WORLD PREMIERE',
        line3: 'FEBRUARY 28 AT 7:20 PM | MARCH 2 AT 10AM',
        line4: 'Winner: Best Short Film (Audience Choice)',
        link:
          'https://prod5.agileticketing.net/websales/pages/info.aspx?evtinfo=86966~d5a11db3-b3ba-440c-a208-47197fa86ccd&',
        id: 0,
      },
      {
        line1: 'RAPIDLION FILM FESTIVAL',
        line2: 'SOUTH AFRICAN PREMIERE',
        line3: 'MARCH 3 AT 10:30AM',
        link:
          'http://rapidlion.co.za/rapidlion-films-2019-schedule/?filmcategory=3%20Mannie%20Manim&filmdate=2019-03-07',
        id: 1,
      },
      {
        line1: 'WORLD RHINO DAY',
        line2: 'PRIVATE SCREENING',
        line3: 'SEPTEMBER 22, 2018',
        link: 'https://twitter.com/tobywosskow/status/1044104807726821377',
        id: 2,
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
    setTimeout(() => {
      this.setState({
        email: '',
      })
    }, 1000)
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
        <link
          href="//cdn-images.mailchimp.com/embedcode/horizontal-slim-10_7.css"
          rel="stylesheet"
          type="text/css"
        />
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
            <ScrollAnimation
              animateIn="fadeIn"
              duration={2}
              delay={1}
              className="screenings-body-header-line"
            />
          </div>
          <div className="screenings-body-body">
            {this.upcomingScreenings.map(screening => (
              <div
                className="screenings-body-screening"
                key={`upcomingScreenings-${screening.id}`}
              >
                <Quote />
                <h4 className="screenings-body-text">
                  <a
                    className="screenings-link"
                    href={screening.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {screening.line1}
                  </a>
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
            <ScrollAnimation
              animateIn="fadeIn"
              duration={2}
              delay={1}
              className="screenings-body-header-line"
            />
          </div>
          <div className="screenings-body-body">
            {this.pastScreenings.map(screening => (
              <div
                className="screenings-body-screening"
                key={`pastScreenings-${screening.id}`}
              >
                <Quote />
                <h4 className="screenings-body-text">
                  <a
                    className="screenings-link"
                    href={screening.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {screening.line1}
                  </a>
                  <br />
                  {screening.line2}
                  <br />
                  {screening.line3}
                  {screening.line4 && <br />}
                  {screening.line4 && screening.line4}
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
              <h4 className="screenings-infoSection-box-column-text screenings-infoSection-box-column-text-center">
                be first to receive important updates and notifications of the
                film release
              </h4>
            </div>
            <div className="screenings-infoSection-box-column">
              <div className="latest-form" style={{ width: '100%' }}>
                <div id="mc_embed_signup">
                  <form
                    action="https://whirlowparkpictures.us18.list-manage.com/subscribe/post?u=6ffdb5207ab2707139f3c06b9&amp;id=6aad220de9"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    noValidate
                  >
                    <div
                      id="mc_embed_signup_scroll"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '5px',
                      }}
                    >
                      <input
                        type="email"
                        className="screenings-infoSection-box-column-input"
                        placeholder="Email Address"
                        name="EMAIL"
                        value={this.state.email}
                        id="mce-EMAIL"
                        onChange={this.updateEmail}
                        required
                      />
                      <button
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        className="screenings-infoSection-box-column-submit"
                        onClick={this.submitEmail}
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
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
