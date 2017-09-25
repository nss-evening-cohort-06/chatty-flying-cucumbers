"use strict";

const domString = require('./dom');

const deleteButton = (e) => {
	if(e.target.className ==='deleteButton'){
		e.target.parentElement.remove();
	}
};

document.body.addEventListener("click", function (e){
	deleteButton(e);
});

module.exports = deleteButton;