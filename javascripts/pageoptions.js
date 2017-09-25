"use strict";

let outputDarkTheme = document.getElementById('outputDarkTheme');

const printDom = require("./dom");

let outputLargeText = document.getElementById('outputLargeText');
let checkboxDark = document.querySelector("input[name=checkboxDark]");
let checkboxLarge = document.querySelector("input[name=checkboxLarge]");

checkboxDark.addEventListener( 'change', function() {
    console.log(this);
    if(this.checked) {
        outputDarkTheme.classList.add("darkTheme");
    } else {
        outputDarkTheme.classList.remove("darkTheme");
    }
});

checkboxLarge.addEventListener( 'change', function() {
    if(this.checked) {
        outputLargeText.classList.add("largeText");
    } else {
        outputLargeText.classList.remove("largeText");
    }
});

module.exports = {outputDarkTheme, outputLargeText};