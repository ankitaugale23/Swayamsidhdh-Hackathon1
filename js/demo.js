/**
 * demo.js
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2017, Codrops
 * http://www.codrops.com
 */
{
  setTimeout(() => document.body.classList.add("render"), 60);
  const navdemos = Array.from(document.querySelectorAll("nav.demos > .demo"));
  const total = navdemos.length;
  const current = navdemos.findIndex((el) =>
    el.classList.contains("demo--current")
  );
  imagesLoaded(".glitch__img", { background: true }, () => {
    document.body.classList.remove("loading");
    document.body.classList.add("imgloaded");
  });
}

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
  var daysSpan = clock.querySelector(".days");
  var hoursSpan = clock.querySelector(".hours");
  var minutesSpan = clock.querySelector(".minutes");
  var secondsSpan = clock.querySelector(".seconds");

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      daysSpan.innerHTML = "0";
      hoursSpan.innerHTML = "0".slice(-2);
      minutesSpan.innerHTML = "0".slice(-2);
      secondsSpan.innerHTML = "0".slice(-2);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}
// count down timer:
var deadline = "June 21 2020 08:00:00 GMT+0530";

initializeClock("clockdiv", deadline);

/******************* ***********************/
