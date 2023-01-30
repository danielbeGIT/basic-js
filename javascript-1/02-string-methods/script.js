let myName = "Danieln";

console.log("Name is: ", myName);
console.log("Length of name is:", myName.length);
console.log("First char in name is:", myName[0]);

console.log("Points:", 42);
console.log("Points: " + 42);

console.log("Position of 'n' in my name", myName.indexOf('n'));
console.log("Position of 'n' in my name", myName.lastIndexOf('n'));
console.log("Position of 'r' in my name", myName.indexOf('r'));

console.log("Does my name contain D", myName.includes('D'));
console.log("Does my name contain d", myName.includes('d'));
console.log("Does my name contain r", myName.includes('r'));

console.log("Slices of Daniel:", myName.slice(2, 6));

console.log("Name SHOUTED is:", myName.toLocaleUpperCase());
console.log("Name whispered is:", myName.toLocaleLowerCase());

console.log("Tiny name:", myName.substr(2, 4));

let email = "daniel.be@elevera.org";
console.log("Does email contain at-char", email.includes('@'));

let myPoints = 42;
console.log("Points: " + myPoints);