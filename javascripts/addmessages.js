"use strict";


const boxField = document.getElementById("inputfield");
const outputDiv = document.getElementById("mainContainer");

boxField.addEventListener("keyup", function () {
  if (event.keyCode === 13) {
    addMessage();
  }
});

const addMessage = () => {
  outputDiv.innerHTML += 
  `<div class="col-sm-3">
	<h5>${boxField.value}</h5>
	<button type='input' class='deleteButton' id='delete' value='delete'>Delete</button>
	</div>`;	       
	//
  boxField.value = "";
};

module.exports = addMessage;