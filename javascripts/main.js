"use strict";

const doItAll = require('./data');
const deleteMessages = require('./deletemessages');

doItAll.initializer();

module.exports = {doItAll, deleteMessages};
