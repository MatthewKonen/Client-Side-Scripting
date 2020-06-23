"use strict";

window.addEventListener("load", function () {

    var formData = location.search.slice(1);
    formData = decodeURIComponent(formData);
    //10. regex
    var formField = formData.split(/[&=]/g);

    var fontSize = formField[1];
    var input = formField[3];
    var search = formField[5];
    //10. regex
    var censor = new RegExp(search,'gi');
    var outputText = input.replace(censor,'****');
    var output = document.getElementById("output");
    
    output.style.fontSize = fontSize;
    
    output.innerHTML = outputText.split('+').join(' ');
    
 
 
 });