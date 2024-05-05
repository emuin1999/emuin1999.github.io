"use strict";

/* Execute the function to run and display the countdown clock */
runClock();
setInterval("runClock()", 500);

/* Function to create and run the countdown clock*/
function runClock() {

	/*Storing the current date and time*/
	var currentDay = new Date();
	var dateStr = currentDay.toLocaleDateString();
	var timeStr = currentDay.toLocaleTimeString();

	/* Display the current date and time*/
	document.getElementById("dateNow").innerHTML =dateStr + "<br />" + timeStr;

	/* calculate the days untail Janurary 1st */
	var newYear = new Date ("Janurary 1 2024");
	var nextYear = currentDay.getFullYear() + 1;
	newYear.setFullYear(nextYear);
	var daysLeft = (newYear - currentDay)/ (1000*60*60*24);

	/* Calculate the hours left in the current day using the Math method */
	var hrsLeft = (daysLeft - Math.floor(daysLeft))* 24;

	/*calculate the minutes and seconds left in the current hour using the Math method */
	var minsLeft = (hrsLeft - Math.floor(hrsLeft))*60;
	var secsLeft = (minsLeft - Math.floor(minsLeft))*60;

	/* Display the time left untail New Year's Eve usign the Math method */
	document.getElementById("days").textContent = Math.floor(daysLeft);
	document.getElementById("hrs").textContent = Math.floor(hrsLeft);
	document.getElementById("mins").textContent = Math.floor(minsLeft);
	document.getElementById("secs").textContent = Math.floor(secsLeft);


}
/* Java Alert Welcoming the User */
window.alert("Welcome to Furry Family Friend!");

