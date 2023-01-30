/*
Skriv om ”gissa talet” till att ta emot och visa utfall i DOM. Använd formulär-fält för att ta emot input från användaren, och när formuläret skickas (submits) så jämför det gissade talet mot svaret och visa utfallet i DOM istället för alert()-rutor.
 

1. En input-box där man kan gissa på ett tal. En knapp för att gissa.
	1. Visa resultatet i en alert.
	2. Visa om talet var rätt eller inte i ett HTML-element.
	
	
2. Visa antalet gissningar hittills i ett HTML-element.

3. Visa om det gissade talet var för högt eller lågt i ett HTML-element.
	
4. Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och   antalet gissningar ska nollställas).
*/


const numbersEl = document.querySelector('#numbers');
const newNumberFormEl = document.querySelector('#number-form');
const numberTriesEl = document.querySelector('#number-tries');

function getRandomNumber() {
    return Math.ceil(Math.random() * 10);
}

let numberToGuess = getRandomNumber();
let guesses = 0;
console.log(numberToGuess)

const resetGame = () => {
    numberToGuess = getRandomNumber();
    guesses = 0;
    console.log(numberToGuess)

    numbersEl.innerHTML = `
    <h2 class="number-guessed d-flex justify-content-center">
        ?
    </h2>`
};


newNumberFormEl.addEventListener('submit', e => {
    e.preventDefault();
    
    const guessNumberValue = Number(e.target.guessNumber.value);
    
    e.target.guessNumber.value = "";

    guesses++;

    numbersEl.innerHTML = `
        <h2 class="number-guessed mb-3 d-flex justify-content-center">
                ${guessNumberValue}
        </h2>
    `
    
    if (guessNumberValue === numberToGuess) {
        numbersEl.innerHTML = `
        <p class="number-guessed mb-3 d-flex justify-content-center">
            Correct number and you guessed ${guesses} time(s)!
        </p>
        `
        alert(`Correct! Answer was: ${numberToGuess}`)

    } else if (guessNumberValue < numberToGuess) {
        numbersEl.innerHTML += `
        <p class="number-guessed mb-3 d-flex justify-content-center">

        <p>
            Too low number, try again.
        </p>
        `

    } else if (guessNumberValue > numberToGuess) {
        numbersEl.innerHTML += `
        <p class="number-guessed mb-3 d-flex justify-content-center">

        <p>
            Too high number, try again.
        </p>
        `
    }
});

    
newNumberFormEl.addEventListener('reset', e => {
    // numberToGuess = getRandomNumber();
    // guesses = 0;
    // console.log(numberToGuess)

    // numbersEl.innerHTML = `
    // <h2 class="number-guessed d-flex justify-content-center">
    //     ?
    // </h2>`
    resetGame();
});

