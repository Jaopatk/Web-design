// nochange.js
//   This script illustrates using the focus event
//   to prevent the user from changing a text field

// The event handler function to compute the cost

function computeCost() {
//add your code here
  var french = document.getElementById("french").value*3.49;
  var coffee = document.getElementById("coffee").value*2.5;
  var tea = document.getElementById("tea").value*1.5;
  if (french < "0"|| coffee <"0"||tea <"0") {
    alert("Invalid Input");
    return false;
  }
// Compute the cost
  var totalCost
  totalCost = french + coffee + tea;
  document.getElementById("cost").value = totalCost  
}  //* end of computeCost
