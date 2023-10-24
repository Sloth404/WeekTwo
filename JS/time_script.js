function updateCurrentTime() {
    const currTimeElement = document.getElementById("time-id");
    const currDayElement = document.getElementById("date-id");
    const now = new Date();

    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');

    const daysOfWeek =["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const currDay = daysOfWeek[now.getDay()];

    const currTime = hours + ':' + minutes;

    currTimeElement.textContent = currTime;
    currDayElement.setAttribute("data_translate", currDay.toLowerCase());
}

function init() {
    updateCurrentTime()
    setInterval(updateCurrentTime, 60000)
}

window.onload = init;