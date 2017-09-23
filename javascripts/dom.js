"use strict";

const outputDiv = document.getElementById('mainContainer');

const domString = (message) => {
	let domString = '';
	domString += `<div class="col-sm-3">`;
	domString += `<h2>${message.timestamp}</h2>`;
	domString += `<h2>${message.username}</h2>`;
	domString += `<h2>${message.text}</h2>`;
	domString += `<button type='input' class='deleteButton' id='delete' value='delete'>Delete</button>`;
	domString += `</div>`;	       
	//

	return domString;
	

};

const domOutput = (messageArray) => {
	let domOutput = '';
	for (let i = 0; i < messageArray.length; i++) {
		domOutput += (i % 4 === 0) ? '<div class="row">' : '';
		domOutput += domString(messageArray[i]);
		domOutput += (i % 4 === 3) ? '</div>' : '';
	}
	return domOutput;
};



//writeDomString function to display in mainContainer div
const printToDom = (messageArray) => {
  	outputDiv.innerHTML = domOutput(messageArray);

};

module.exports = printToDom;






