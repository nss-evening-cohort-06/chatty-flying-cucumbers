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