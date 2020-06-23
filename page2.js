"use strict";

window.addEventListener("load", function (){
    var keyDis = document.getElementById("lastKey");
    //4.b
    window.addEventListener("keydown", function(e){
        keyDis.innerHTML = String.fromCharCode(e.keyCode);
    });
    //4. c. Timer
    window.setTimeout(function (){
        var spook = document.getElementById("spook");
        var skeImg = document.createElement("img");
        skeImg.setAttribute("src", "img/spook.png");
        skeImg.setAttribute("alt", "Reassembling Skeleton");
        spook.appendChild(skeImg);
    }, 5000);
});


