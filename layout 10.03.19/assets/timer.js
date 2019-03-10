let timer = document.getElementById("timer");
let hoursTimer = document.createElement("span");
let minutesTimer = document.createElement("span");
let secondsTimer = document.createElement("span");

let timerId = setInterval(updateTimer, 1000);
let currentTimer = 0;

function showTimerHours() {
  var hours = currentTimer;
  return hours < 10 ? "0" + hours : hours;
}

function showTimerMinutes() {
  var minutes = currentTimer;
  return minutes < 10 ? "0" + minutes : minutes;
}

function showTimerSeconds() {
  var seconds = currentTimer;
  return seconds < 10 ? "0" + seconds : seconds;
}

timer.children[0].innerHTML = showTimerHours();
timer.children[1].innerHTML = showTimerMinutes();
timer.children[2].innerHTML = showTimerSeconds();

function updateTimer() {

  ++currentTimer;

  var hours = Math.floor(currentTimer / 3600);
  var minutes = Math.floor((currentTimer - hours * 3600) / 60);
  var seconds = currentTimer - (hours * 3600 + minutes * 60);

  if (timer.children[0].textContent != checkFunction(hours)) {
    timer.children[0].innerHTML = checkFunction(hours);
  }

  if (timer.children[1].textContent != checkFunction(minutes)) {
    timer.children[1].innerHTML = checkFunction(minutes);
  }

  if (timer.children[2].textContent != checkFunction(seconds)) {
    timer.children[2].innerHTML = checkFunction(seconds);
  }
  return currentTimer;
}

let checkFunction = valueTimer => valueTimer < 10 ? "0" + valueTimer : valueTimer;

/// restart timer esc

document.addEventListener('keydown', restartTimer);

function restartTimer() {
  if (event.keyCode == 27) {
    timer.children[0].innerHTML = '00';
    timer.children[1].innerHTML = '00';
    timer.children[2].innerHTML = '00';
    currentTimer = 0;
  };
};

/// mouse

timer.addEventListener('mouseover', stopTimer);
timer.addEventListener('mouseout', runTimer);

function stopTimer() {
  if (event.type == 'mouseover') {
    clearInterval(timerId);
  }
}

function runTimer() {
  if (event.type == 'mouseout') {
    timerId = setInterval(updateTimer, 1000);
  }
}