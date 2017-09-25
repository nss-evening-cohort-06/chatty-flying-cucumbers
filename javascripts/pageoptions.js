"use strict";

const mainContainer = document.getElementById("mainContainer");

const darkTheme = (event) => {
    if (event.target.checked === true) {
        // console.log("document", document.body.classList);
        mainContainer.classList.remove("defaultTheme");
        mainContainer.classList.add("darkTheme");
    } else if (event.target.checked === false) {
        mainContainer.classList.remove("darkTheme");
        mainContainer.classList.add("defaultTheme");
    }
};

const largeText = (event) => {
    if (event.target.checked === true) {
        mainContainer.classList.add("largeText");
    } else if (event.target.checked === false) {
        mainContainer.classList.remove("largeText");
    }
};

const toggleControls = () => {
    // console.log("toggleControls", toggleControls);
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