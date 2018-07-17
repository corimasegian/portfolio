// alert("press okay to view this thing");

var myButton = document.querySelector('button');
var myHeading = document.querySelector("h1")

myButton.onclick = function() {
  var name = prompt("Please enter your name");
  localStorage.setItem("name: ", name);
}
