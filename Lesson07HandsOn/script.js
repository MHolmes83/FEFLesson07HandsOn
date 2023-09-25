function regexChecker() {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const nameRegex = /^[a-zA-z]+$/;

    if (firstName.match(nameRegex) && lastName.match(nameRegex)) {
        alert("Yay! Your inputs were all correct!");
        console.log(true);
    } else {
        alert("Oh no! That's an invalid format!");
        console.log(false);
    }
}