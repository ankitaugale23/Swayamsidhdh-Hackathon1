/*****************countdown********************/
function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.now();
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    seconds: seconds,
  };
}

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);

  function updateClock() {
    var t = getTimeRemaining(endtime);
    clock.innerHTML = `${("0" + t.days).slice(-2)}:${("0" + t.hours).slice(
      -2
    )}:${("0" + t.minutes).slice(-2)}:${("0" + t.seconds).slice(-2)}`;

    if (t.total <= 0) {
      clearInterval(timeinterval);
      clock.innerHTML = ("0" + t.days).slice(-2);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// count down timer:
var deadline = "July 10 2020 08:00:00 GMT+0530";

initializeClock("time-r", deadline);

/******************* ***********************/
