import React, { Component } from 'react'
import FlipUnitContainer from './FlipUnitContainer'
import './flipClock.scss'

class FlipClock extends Component {
	
  constructor(props) {
		super(props);
		this.state = {
			hours: 0,
			hoursShuffle: true,
			minutes: 0,
			minutesShuffle: true,
			seconds: 0,
			secondsShuffle: true
		};
	}
  
	componentDidMount() {
		this.timerID = setInterval(
			() => this.updateTime(),
			1000
		);
	}
  
	componentWillUnmount() {
		clearInterval(this.timerID);
	}
  
	updateTime() {
    const dateFuture = new Date("Jun 5, 2019 00:00:00").getTime();
		// get new date
    const time = new Date();
    // get total seconds between the times
    let delta = Math.abs(dateFuture - time) / 1000;

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400);
    delta -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    // currently unused
    const seconds = delta % 60;  // in theory the modulus is not required
		// set time units
		// const hours = time.getHours();
		// const minutes = time.getMinutes();
		// const seconds = time.getSeconds();
		// on days chanage, update dayss and shuffle state
		if( days !== this.state.hours) {
      // Note this usage of days in the hours field is a quirk of combining the old clock functionality with the countdown
      const hoursShuffle = !this.state.hoursShuffle;
			this.setState({
				hours: days,
				hoursShuffle
			});
		}
		// on hours chanage, update hours and shuffle state
		if( hours !== this.state.minutes) {
      const minutesShuffle = !this.state.minutesShuffle;
      // Note this usage of hours in the minutes field is a quirk of combining the old clock functionality with the countdown
			this.setState({
				minutes: hours,
				minutesShuffle
			});
		}
		// on minute chanage, update minutes and shuffle state
		if( minutes !== this.state.seconds) {
      const secondsShuffle = !this.state.secondsShuffle;
      // Note this usage of minutes in the seconds field is a quirk of combining the old clock functionality with the countdown
			this.setState({
				seconds: minutes,
				secondsShuffle
			});
		}
	}
  
	render() {
    
    // state object destructuring
		const { 
      hours, 
      minutes, 
      seconds, 
      hoursShuffle, 
      minutesShuffle, 
      secondsShuffle 
    } = this.state;
		
    return(
			<div className={'flipClock'}>
				<FlipUnitContainer 
					unit={'hours'}
					digit={hours} 
					shuffle={hoursShuffle} 
					/>
				<FlipUnitContainer 
					unit={'minutes'}
					digit={minutes} 
					shuffle={minutesShuffle} 
					/>
				<FlipUnitContainer 
					unit={'seconds'}
					digit={seconds} 
					shuffle={secondsShuffle} 
					/>
			</div>
		);
	}
}

export default FlipClock
