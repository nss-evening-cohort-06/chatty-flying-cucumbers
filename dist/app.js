(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

const printToDom = require('./dom');
const loadMessages = require('./getmessages');

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

module.exports = {initializer, getMessages};
},{"./dom":2,"./getmessages":3}],2:[function(require,module,exports){
"use strict";

const domString = (array) => {
	let longDomString = "";
	
	longDomString += `<div class="col-sm-3">`;
	longDomString += `<h2>${array.timestamp}</h2>`;
	longDomString += `<h2>${array.username}</h2>`;
	longDomString += `<h2>${array.text}</h2>`;
	longDomString += `</div>`;	       
	return longDomString;
	

};

const domOutput = (gifArray) => {
	let domOutput = '';
	for (let i = 0; i < gifArray.length; i++) {
		domOutput += (i % 4 === 0) ? '<div class="row">' : '';
		domOutput += domString(gifArray[i]);
		domOutput += (i % 4 === 3) ? '</div>' : '';
	}
	return domOutput;
};



//writeDomString function to display in mainContainer div
const printToDom = (gifArray) => {
  	document.getElementById('mainContainer').innerHTML = domOutput(gifArray);

};

module.exports = printToDom;
},{}],3:[function(require,module,exports){
"use strict";

const loadMessages = (onMessageLoad, onMessageError) => {
	const messageLoader = new XMLHttpRequest();
	messageLoader.addEventListener('error', onMessageError);
	messageLoader.addEventListener('load', onMessageLoad);
	messageLoader.open('GET', '../data/message.JSON');
	messageLoader.send();
};

module.exports = loadMessages;



},{}],4:[function(require,module,exports){
"use strict";

const doItAll = require('./data');

doItAll.initializer();

},{"./data":1}]},{},[4]);
