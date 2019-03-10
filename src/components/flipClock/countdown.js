/**
 * Logic for counting down to a date.
 *
 * @param {*} date - date to countdown to. Should be a string like "06/03/2019 10:1 AM"
 */
const countDownTimer = (date) => {
  const end = new Date(date);

  const _second = 1000;
  const _minute = _second * 60;
  const _hour = _minute * 60;
  const _day = _hour * 24;
  return showRemaining();

  function showRemaining() {
    const now = new Date();
    const distance = end - now;
    if (distance < 0) {
      return {
        expired: true,
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      };
    }
    const days = Math.floor(distance / _day);
    const hours = Math.floor((distance % _day) / _hour);
    const minutes = Math.floor((distance % _hour) / _minute);
    const seconds = Math.floor((distance % _minute) / _second);
    return {
      expired: false,
      days,
      hours,
      minutes,
      seconds
    };
  }
};

export default countDownTimer;
