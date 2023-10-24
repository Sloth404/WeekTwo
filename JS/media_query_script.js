function checkMediaQuery() {
    const elements_one = document.querySelectorAll(".left");
    const elements_two = document.querySelectorAll(".right");
    const elements_three = document.querySelectorAll(".top");
    const elements_four = document.querySelectorAll(".bottom");

    if(window.innerWidth <= 1100) {
        elements_one.forEach(element => {
            element.classList.remove("left");
            element.classList.add("top");
        });
        elements_two.forEach(element => {
            element.classList.remove("right");
            element.classList.add("bottom");
        });
    } else {
        elements_three.forEach(element => {
            element.classList.remove("top");
            element.classList.add("left");
        });
        elements_four.forEach(element => {
            element.classList.remove("bottom");
            element.classList.add("right");
        });
    }
}

function init() {
    window.addEventListener("load", checkMediaQuery);
    window.addEventListener("resize", checkMediaQuery);
}

window.onload = init;