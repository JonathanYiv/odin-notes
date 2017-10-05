//document.querySelector('html').onclick = function() {
//  alert('Ouch! Stop poking me!');
//}
// selected the html element, setting onlick handler property equal to an anonymous/nameless function which contains the code we want to run

var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/test.jpg') {
    myImage.setAttribute('src', 'images/test2.jpg');
  }
  else {
    myImage.setAttribute('src', 'images/test.jpg');
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Dragons are awesome, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
  }
  else {
    var storedName = localStorage.getItem('name')
    myHeading.textContent = "Dragons are awesome, " + storedName;
  }

myButton.onclick = function() {
  setUserName();
}