// loose vs stick comparison


let age = 25;

// loose comparison (different data types can still be equal)

console.log('age == 25', age == 25);        // true
console.log('age == "25"', age == "25");    // true
console.log('age != 25', age != 25);        // false
console.log('age != "25"', age != "25");    // false

// stict comparison (different data type will not be equal)
console.log('age === 25', age === 25);      // true
console.log('age === "25"', age === "25");  // false
console.log('age !== 25', age !== 25);      // false
console.log('age !== "25"', age !== "25");  // true


/*
let password = "$ecret";
let pos = password.indexOf('$');

console.log(pos)

if (pos !== -1) {
    console.log("Found $!");
} else {
    console.log("Did not find");
}
*/