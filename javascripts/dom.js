"use strict";

const domString = (array) => {
	let longDomString = "";
	
	longDomString += `<div class="col-sm-3">`;
	longDomString += `<h2>${array.timestamp}</h2>`;
	longDomString += `<h2>${array.username}</h2>`;
	longDomString += `<h2>${array.text}</h2>`;
	longDomString += `</div>`;	       
	return longDomString;
	

};

const domOutput = (gifArray) => {
	let domOutput = '';
	for (let i = 0; i < gifArray.length; i++) {
		domOutput += (i % 4 === 0) ? '<div class="row">' : '';
		domOutput += domString(gifArray[i]);
		domOutput += (i % 4 === 3) ? '</div>' : '';
	}
	return domOutput;
};



//writeDomString function to display in mainContainer div
const printToDom = (gifArray) => {
  	document.getElementById('mainContainer').innerHTML = domOutput(gifArray);

};

module.exports = printToDom;