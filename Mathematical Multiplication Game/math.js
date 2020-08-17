/***** ELEMENTS *****/
var startButton = document.getElementById("start");
var stopButton = document.getElementById("stop");
var inputField = document.getElementById("in");
var form = document.querySelector("form");
var p = document.getElementById("p");
var q = document.getElementById("q");
var op = document.getElementById("op");
var response = document.getElementById("response");

/***** STATE VARIABLES *****/
var max = 20;
var num1;
var num2;
var answer;

num1 = Math.floor((Math.random() * max) + 1);
num2 = Math.floor((Math.random() * max) + 1);
p.innerHTML = num1;
op.innerHTML = "times";
q.innerHTML = num2;

/***** EVENTS *****/
startButton.onclick = function() {
  getAnswer();
};

form.onsubmit = function(e) {
	// need to prevent the default form submission wich reloads the page
	e.preventDefault();
	getAnswer();
};

stopButton.onclick = function() {
  refreshNums();
	response.innerHTML = "";
};

/***** FUNCTIONS ******/
var refreshNums = function() {
	num1 = Math.floor((Math.random() * max) + 1);
	num2 = Math.floor((Math.random() * max) + 1);
	p.innerHTML = num1;
	op.innerHTML = "times";
	q.innerHTML = num2;
};

/*
* This is called in the onsubmit event
*/
var getAnswer = function() {
	var correct = num1 * num2;
	answer = parseInt(inputField.value);

	if (answer === correct) {
		response.innerHTML = "It is correct! Very good!";
		refreshNums();
	} else {
		response.innerHTML = "No. Please try again";
	}
	inputField.value = "";
};
