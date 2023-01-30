/*
// Shows a popup saying hi
alert("Hej");

let msg;
msg = "Hello new msg"

msg = "Hello again new msg"


console.log(msg);
// alert(msg);

msg = "Hello another new msg!"

console.log(msg);
*/


// Types of variable name
/*
let firstName; // first name

let thisIsVariable; // camelCase

let ThisIsVariable; //PascalCase UpperCamelCase

let first_name; // snake_case
*/

let firstName;
firstName = "Daniel";

let helloMsg
helloMsg = "Hello " + firstName + "!";
firstName = "Danil"
console.log(helloMsg); // Hello Daniel!

helloMsg = "Hello " + firstName + "!";
console.log(helloMsg);// Hello Danil!

const lastName = "Nordström";
// lastName = "Testsson";  // NO CAN DO!

const hello = "Hello";
console.log(hello + " " + firstName + " " + lastName);