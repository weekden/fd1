// var div = document.getElementById('second');
// console.log(div);

// div.style.borderRadius = "50%";
// div.style.backgroundColor = "red";

// var divhello = document.getElementById('hello');
// // function colorIt() {
// // divhello.className = 'red';
// // }
// function showName() {
// divhello.innerHTML = "My nane is"
// }

function showUser() {
    var divFirst = document.getElementById('first');
    var divSecond = document.getElementById('second');
    var user = prompt("Enter login");
    if ( user == true) {
        divFirst.style.display = "none";
        divSecond.style.display = "block";
        divSecond.innerHTML = " write," + user;
    }
}



// Forma

var responseName = document.getElementById("responseName");
var wrapper = document.getElementById("wrapper");
var response = document.getElementById("response");

function setInfo() {
  var userName = document.getElementById("userName");
  wrapper.style.display = "none";
  response.style.display = "block";
  responseName.innerHTML = userName.value;
}