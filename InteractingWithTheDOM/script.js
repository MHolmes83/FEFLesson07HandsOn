var firstName = document.getElementById('firstName').value;
var lastName = document.getElementById('lastName').value;
var email = document.getElementById('email').value;
var myButton = document.getElementById('submitButton');

var fruit = document.getElementsByTagName('li');

var text = document.getElementsByClassName('paragraph');

var addedText = document.getElementById('paragraph').innerHTML;

document.getElementById('paragraph').innerHTML = text + " Stealth text! Wait, that's not very stealth of me!";

myButton.addEventListener('click', function() {
    alert('Click!!');
})

let container = document.getElementById('container');

container.innerHTML = '<h1> Hello, World!</h1>';

let heading = document.createElement('h1');

heading.innerHTML = document.getElementById('message').value;

document.getElementById('output').appendChild(heading);

function phoneNumberFormat() {
    let phoneNumber = document.getElementById('phNumber').value;
    let phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (phoneNumber.match(phoneRegex)) {
        alert("Valid number entered");
        console.log(true);
    }
    else {
        alert("Phone number entered is invalid");
        console.log(false);
    }
}