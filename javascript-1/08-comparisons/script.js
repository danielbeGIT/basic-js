// Comparisons


const minAge = 18;
const maxAge = 65;

let age = 65;

console.log("Is age greatar than minAge?", age > minAge);               // 65 > 18
console.log("Is age less than OR equal to minAge?", age >= minAge);     // 65 >= 18

console.log("Is age less than maxAge?", age < maxAge);                  // 65 < 65

console.log("Is age the same as maxAge?", age == maxAge);               // 65 == 65
console.log("Is age less than OR equal to maxAge?", age <= maxAge);     // 65 <= 65

console.log("Is age NOT the same as minAge?", age != minAge);           // 65 != 18
console.log("Is age NOT the same as maxAge?", age != maxAge);           // 65 != 65

true && true    // true
true && false   // false

true || true    // true
true || false   // true

// age == maxAge; // is the same?
// age != maxAge; // is NOT the same?

// LOGICAL NOT