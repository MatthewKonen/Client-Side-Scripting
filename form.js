"use strict";

window.addEventListener("load", function(){
    var submitButton = document.getElementById("submit");
    submitButton.onsubmit = formOutput;
});
//12. arrow function
formOutput = () => {
    //10.
    var form = document.forms.form;
    var fontSize;
    var checks = form.elements.fontSize;

    for(var i = 0; i < checks.length; i++){
        if(checks[i].checked){
            fontSize = checks[i].value;
        }
    }

    var input = form.elements.input;

    var search = form.elements.search;
};