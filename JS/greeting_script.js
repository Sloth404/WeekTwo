function setGretting() {
    const msgElement = document.getElementById("welcome-text");
    const currTime = new Date();
    const currHour = currTime.getHours();

    let greeting;

    if(currHour >= 0 && currHour < 10) {
        console.log("morning");
        greeting = "greeting_morning";
    } else if (currHour >= 10 && currHour < 18) {
        console.log("day");
        greeting = "greeting_day";
    } else {
        console.log("evening");
        greeting = "greeting_evening";
    }

    console.log(greeting);
    msgElement.setAttribute("data_translate", greeting);
    console.log("",msgElement.getAttribute("data_translate"))
}

function init() {
    setGretting();
    setInterval(setGretting, 60000);
}

window.onload = init;