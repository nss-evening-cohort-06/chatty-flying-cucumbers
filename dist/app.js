(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const boxField = document.getElementById("inputfield");
const outputDiv = document.getElementById("mainContainer");

boxField.addEventListener("keyup", function () {
  if (event.keyCode === 13 && boxField.value !== "") {
    addMessage();
    document.getElementById('clearBtn').disabled = false;
  }
});

const addMessage = () => {
  outputDiv.innerHTML += 
   `<div>
    <h5>${timeStamp()}</h5>
	<h5>${boxField.value}</h5>
	<button type='input' class='deleteButton' id='delete' value='delete'>Delete</button>
	</div>`;	       
	//
  boxField.value = "";
};

const timeStamp = () => {
	let now = new Date();
	let time = [now.getHours(), now.getMinutes()];
	let suffix = ( time[0] < 12 ) ? "AM" : "PM";
	let stamp = now + " / " + time.join(":") + " " + suffix;
	return stamp;
};

module.exports = addMessage;
},{}],2:[function(require,module,exports){
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
},{"./dom":5}],3:[function(require,module,exports){
"use strict";

const printToDom = require('./dom');
const loadMessages = require('./getmessages');
const addMessage = require('./addmessages');
const outputDiv = document.getElementById('mainContainer');
const boxField = document.getElementById('inputfield');

let messageArray = [];

const errorFunction = () => {
	console.log("This is broken.");
};

const whenMessagesLoad = function(){
	messageArray = JSON.parse(this.responseText).messages;
	printToDom(messageArray);
};

const initializer = () => {
	loadMessages(whenMessagesLoad, errorFunction);
};

const getMessages = () => {
	return messageArray;
};

const createNewMessage = () => {
	addMessage();
};

module.exports = {initializer, getMessages, createNewMessage,};
},{"./addmessages":1,"./dom":5,"./getmessages":6}],4:[function(require,module,exports){
"use strict";

const domString = require('./dom');
let outputDiv = document.getElementById("mainContainer");


const deleteButton = (e) => {
	if(e.target.className ==='deleteButton'){
		e.target.parentElement.remove();
		console.log("inside delete", document.getElementsByClassName('deleteButton'));
		if(document.getElementsByClassName('deleteButton').length === 0) {
  			document.getElementById('clearBtn').disabled = true;

		}
	} 
};

document.body.addEventListener("click", function (e){
	deleteButton(e);
});
//


module.exports = deleteButton;
},{"./dom":5}],5:[function(require,module,exports){
"use strict";

const outputDiv = document.getElementById('mainContainer');

const domString = (message) => {
	let domString = '';
	domString += `<div>`;
	domString += `<h5>${message.timestamp}</h5>`;
	domString += `<h5>${message.username}</h5>`;
	domString += `<h5>${message.text}</h5>`;
	domString += `<button type='input' class='deleteButton' id='delete' value='delete'>Delete</button>`;
	domString += `</div>`;	       

	return domString;
};

const domOutput = (messageArray) => {
	let domOutput = '';
	for (let i = 0; i < messageArray.length; i++) {
		//domOutput += (i % 4 === 0) ? '<div class="row">' : '';
		domOutput += domString(messageArray[i]);
		//domOutput += (i % 4 === 3) ? '</div>' : '';
	}
	return domOutput;
};

const printToDom = (messageArray) => {
  	outputDiv.innerHTML = domOutput(messageArray);
};

module.exports = printToDom;







},{}],6:[function(require,module,exports){
"use strict";

const loadMessages = (onMessageLoad, onMessageError) => {
	const messageLoader = new XMLHttpRequest();
	messageLoader.addEventListener('error', onMessageError);
	messageLoader.addEventListener('load', onMessageLoad);
	messageLoader.open('GET', '../data/message.JSON');
	messageLoader.send();
};

module.exports = loadMessages;



},{}],7:[function(require,module,exports){
"use strict";

const doItAll = require('./data');
const deleteMessages = require('./deletemessages');
const clearMessages = require('./clearmessages');
const toggleControls = require('./pageoptions');
const createNewMessage = require('./data');

doItAll.initializer();
toggleControls();




},{"./clearmessages":2,"./data":3,"./deletemessages":4,"./pageoptions":8}],8:[function(require,module,exports){
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
},{}]},{},[7]);
