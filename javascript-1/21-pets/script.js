/**
 * DOM - Document Object Model - Petslist
 *
 * TODO:
 * Loopa över array:en `pets` och för varje `pet`, lägg till en `<li>` till
 * `#petslist` med lite info om varje pet.
 */


// Array of pets
const pets = [
	{
		name: "Mr Barksby",
		species: "Dog",
		age: 5,
		hobbies: ["Tail-wagging", "Car-chasing", "Eating lots of treats"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "WOOOFF!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		name: "Little Barksby",
		species: "Dog",
		age: 1,
		hobbies: ["Tail-wagging", "Biting furniture"],
		owner: {
			name: "Mr Beans",
			age: 57,
		},
		sound: "woff!",
		speak() {
			console.log(`${this.name} sound: ${this.sound}`);
		}
	},
	{
		hobbies: ["Be cute"],
		species: "Kitten",
		age: 1,
		name: "Meow Jr",
		sound: "meooow!",
		meowCounter: 0,
		speak() { // same as writing "speak: function() {}"
			this.meowCounter++;
			console.log(this.sound);
			console.log(`Meowed times today: ${this.meowCounter}`);
		}
	},
	{
		hobbies: "Eat food",
		species: "Hamster",
		age: 2,
		name: "Marble",
	}
];

console.log(pets)

// get reference to element with id `petslist`
const petslist = document.querySelector('#petslist');

// loop over array of pets
pets.forEach(pet => {
	// append info about pet to petslist's innerHTML
	petslist.innerHTML += `
		<li>
			${pet.name} is a ${pet.species} and is ${pet.age} years old.
		</li>
	`;

	// petslist.innerHTML += `
	// 	<li>
	// 		${pet.name} is a ${pet.species} of ${pet.age} year(s) old.
	// 		His owner is ${pet.owner?.name} and his favorite hobby is to ${pet.hobbies.join(', ')}.
	// 	</li>
	// `;
});



// const randomList = ["hello", "sda", "das"]
// for (let i = 0; i < randomList.length; i++) {
//     console.log(randomList[i])
// }

// content.innerHTML += '<p>Hello there</p>';

// const people = [
// 	{
// 		name: "luigi",
// 		age: 50
// 	},
// 	{
// 		name: "mario",
// 		age: 51
// 	},
// 	{
// 		name: "ayayyya",
// 		age: 5
// 	}
// ];