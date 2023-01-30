/**
 * Workshop: Password Checker using Functions
 *
 * Skriv om lösenordskollen till att använda funktioner (inkl. forEach) och
 * kollar en lista av lösenord.
 *
 * Ni ska ha en funktion som tar emot ett lösenord och validerar det. Den ska
 * returnera true om det är ett tillräckligt säkert lösenord, eller false om
 * det inte uppfyller kraven.
 *
 * Varje lösenord ska console.log’as tillsammans med dess resultat.
 *
 *
 * ROADMAP
 *
 * 1. Skapa en array som alla lösenord ligger i.
 *
 * 2.1. Flytta logiken som kollar om lösenordet uppfyller kraven till en egen
 * funktion.
 *
 * 2.2. Kalla på funktionen en gång för varje lösenord i array:en och skicka
 * med lösenordet till funktionen.
 *
 * 3. Ändra så att funktionen returnerar true/false istället för att logga till
 * konsollen.
 *
 */





const specialChars = [
	"@",    // 0
    "$",    // 1
    "%",    // 2
    "*",    // 3
    "^",    // 4
    "<",    // 5
    ">",    // 6
    "?",    // 7
    "!",    // 8
    "(",    // 9
    ")",    // 10
    "[",    // 11
    "]",    // 12
    "{",    // 13
    "}",    // 14
    "'"     // 15
];


const passwords = [
    "password", // inte giltigt
    "p@ssword", // giltigt
    "pa$$word", // giltigt
    "secretpassword", // inte giltigt
    "secret-password", // giltigt
    "such-password-much-secure-very-long" // giltigt
];


const pwChecker = (password) => {
    console.log(`Checking password "${password}"`)

    let containsSpecialChar = false;
    
    for (let i = 0; i < specialChars.length; i++) {

        if (password.includes(specialChars[i])) {
            containsSpecialChar = true; 
        }
    };
    
    if (password.length >= 8 && containsSpecialChar === true) {
        return true;

    } else if (password.length >= 12 && password.includes('-')) {
        return true;
    
    } else {
        return false;
    }
};


// pwChecker(passwords[0])

// pwChecker("pas@words")

// passwords.forEach( (password) => {
//     let res = pwChecker ( password );

//     if (res) {
//         console.log(`Password '${password} is secure`);
//     } else {
//         console.log(`Password '${password} is not secure`);
//     }
// });

passwords.forEach( (password) => {
    console.log(pwChecker (password) )
});

// for (let i = 0; i < passwords.length; i++) {
//     let res = pwChecker ( passwords[i] );

//     if (res) {
//         console.log(`Password '${passwords[i]} is secure`);
//     } else {
//         console.log(`Password '${passwords[i]} is not secure`);
//     }
// }





// let sum = 0;
// const points = ["1", "55", "sdasad"];

// for (let i = 0; i < points.length; i++) {
//     console.log("i is:", i);

//     const score = points[i];

//     console.log("Score is:", score);

//     sum += score;

//     console.log("Sum is now:", sum);
// }

// console.log("Sum after loop is:", sum);

// points.forEach( (score, i) => {
//     console.log("i is:", i);

//     // const score = points[i];

//     console.log("Score is:", score);

//     sum += score;

//     console.log("Sum is now:", sum);
// } );