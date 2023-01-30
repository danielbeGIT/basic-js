/**
 * Array Shuffling
 * 
 */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(numbers)

/*
numbers.sort((a, b) => {
	// return negative, 0 or positive number
	return 0.5 - Math.random();
});
*/
// numbers.sort(() => 0.5 - Math.random());

const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
	  const j = Math.floor(Math.random() * (i + 1));
	  const temp = array[i];
	  array[i] = array[j];
	  array[j] = temp;
	}
}

shuffleArray(numbers);
console.log(numbers);