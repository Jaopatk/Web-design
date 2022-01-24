// date.html 
//   Illustrates the use of the Date object by 
//   displaying the parts of a current date and
//   using two Date objects to time a calculation

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];



// Get the current date

var today = new Date();

// Fetch the various parts of the date

var dateString = today.toLocaleString();
var day = today.getDay();
//Write your own code here 
var month = today.getMonth();
var year = today.getFullYear();
var time = today.toLocaleTimeString();

// Display the parts

document.write(
      "Date: " + dateString + "<br />",
      "Day: " + days[day] + "<br />");

//Write your own code here 
document.write("<br />" +
      "Today: " + days[day] +
      " " + day +
      " " + months[month] +
      ", " + year +
      " " + time);