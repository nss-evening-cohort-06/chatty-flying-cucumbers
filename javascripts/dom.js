"use strict";

const domString = (array) => {
	let longDomString = "";
	for (let i = 0; i < array.length; i++){
	longDomString += `<div>`;
	longDomString += `</div`;	       
	}
	
	writeDomString(longDomString);

};



//writeDomString function to display in mainContainer div
const writeDomString = (strang) => {
  	document.getElementById('mainContainer').innerHTML = strang;

};