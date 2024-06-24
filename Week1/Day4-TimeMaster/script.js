// 1. Time Object Basics:
const currTime = new Date();
const hours = currTime.getHours();
const minutes = currTime.getMinutes();
const seconds = currTime.getSeconds();
console.log(`Current time: ${hours}:${minutes}:${seconds}`);

// 2. Object-Oriented Clock:
function Clock(hours, minutes, seconds) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
}

Clock.prototype.formatToTwoDigits = function (number) {
  return number < 10 ? "0" + number : number.toString();
};

// 3. Time Formatting:
Clock.prototype.getFormattedTime = function () {
  const hours = this.formatToTwoDigits(this.hours);
  const minutes = this.formatToTwoDigits(this.minutes);
  const seconds = this.formatToTwoDigits(this.seconds);
  return `${hours}:${minutes}:${seconds}`;
};
const myClock = new Clock(hours, minutes, seconds);
console.log(myClock.getFormattedTime());

Clock.prototype.get12HourTime = function () {
  let hours = this.hours % 12;
  hours = hours ? hours : 12;
  const ampm = this.hours >= 12 ? "PM" : "AM";
  const hour = this.formatToTwoDigits(hours);
  const minute = this.formatToTwoDigits(this.minutes);
  const second = this.formatToTwoDigits(this.seconds);
  return `${hour}:${minute}:${second} ${ampm}`;
};
const myClock2 = new Clock(hours, minutes, seconds);
console.log(myClock2.get12HourTime());

// 4. Dynamic Display:
const clockDisplayEl = document.querySelector(".clock-display");

function HandleClock() {
  const timeZone = document.getElementById("timeZoneSelect").value;
  const now = getTimeWithTimeZone(timeZone);
  const clock = new Clock(now.getHours(), now.getMinutes(), now.getSeconds());
  clockDisplayEl.textContent = clock.getFormattedTime();
}

setInterval(HandleClock, 1000);

// 5. Clock Customization:
document
  .getElementById("timeZoneSelect")
  .addEventListener("change", HandleClock);

function getTimeWithTimeZone(timeZone) {
  let now;
  if (timeZone === "UTC") {
    now = new Date(new Date().toUTCString().slice(0, -4));
  } else if (timeZone === "GMT") {
    now = new Date(new Date().toLocaleString("en-US", { timeZone: "GMT" }));
  } else {
    now = new Date();
  }
  return now;
}

// 6. Advanced Challenge:
let alarmTimeout;

document.getElementById("setAlarm").addEventListener("click", function () {
  const alarmInput = document.getElementById("alarmTime").value;
  if (alarmInput) {
    const alarmTime = new Date();
    const [alarmHours, alarmMinutes] = alarmInput.split(":");
    alarmTime.setHours(alarmHours);
    alarmTime.setMinutes(alarmMinutes);
    alarmTime.setSeconds(0);

    const now = new Date();
    const timeToAlarm = alarmTime - now;

    if (timeToAlarm > 0) {
      clearTimeout(alarmTimeout);
      alarmTimeout = setTimeout(HandleAlarm, timeToAlarm);
      alert(`Alarm set for ${alarmInput}`);
    } else {
      alert("The specified time has already passed today.");
    }
  } else {
    alert("Please specify a valid time for the alarm.");
  }
});

function HandleAlarm() {
  alert("Alarm ringing!");
}
