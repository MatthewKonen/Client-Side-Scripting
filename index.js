"use strict";

window.addEventListener("load", indexSetup);

function indexSetup(){
    var header = document.querySelector("h2#secondaryHeader");
    header.innerHTML = "What is this?";

    var aside = document.getElementById("rightAside");

    var header3 = document.createElement("h3");
    header3.innerHTML = "Secondary Content";

    var p2 = document.createElement("p");
    p2.innerHTML = "Having a secondary piece to the aside can help organize\
    information as well as making it more pleasant to the eye.";

    aside.appendChild(header3);
    aside.appendChild(p2);

    var headers = document.querySelectorAll(".SecondaryHeader");
    for(var i = 0; i < headers.length; i++){
        headers[i].innerHTML += ":";
        headers[i].style.border = "dotted";
    }
}

