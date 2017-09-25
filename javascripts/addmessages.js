"use strict";

const boxField = document.getElementById("inputfield");
const outputDiv = document.getElementById("mainContainer");

boxField.addEventListener("keyup", function () {
  if (event.keyCode === 13 && boxField.value !== "") {
    addMessage();
    document.getElementById('clearBtn').disabled = false;
  }
});

const addMessage = () => {
  outputDiv.innerHTML += 
   `<div>
    <h5>${timeStamp()}</h5>
	<h5>${boxField.value}</h5>
	<button type='input' class='deleteButton' id='delete' value='delete'>Delete</button>
	</div>`;	       
	//
  boxField.value = "";
};

const timeStamp = () => {
	let now = new Date();
	let time = [now.getHours(), now.getMinutes()];
	let suffix = ( time[0] < 12 ) ? "AM" : "PM";
	let stamp = now + " / " + time.join(":") + " " + suffix;
	return stamp;
};

module.exports = addMessage;