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

    // UPCOMING SCREENINGS
    // Note: ID IS REQUIRED AND MUST BE UNIQUE
    this.upcomingScreenings = [
      {
        link: 'https://cinemambiente.it/movie/sides-of-a-horn/',
        line1: 'CinemAmbiente',
        line2: 'JUNE 3, 2019 at 7pm',
        location: 'Turin',
      },
      {
        link: 'https://www.inyfilmfest.com/',
        line1: 'International New York Film Festival',
        line2: 'JUNE 14-15, 2019',
        location: 'New York',
        id: 503,
      },
      {
        link: 'https://theatrebox.com/',
        line1: 'TCL TheatreBox',
        line2: 'JULY 10, 2019',
        location: 'San Diego',
        id: 504,
      },
      {
        link: 'http://ccadiff.ukzn.ac.za/',
        line1: 'Durban International Film Festival',
        line2: 'JULY 18 - 28, 2019',
        location: 'Durbin'
      },
      {
        link: 'https://stonybrookfilmfestival.com/',
        line1: 'Stony Brook Film Festival',
        line2: 'JULY 21, 2019 at 4pm',
        location: 'Stony Brook, NY'
      },
      {
        link: 'https://www.hiltonfestival.co.za/2019/',
        line1: 'Hilton Arts Festival',
        line2: 'SEPTEMBER 13-15, 2019',
        location: 'Hilton, South Africa',
        id: 505,
      },
      {
        link: 'https://www.hiltonfestival.co.za/2019/jongosi-youth-day/',
        line1: 'Jongosi Youth Day',
        line2: 'SEPTEMBER 13, 2019',
        location: 'Hilton, South Africa',
        id: 506,
      },
      {
        link: 'https://www.wscsummit.com/',
        line1: 'Wildlife, Safari, and Conservation Summit',
        line2: 'OCTOBER 11, 2019',
        location: 'Harrogate',
        id: 508,
      },
      {
        link: 'https://wildlifesafarishow.com/',
        line1: 'Wildlife & Safari Travel Show',
        line2: 'OCTOBER 12-13, 2019',
        location: 'Harrogate',
        id: 509,
      },
      {
        link: 'https://www.wcff.org/nyc-festival-2019/',
        line1: 'WILDLIFE CONSERVATION FILM FESTIVAL',
        line2: 'OCTOBER 17-27, 2019',
        location: 'New York',
        line3: '',
        id: 510,
      },
      {
        link: 'https://www.cifft.com/cifft-festival/arttur-international-tourism-film-festival/',
        line1: 'ART&TUR - International Tourism Film Festival',
        line2: 'OCTOBER 22 - 25, 2019',
        location: 'Torres Vedras'
      },
      {
        link: 'http://www.greeninitiatives.cn/',
        line1: 'Green Initiatives ',
        line2: 'Dates TBD',
        location: 'Shanghai',
        id: 507,
      },
    ]

    // PAST SCREENINGS
    // Note: ID IS REQUIRED AND MUST BE UNIQUE
    this.pastScreenings = [
      {
        link: 'http://www.conservation-lab.com/',
        line1: 'CONSERVATION LAB',
        line2: 'MAY 11, 2019',
        line3: '',
        location: 'Cape Town',
        id: 502,
      },
      {
        link: 'http://www.philadelphiaindependentfilmfestival.com/ticket/',
        line1: 'Philadelphia Independent Film Festival',
        line2: 'MAY 11, 2019 at 4:45pm',
        location: 'Philadelphia',
        id: 501,
      },
      {
        link: 'https://explorers.org/about/about_the_club',
        line1: 'The Explorers Club',
        line2: 'MAY 6th, 2019 at 6pm',
        location: 'New York',
        id: 500,
      },
      {
        link: 'https://www.vegaschool.com/',
        line1: 'Vega',
        line2: 'APRIL 29, 2019 at 4:45pm',
        location: 'Durban',
        id: 499,
      },
      {
        link: 'https://twitter.com/sidesofahorn/status/1115671645845196800',
        line1: 'African Wildlife Foundation Private Screening',
        line2: 'APRIL 26, 2019 at 6:30pm',
        location: 'Houston',
        id: 989,
      },
      {
        link:
          'https://www.eventbrite.com/e/film-screening-sides-of-a-horn-tickets-60214478125',
        line1: 'African Wildlife Foundation & Modern Art Museum',
        line2: 'APRIL 25, 2019 at 7pm',
        location: 'Fort Worth',
        id: 990,
      },
      {
        link: 'https://wildlifefilms.org/films/2019-official-selections/',
        line1: 'INTERNATIONAL WILDLIFE FILM FESTIVAL',
        line2: 'APRIL 17, 2019 at 3pm | APRIL 18, 2019 at 3pm',
        line3: 'Winner: Best Short Film',
        location: 'Missoula',
        id: 992,
      },
      {
        link:
          'https://www.eventbrite.com/e/documentary-sides-of-a-horn-tickets-59279408306?aff=utm_source%3Deb_email%26utm_medium%3Demail%26utm_campaign%3Dnew_event_email&utm_term=eventurl_text&fbclid=IwAR34Qvkwk2fvb77omcBSJ_JbKaIOb7tTwptPDa_eWlYwz8lTO-mIDj8Ej6Q',
        line1: 'African Wildlife Foundation & Documentary Events',
        line2: 'APRIL 24, 2019 at 7pm',
        location: 'Dallas',
        id: 996,
      },
      {
        link:
          'https://www.facebook.com/DGCOGG/photos/a.710896752398727/1241088706046193/?type=3&theater',
        line1: "Durban Girls' College",
        line2: 'APRIL 24, 2019',
        location: 'Durban',
        id: 997,
      },
      {
        line1: 'ENVIRONMENTAL FILM FESTIVAL IN THE NATION’S CAPITAL',
        line2: 'MARCH 16, 2019 AT 2PM',
        link: 'https://dceff.org/film/sides-of-a-horn/',
        location: 'Washington, D.C.',
        id: 998,
      },
      {
        line1: 'Lake Highland Preparatory School ',
        line2: 'MARCH 14, 2019',
        link: 'https://www.facebook.com/sidesofahorn/videos/468460417023472/',
        location: 'Orlando',
        id: 999,
      },
      {
        line1: 'MANCHESTER FILM FESTIVAL',
        line2: 'UK PREMIERE',
        line3: 'MARCH 8, 2019',
        line4: 'Winner: Best International Film',
        link: 'http://www.maniff.com/sides-of-a-horn/',
        location: 'Manchester',
        id: 1000,
      },
      {
        line1: 'SEDONA INTERNATIONAL FILM FESTIVAL',
        line2: 'WORLD PREMIERE',
        line3: 'FEBRUARY 28, 2019 | MARCH 2, 2019',
        line4: 'Winner: Best Short Film (Audience Choice)',
        link:
          'https://prod5.agileticketing.net/websales/pages/info.aspx?evtinfo=86966~d5a11db3-b3ba-440c-a208-47197fa86ccd&',
        location: 'Sedona',
        id: 1001,
      },
      {
        line1: 'RAPIDLION FILM FESTIVAL',
        line2: 'SOUTH AFRICAN PREMIERE',
        line3: 'MARCH 3, 2019',
        link:
          'http://rapidlion.co.za/rapidlion-films-2019-schedule/?filmcategory=3%20Mannie%20Manim&filmdate=2019-03-07',
        location: 'Johannesburg',
        id: 1002,
      },
      {
        line1: 'WORLD RHINO DAY',
        line2: 'PRIVATE SCREENING',
        line3: 'SEPTEMBER 22, 2018',
        link: 'https://twitter.com/tobywosskow/status/1044104807726821377',
        location: 'Los Angeles & Johannesburg',
        id: 1003,
      },
      {
        link: 'http://saindiefilmfest.co.za/',
        line1: 'SA Indie Film Fest',
        line2: 'MAY 18, 2019 |  MAY 26, 2019',
        location: 'Johannesburg & Cape Town'
      }
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
                  {screening.location}
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
                  {screening.location}
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
                    action="https://rhinomovie.us20.list-manage.com/subscribe/post?u=a75342157d8da7f50765bef40&amp;id=2ba1416af8"
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
