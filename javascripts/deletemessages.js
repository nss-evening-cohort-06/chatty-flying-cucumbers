"use strict";

const domString = require('./dom');

// document.body.addEventListener("click", function(event){
// 	console.log("click event", event);
// });

const deleteButton = (e) => {
	if(e.target.className ==='deleteButton'){
		e.target.parentElement.remove();

	}
 
};

document.body.addEventListener("click", function (e){
	console.log(e);
	deleteButton(e);
});

module.exports = deleteButton;