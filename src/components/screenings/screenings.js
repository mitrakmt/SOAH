import React, { Component } from 'react'

import HeaderImage from 'images/screenings_background.jpg'
import Quote from 'components/quote/quote'

import './screenings.scss'

class Screenings extends Component {
  render() {
    return (
      <div className="screenings">
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
            <div className="screenings-body-screening">
              <Quote />
              <h4 className="screenings-body-text">
                SEDONA INTERNATIONAL FILM FESTIVAL
                <br />
                WORLD PREMIERE
                <br />
                FEBRUARY 28 AT 7:20 PM | MARCH 2 AT 10AM
              </h4>
            </div>
            <div className="screenings-body-screening">
              <Quote />
              <h4 className="screenings-body-text">
                RAPIDLION FILM FESTIVAL
                <br />
                SOUTH AFRICA PREMIERE
                <br />
                MARCH 3 AT 10:30AM
              </h4>
            </div>
            <div className="screenings-body-screening">
              <Quote />
              <h4 className="screenings-body-text">
                MANCHESTER FILM FESTIVAL
                <br />
                UK PREMIERE
                <br />
                MARCH 8 AT 6PM
              </h4>
            </div>
            <div className="screenings-body-screening">
              <Quote />
              <h4 className="screenings-body-text">
                ENVIRONMENTAL FILM FESTIVAL
                <br />
                IN THE NATION’S CAPITAL
                <br />
                MARCH 16 AT 2PM
              </h4>
            </div>
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
            <div className="screenings-body-screening">
              <Quote />
              <h4 className="screenings-body-text">
                WORLD RHINO DAY
                <br />
                PRIVATE SCREENING
                <br />
                SEPTEMBER 22, 2018
              </h4>
            </div>
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
                PLEASE CONTACT INFO@WHIRLOWPARKPICTURES.COM.
              </h3>
            </div>
          </div>
          <div className="screenings-infoSection-box">
            <h4 className="screenings-infoSection-box-header">
              Donate to Sides of a Horn
            </h4>
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
                value="hi"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Screenings
