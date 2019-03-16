let clock = document.getElementById('clock');
let date = document.getElementById('date');

// clock

function showCurrentHours() {
    let currentDate = new Date();
    let currentHours = currentDate.getHours();
    return currentHours < 10 ? `0${currentHours}` : currentHours;
}

function showCurrentMinutes() {
    let currentDate = new Date();
    let currentMinutes = currentDate.getMinutes();
    return currentMinutes < 10 ? `0${currentMinutes}` : currentMinutes;
}

function showCurrentSeconds() {
    let currentDate = new Date();
    let currentSeconds = currentDate.getSeconds();
    return currentSeconds < 10 ? `0${currentSeconds}` : currentSeconds;
}

clock.children[0].innerHTML = showCurrentHours();
clock.children[1].innerHTML = showCurrentMinutes();
clock.children[2].innerHTML = showCurrentSeconds();

// date

function showCurrentYear() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return currentYear;
}

function showCurrentMonth() {
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth() + 1;
    return currentMonth < 10 ? `0${currentMonth}` : currentMonth;
}

function showCurrentDateNow() {
    let currentDate = new Date();
    let currentDateNow = currentDate.getDate();
    return currentDateNow < 10 ? `0${currentDateNow}` : currentDateNow;
}

function showCurrentDay() {
    let currentDate = new Date();
    let weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    let currentDay = currentDate.getDay();
    return weekDays[currentDay - 1];
}

date.children[0].innerHTML = showCurrentDay();
date.children[1].innerHTML = showCurrentDateNow();
date.children[2].innerHTML = showCurrentMonth();
date.children[3].innerHTML = showCurrentYear();

function checkDate(valueContent, valueFuncDate) {
    if (valueContent.textContent !== valueFuncDate) {
        valueContent.innerHTML = valueFuncDate;
    }
}

setInterval(() => {
    checkDate(clock.children[0], showCurrentHours());
    checkDate(clock.children[1], showCurrentMinutes());
    checkDate(clock.children[2], showCurrentSeconds());
    checkDate(date.children[0], showCurrentDay());
    checkDate(date.children[1], showCurrentDateNow());
    checkDate(date.children[2], showCurrentMonth());
    checkDate(date.children[3], showCurrentYear());
}, 1000);
