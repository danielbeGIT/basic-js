/**
 * Workshop: Password Checker (DOM-edition)
 *
 * Skapa ett input-fält där användaren kan skriva in ett lösenord och klicka
 * på en knapp för att få reda på om lösenordet är säkert eller ej.
 *
 * Börja med att meddela användaren via en alert()-ruta, men ett stort plus om
 * du kan få till det så resultatet visas på sidan i en Bootstrap Alert, och
 * att den är av typen danger om det är ett osäkert lösenord och av typen
 * success om det är ett säkert lösenord.
 *
 * Kan du även göra så att input-fältet töms efter varje lösenords-test?
 *
 */

// get references to the element we need access to in our code
const btnCheckPasswordEl = document.querySelector('#btnCheckPassword');
const inputPasswordEl = document.querySelector('#inputPassword');
const statusEl = document.querySelector('#status');

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

// react to the event of a user clicking on the btnCheckPassword-button
// or: ON the btnCheckPassword-button, react to the EVENT of a CLICK
btnCheckPasswordEl.addEventListener('click', () => {
	const inputPassword = inputPasswordEl.value;

	const pwChecking = pwChecker(inputPassword);

	if (pwChecking) {
		statusEl.innerHTML = `
        <div class="alert alert-success">
            Secure password!
        </div>
        `;

	} else {
		statusEl.innerHTML = `
        <div class="alert alert-warning">
            NOT secured password!
        </div>
        `;
	}
});