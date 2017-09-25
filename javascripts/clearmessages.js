"use strict";

const printToDom = require('./dom');
let outputDiv = document.getElementById("mainContainer");
let clearMessageBoard = document.getElementById("clearIt");

const clearMessages = (e) => {
	if(e.target.className ==='clearIt'){
		outputDiv.innerHTML = "";
		document.getElementById('clearBtn').disabled = true;
	}
};

document.body.addEventListener("click", function (e){
	clearMessages(e);
});

module.exports = clearMessages;