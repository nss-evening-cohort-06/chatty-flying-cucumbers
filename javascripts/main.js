"use strict";

const doItAll = require('./data');
const deleteMessages = require('./deletemessages');
const clearMessages = require('./clearmessages');
const pageOptions = require('./pageoptions');
const createNewMessage = require('./data');

doItAll.initializer();

module.exports = {doItAll, deleteMessages, clearMessages, createNewMessage, pageOptions};



