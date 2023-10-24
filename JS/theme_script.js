function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));

    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookie(name) {
    const cookieName = name + "=";
    const cookies = document.cookie.split(";");

    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];

        while(cookie.charAt(0) === " ") {
            cookie = cookie.substring(1);
        }

        if(cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return "";
}

function enableLightMode() {
    document.body.classList.remove("darkMode");
    document.body.classList.add("lightMode");
    setCookie("darkmode", "false", 1)
}

function enableDarkMode() {
    document.body.classList.remove("lightMode");
    document.body.classList.add("darkMode");
    setCookie("darkmode", "true", 1)
}

function setStartTheme() {
    isDarkMode = getCookie("darkmode");
    if(isDarkMode.includes("false") || isDarkMode === "") {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

function setTheme() {
    isDarkMode = getCookie("darkmode");
    if(isDarkMode.includes("false")) {
        enableDarkMode();
    } else {
        enableLightMode()
    }
}

function init() {
    console.log("init");
    let isDarkMode = getCookie("darkmode");

    setStartTheme()

    document.getElementById("mode-toggle-theme").addEventListener("change", function () {
        if(this.checked) {
            setTheme();
        } else {
            setTheme()
        }
    });
}

window.onload = init;