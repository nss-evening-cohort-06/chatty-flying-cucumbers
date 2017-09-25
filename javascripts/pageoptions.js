"use strict";

const darkTheme = (event) => {
    if (event.target.checked === true) {
        console.log("document", document.body.classList);
        document.body.classList.remove("defaultTheme");
        document.body.classList.add("darkTheme");
        document.getElementById("body").classList.add("darkTheme");
    } else if (event.target.checked === false) {
        document.body.classList.remove("darkTheme");
        document.body.classList.add("defaultTheme");
        document.getElementById("body").classList.remove("darkTheme");

    }
};

const largeText = (event) => {
    if (event.target.checked === true) {
        document.body.classList.add("largeText");
    } else if (event.target.checked === false) {
        document.body.classList.remove("largeText");
    }
};

const toggleControls = () => {
    console.log("toggleControls", toggleControls);
    document.getElementById("checkbox").addEventListener("change", (event) => {
        console.log("event", event);
        if (event.target.id === "darkTheme") {
            darkTheme(event);
        } else if (event.target.id === "largeText") {
            largeText(event);
        }
    });
};

module.exports = toggleControls;