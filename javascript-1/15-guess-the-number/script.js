/**
 * Guess the number
 * Lesson: 3
 *
 * STEG 1
 * Sätt ett tal i en variabel. Be användaren att gissa talet. Om det är fel,
 * fråga igen. Om det är rätt, visa en alert med ett grattis-meddelande.
 * Om användaren skriver in talet 0 så ska spelet avslutas.
 *
 * STEG 1.5
 * Berätta för användaren om gissningen är för låg eller för hög. Naturligtvis
 * ska de få gissa igen efter detta.
 *
 * STEG 2
 * Slumpa talet som användaren ska gissa, så att de inte gissar rätt varje gång.
 *
 * STEG 3
 * Spara ner hur många gissningar som krävdes. Visa antalet gissningar när
 * användaren gissat rätt.
 *
 * STEG 4
 * Efter att man gissat rätt så slumpa fram ett nytt tal och starta om spelet
 * på nytt.
 * Spara en "highscore", dvs hur få gånger som krävts för att gissa rätt.
 * Om användaren gissar rätt på fler gånger, visa "Tyvärr du gissade rätt på
 * ${tries} antal försök men din highscore är ${highscore}".
 * Om användaren gissar rätt på färre gånger, visa "YAY NEW HIGHSCORE! ${highscore}"
 */

/*
let aNumber = Math.ceil(Math.random() * 10)
let gameContinue = true;
let myAnswer;
let tries = 0;
let highscore = 0;
console.log(aNumber);

while (gameContinue) {
    myAnswer = Number(prompt("What's the number 1 - 10?"));
    tries++;

    if (myAnswer === 0) {
        alert("Invalid Number")
        gameContinue = false;

    }   else if (myAnswer === aNumber) {
        alert(`You won!`)
        highscore++;

    }   else if (myAnswer > aNumber) {
        alert("Too high, try again!")

    }   else if (myAnswer < aNumber) {
        alert("Too low, try again!")

    }   else if (tries == 10) {
        alert("Too many tries, Game Over")
        break;

    }   else {
        alert("Try numbers!")
        console.log("NaN!")
    }

}   alert(`Correct Number: ${aNumber} | Tries: ${tries} | Highscore: ${highscore}`)
*/



// demo
function getRandomNumber() {
    return Math.ceil(Math.random() * 10);
}

let highscore = false;
let exitGame = false;
while (!exitGame) {

    // PARTY ON
    let numberToGuess = getRandomNumber();
    let continueGame = true;
    let guesses = 0;

    console.log(numberToGuess)

    while (continueGame) {
        // Increase number of guesses made
        guesses++;      // guesses = guesses + 1;

        // Ask for guess
        let guess = Number(prompt("Please enter your guess"));

        console.log("Guessed number:", guess, typeof guess)

        // Is guess correct
        if (guess === numberToGuess) {
            // we can haz highscore
            if (highscore) {
                // new highscore
                if (guesses < highscore) {
                    console.log(`YAY NEW HIGHSCORE`);
                    highscore = guesses;
                }   else {
                    console.log(`Sorry no new highscore, your current highscore is ${highscore}`);
                }
            }   else {
                highscore = guesses;
            }

            console.log("Guess was correct");
            alert(`Great success! You guessed the correct answer in ${guesses} guesses.`);
            continueGame = false;

        } else if (guess === 0) {
            console.log("Guess was 0, quitting game");
            alert(`Y U GIVE UP AFTER ONLY ${guesses} GUESSES?!`);
            continueGame = false;
            exitGame = true;

        } else if (guess < numberToGuess) {
            console.log(`TOO LOW!`);

        } else if (guess > numberToGuess) {
            console.log(`TOO HIGH!`);
        }
    }
}
