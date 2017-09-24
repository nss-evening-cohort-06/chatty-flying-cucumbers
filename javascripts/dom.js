"use strict";

const outputDiv = document.getElementById('mainContainer');

const domString = (message) => {
	let domString = '';
	domString += `<div>`;
	domString += `<h5>${message.timestamp}</h5>`;
	domString += `<h5>${message.username}</h5>`;
	domString += `<h5>${message.text}</h5>`;
	domString += `<button type='input' class='deleteButton' id='delete' value='delete'>Delete</button>`;
	domString += `</div>`;	       
	//

	return domString;
	

};

const domOutput = (messageArray) => {
	let domOutput = '';
	for (let i = 0; i < messageArray.length; i++) {
		//domOutput += (i % 4 === 0) ? '<div class="row">' : '';
		domOutput += domString(messageArray[i]);
		//domOutput += (i % 4 === 3) ? '</div>' : '';
	}
	return domOutput;
};



//writeDomString function to display in mainContainer div
const printToDom = (messageArray) => {
  	outputDiv.innerHTML = domOutput(messageArray);

};

module.exports = printToDom;






