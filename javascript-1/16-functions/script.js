// Functions


// Function Declaration

// function greet() {
//     alert("Hello, World!");
//     console.log("Hello, World!");
// }

// let niceUser = true;

// if (niceUser) {
//     greet();
// }

// function greetUser(name, time = "morning") {
//     console.log(`Good ${time}, ${name}`);
// }

// greetUser("Johan", "night");
// greetUser("FED21M", "lunch");
// greetUser("Grumpy cat")


// Function Expression

const greet = function() {
    alert("Hello, World!");
    console.log("Hello, World!");
}

greet();


const greetUser = function(name, time = "morning") {
    console.log(`Good ${time}, ${name}`);
    // myName = "Batman";
    // console.log(`Name inside function ${myName}`);
}

let myName = "Johan";
let time = "afternoon";
greetUser(myName, time);
// greetUser("Johan", "afternoon");
console.log("Name?", myName);


const getRandomNumber = function(max = 10) {
    return Math.ceil(Math.random() * max);
}

let aNumber = getRandomNumber(100);
console.log(aNumber);

/*
const circleCircumference = function(radius) {
    // let circumference = 2 * Math.PI * radius;
    // return circumference;
    return 2 * Math.PI * radius;
    // console.log(`Circumference of circle with radious ${radius} is ${circumference}`);
}

let circumference = circleCircumference(20);
console.log(circumference);
circleCircumference(10);

const makeMoreInteresting = function(txt) {
    return txt + "?!!!!!!!"
}

console.log(makeMoreInteresting("?"));
*/


// Arrow Function | Fat Arrow Function

// Function Expression
// const circleCircumference = function(radius) {
//     return 2 * Math.PI * radius;
// }

// Function Expression (Arrow function)
// const circleCircumference = radius => 2 * Math.PI * radius;

// const greetUser = (myName, time = "morning") => {
//     console.log(`Good ${time}, ${myName}`);
// }

// const greet = () => {
//     console.log("Hi there");
// }

/*
const disturbUser = (txt) => {
    alert(txt);
}

const nagUser = (txt) => {
    console.log(txt);
}

const scream = (txt, action) => {
    let interesting = txt.toUpperCase() + "!!!!!!!";
    action(interesting);
}

scream("Is a bad movie", nagUser);
*/

let students = ["Johan", "Pelle", "Kajsa", "Maja"];

/*
for (let i = 0; i < students.length; i++) {
    console.log(`Student at index ${i} is: ${students[i]}`);
}

const logStudent = (student) => {
    console.log(`Student name: ${student}`);
}
students.forEach(logStudent);
*/

students.forEach( (student, i) => {
    console.log(`Student at index ${i} is: ${student}`);
} );