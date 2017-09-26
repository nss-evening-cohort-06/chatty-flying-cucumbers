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