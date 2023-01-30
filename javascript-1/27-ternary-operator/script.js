// Ternary operator

let username = prompt("Enter your username");

let msg = (username.length > 2 && username-length < 10)
    ? `Welcome ${username}` 
    : `Welcome Guest!`;

/*
let msg;
if (username) {
    msg = `Welcome ${username}!`;
} else {
    msg = `Welcome guest!`;
}
*/


console.log(msg)
document.querySelector('#greetings').innerText = msg;