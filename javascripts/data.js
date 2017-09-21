"use strict";

const printToDom = require('./dom');
const loadMessages = require('./getmessages');

let messageArray = [];

const errorFunction = () => {
	console.log("This is broken.");
};

const whenMessagesLoad = function(){
	messageArray = JSON.parse(this.responseText).messages;
};

const initializer = () => {
	loadMessages(whenMessagesLoad, errorFunction);
};

module.exports = initializer;