// Workshop: Password Checker
// Skriv kod som kollar att lösenordet i variabeln password har	
//     minst 8 tecken varav minst ett specialtecken enligt nedan	
//     eller har minst 12 tecken och minst 1 bindestreck
//     eller har minst 16 tecken


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


let password;
password = "password"; // inte giltigt
password = "p@ssword"; // giltigt
// password = "pa$$word"; // giltigt
// password = "secretpassword"; // inte giltigt
// password = "secret-password"; // giltigt
// password = "such-password-much-secure-very-long"; // giltigt

// set status variable to initial value false
let containsSpecialChar = false;

// check for any special chars in password
for (let i = 0; i < specialChars.length; i++) {
    console.log("At special char:", specialChars[i]);
    if (password.includes(specialChars[i])) {
        console.log("Password contained char", specialChars[i]);   
        containsSpecialChar = true; 
    }
};

console.log(containsSpecialChar)

console.log(`🕵🏻 Checking password "${password}"`);

// Checking if password has 16 letters
if (password.length >= 16) {
	console.log("- ✅ Great! That's a long password!");

} else if (password.length >= 12 && password.includes('-')) {
	console.log("- ✅ Great! That's a pretty good password!");

} else if (password.length >= 8 && containsSpecialChar) {
	console.log("- ✅ Great! Such password, much secure, very hard to crack!");

} else {
	console.log("- 🚨 Insecure password, my grandma can crack it!");
}

// if (password.length >= 8 && containsSpecialChar) {
//     console.log("Strong enough password.");
// } else {
//     console.log("Not strong enough password.");
// };

// if (password.length >= 8 && password.match(specialChars)) {
//     console.log("Strong enough password.");
// } else {
//     console.log("Not strong enough password.");
// };

