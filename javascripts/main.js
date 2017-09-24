"use strict";

const doItAll = require('./data');
const deleteMessages = require('./deletemessages');
const clearMessages = require('./clearmessages');

doItAll.initializer();

module.exports = {doItAll, deleteMessages, clearMessages};
