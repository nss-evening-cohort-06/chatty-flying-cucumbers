"use strict";

const domString = (array) => {
	let longDomString = "";
	for (let i = 0; i < array.length; i++){
	longDomString += `<div class="col-sm-3">`;
	longDomString += `<h2>${array.timestamp}</h2>`;
	longDomString += `<h2>${array.username}</h2>`;
	longDomString += `<h2>${array.text}</h2>`;
	longDomString += `</div>`;	       
	}
	
	writeDomString(longDomString);

};



//writeDomString function to display in mainContainer div
const writeDomString = (strang) => {
  	document.getElementById('mainContainer').innerHTML = strang;

};