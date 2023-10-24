//JSON for translation
const translation = {
    en: {
        greeting_morning: "Good Morning",
        greeting_day: "Good Day",
        greeting_evening: "Good Evening",
        navigation_one: "HOME",
        navigation_two: "PRODUCTS",
        navigation_three: "EMPLOYEES",
        navigation_four: "ABOUT US",
        monday: "Monday",
        tuesday: "Tuesday",
        wednesday: "Wednesday",
        thursday: "Thursday",
        friday: "Friday",
        automatic: "Automatic",
        manuel: "Manuel",
        leather: "Leather",
        aluminium: "Aluminium",
        two_five: "250$",
        two: "200$",
        two_two: "220$",
        about_us: "About Us"
    },
    de: {
        greeting_morning: "Guten Morgen",
        greeting_day: "Guten Tag",
        greeting_evening: "Guten Abend",
        navigation_one: "START",
        navigation_two: "PRODUKTE",
        navigation_three: "MITARBEITER",
        navigation_four: "ÜBER UNS",
        monday: "Montag",
        tuesday: "Dienstag",
        wednesday: "Mittwoch",
        thursday: "Donnerstag",
        friday: "Freitag",
        automatic: "Automatisch",
        manuel: "Manuell",
        leather: "Leder",
        aluminium: "Aluminium",
        two_five: "250€",
        two: "200€",
        two_two: "220€",
        about_us: "Über Uns"
    }
}

function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();

    document.cookie = name + "=" + value + ";" + expires + ";path=/";
}

function getCookies(name) {
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
    return  "";
}

function updateTexts() {
    let lang = getCookies("language")
    const elements = document.querySelectorAll("[data-translate]");
    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translation[lang][key];
    });
}

function changeLanguage() {
    let lang = getCookies("language");

    if(lang.includes("de")) {
        lang = "en";
    } else {
        lang = "de";
    }

    setCookie("language", lang, 1);
    updateTexts();
    changeIcon();
}

function changeIcon() {
    const image = document.getElementById("img-lang");
    let lang = getCookies("language");

    if(lang.includes("de")) {
        image.src = "img/united-kingdom.png";
    } else {
        image.src = "img/germany.png";
    }
}

function checked() {
    const check = document.getElementById("mode-toggle-lang");
    let lang = getCookies("language");

    if(lang.includes("en")) {
        check.checked = true;
    }
}

function getLanguage() {
    let lang = getCookies("language");

    if(!lang) {
        lang = navigator.language;
        lang = lang.substring(0, 2);
        checked();
    } else {
        changeIcon();
    }

    setCookie("language", lang, 1);
    updateTexts();
}

function deleteAllCookies() {
    let cookies = document.cookie.split(";");

    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        let eqPos = cookie.indexOf("=");
        let name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
        document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
}

function init() {
    //deleteAllCookies();
    getLanguage();

    document.getElementById("mode-toggle-lang").addEventListener("change", function () {
        changeLanguage();
    })
}

window.onload = init;