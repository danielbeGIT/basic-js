// Objects

/*
const fluffles = [
    "Mr Fluffles",      // 0 = name
    3,                  // 1 = age
    "Bengt",            // 2 = owner
    "Annoy people",     // 3 = hobbies
    "Cat"               // 4 = species
];

const captainCat = [
    "Captain Cat",      // 0 = name
    9,                  // 1 = age
    "Agda",             // 2 = owner
    "HIIT",             // 3 = hobbies
    "Cat"               // 4 = species
];

const showPetInfo = (pet) => {
    console.log(`${pet[0]} is a ${pet[4]} of ${pet[1]} year(s) old. His owner is ${pet[2]} and his favorite hobby is ${pet[3]}`)
}

showPetInfo(fluffles);
showPetInfo(captainCat);
*/

// Object literal
const fluffles = {
    name: "Mr Fluffles",
    age: 3,
    owner: "Bengt",
    hobbies: "Annoy people",
    species: "Cat"
}

console.log(fluffles)

const captainCat = {
    name: "Captain Cat",
    species: "Cat",
    age: 9,
    owner: "Agda",
    hobbies: "HIIT"
}

const meowJr = {
    hobbies: "Be cute",
    species: "Kitten",
    age: 1,
    name: "Meow Jr"
}

console.log("Age of Meow Jr:", meowJr.age); // 1

meowJr.age = 2; // new value on age

console.log("Age of Meow Jr:", meowJr.age); // 2

meowJr.owner = "Sven-Bengt"

console.log(captainCat)

// dot notation
console.log(fluffles.name)
console.log(captainCat.name)

// square-bracket notation
console.log(captainCat['name'])

// see every key's index
console.log(Object.keys(captainCat));

// trying to call a key that doesn't exist
// will result in undefined

const showPetInfo = (pet) => {
    console.log(`${pet.name} is a ${pet.species} of ${pet.age} year(s) old. His owner is ${pet.owner} and his favorite hobby is ${pet.hobbies}`)
}

showPetInfo(captainCat);
showPetInfo(fluffles);
showPetInfo(meowJr);
