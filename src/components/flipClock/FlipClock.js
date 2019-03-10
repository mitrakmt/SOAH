import React, { Component } from 'react'
import FlipUnitContainer from './FlipUnitContainer'
import countdown from './countdown'
import './flipClock.scss'

class FlipClock extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: 0,
      daysShuffle: true,
      hours: 0,
      hoursShuffle: true,
      minutes: 0,
      minutesShuffle: true,
      seconds: 0,
      secondsShuffle: true,
    }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateTime(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  updateTime() {
    // Movie release date
    const { days, hours, minutes, seconds } = countdown('06/03/2019 00:00:00')
    let {
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state
    daysShuffle = days !== this.state.days ? !daysShuffle : daysShuffle
    hoursShuffle = hours !== this.state.hours ? !hoursShuffle : hoursShuffle
    minutesShuffle =
      minutes !== this.state.minutes ? !minutesShuffle : minutesShuffle
    secondsShuffle =
      seconds !== this.state.seconds ? !secondsShuffle : secondsShuffle

    this.setState({
      days,
      daysShuffle,
      hours,
      hoursShuffle,
      minutes,
      minutesShuffle,
      seconds,
      secondsShuffle,
    })
  }

  render() {
    // state object destructuring
    const {
      days,
      hours,
      minutes,
      seconds,
      daysShuffle,
      hoursShuffle,
      minutesShuffle,
      secondsShuffle,
    } = this.state

    return (
      <div className={'flipClock'}>
        <div className="flipClock-cardContainer">
          <p className="flipClockLabel">DAYS</p>
          <FlipUnitContainer unit={'days'} digit={days} shuffle={daysShuffle} />
        </div>
        <div className="flipClock-cardContainer">
          <p className="flipClockLabel">HOURS</p>
          <FlipUnitContainer
            unit={'hours'}
            digit={hours}
            shuffle={hoursShuffle}
          />
        </div>
        <div className="flipClock-cardContainer">
          <p className="flipClockLabel">MINUTES</p>
          <FlipUnitContainer
            unit={'minutes'}
            digit={minutes}
            shuffle={minutesShuffle}
          />
        </div>
        <div className="flipClock-cardContainer">
          <p className="flipClockLabel">SECONDS</p>
          <FlipUnitContainer
            unit={'seconds'}
            digit={seconds}
            shuffle={secondsShuffle}
          />
        </div>
      </div>
    )
  }
}

export default FlipClock
