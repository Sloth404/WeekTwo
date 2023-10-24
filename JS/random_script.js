function resetElements() {
    const elements = document.querySelectorAll(".grid-item-bottom");

    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.remove("blue")
    }
}

function getRandomElement() {
    const elements = document.querySelectorAll(".grid-item-bottom");
    const randomNum = Math.floor(Math.random() * elements.length);
    return elements[randomNum];
}

function changeRandomBackgroundColor() {
    const randomElement= getRandomElement();

    randomElement.classList.add("blue");
}

function init() {
    setInterval(resetElements, 10000)
    setInterval(changeRandomBackgroundColor, 10000)
}

window.onload = init;