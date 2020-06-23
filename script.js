"use strict";


//2. onload
window.addEventListener("load", setUp);

//12 named
function setUp() {

    dateTime();

    //5. a. create element
    //6. a. create and append link
    var link = document.createElement("link");
    link.setAttribute("rel", "Stylesheet");
    link.setAttribute("href", "insert.css");// 6. b. insert.css
    //5. b. append child
    document.head.appendChild(link);
    //12 Self invoking
    (function () {
        var modeBox = document.createElement("figure");
        modeBox.setAttribute("id", "styleButtons");
        document.getElementById("mode").appendChild(modeBox);

        darkSetup();
    })()
    //3
    var nav = document.querySelector("nav");
    var a = nav.querySelectorAll("a");
    for (var i = 0; i < a.length; i++) {
        switch (i) {
            case 0:
                a[i].innerHTML = "Main";
                break;
            case 1:
                a[i].innerHTML = "jQuery";
                break;
            case 2:
                a[i].innerHTML = "Event Listeners";
                break;
            case 3:
                a[i].innerHTML = "Submitting Forms";
                break;

        }
    }


}

function darkSetup() {
    var darkImage = document.createElement("img");//create element
    darkImage.setAttribute("src", "img/darkMode.png");
    darkImage.setAttribute("id", "modeSelector1");
    darkImage.style.border = "solid";
    darkImage.addEventListener("click", function () {
        darkMode();
    });
    //4. a. Mouse event
    darkImage.addEventListener("mouseover", function () {//12. anonympus
        document.getElementById("modeSelector1").style.borderColor = "blue";

    });
    darkImage.addEventListener("mouseleave", function () {
        document.getElementById("modeSelector1").style.borderColor = "gray";
    })
    var modeBox = document.getElementById("styleButtons");
    modeBox.appendChild(darkImage);//append child
}

function lightSetup() {
    var lightImage = document.createElement("img");
    lightImage.setAttribute("src", "img/lightMode.png");
    lightImage.setAttribute("id", "modeSelector2");
    lightImage.style.border = "solid";
    lightImage.addEventListener("click", function () {
        lightMode();
    });
    //4. a.
    lightImage.addEventListener("mouseover", function () {
        document.getElementById("modeSelector2").style.borderColor = "blue";

    });
    lightImage.addEventListener("mouseleave", function () {
        document.getElementById("modeSelector2").style.borderColor = "gray";
    });
    var modebox = document.getElementById("styleButtons");
    modebox.appendChild(lightImage);
}

function darkMode() {
    var modebox = document.getElementById("styleButtons");
    var darkButton = document.getElementById("modeSelector1");
    modebox.removeChild(darkButton);//5. c. remove child
    lightSetup();
    var body = document.body;
    body.classList.toggle("dark-mode");//6. modifing classlist
}

function lightMode() {
    var modebox = document.getElementById("styleButtons");
    var lightButton = document.getElementById("modeSelector2");
    modebox.removeChild(lightButton);
    darkSetup();
    var body = document.body;
    body.classList.toggle("dark-mode");
    var header = document.body.head;
}

function dateTime() {
    //7 Date()
    var today = new Date();
    //12 function expression
    var date = function () {
        var date = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();
        return date;
    }
    var time = today.getHours() + ":" + today.getMinutes();
    var pTime = document.getElementById("time");
    pTime.innerHTML = date() + " | " + time;
}