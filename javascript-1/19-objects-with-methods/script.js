// Objects with Methods

// const speak = () => {
//     console.log("Woof");
// }
// speak();

const barksby = {
    name: "Mr Barksby",
    species: "Dog",
    age: 5,
    hobbies: [
        {name: "Tail wagging"}, 
        {name: "Car-chasing"}, 
        {name: "Eating lots of treats"}
    ],
    owner: {
        name: "Mr Beans",
        age: 57
    },
    sound: "woooof!",

    //speak: () => { // don't use arrow functions in methods on objects as the `this` context object isn't updated to reflect the object it is run on
    
    speak: function() {
        console.log(`${this.name} makes ${this.sound} sound`);
    }
}

const meowJr = {
    hobbies: "Be cute",
    species: "Kitten",
    age: 1,
    name: "Meow Jr",
    sound: "meeooow!",
    meowCounter: 0,
    speak() {       // same as writing "speak: function() {}"
        this.meowCounter++;
        console.log(this.sound);
        console.log(`Meowed times today: ${this.meowCounter}`)
    }
}

// const names = ["Johan", "Pelle", "Agda"]
// console.log(names.join(", "))

// console.log(barksby.hobbies.join(", "));
// console.log(`Barksby's is a ${barksby.species}`);
// console.log(`Barksby's owner is ${barksby.owner.name}`);

// console.log(barksby.hobbies[0].name);
// console.log(barksby.hobbies[2].name);

// meowJr.sound = "meow?"

// barksby.speak();
// meowJr.speak();
// meowJr.speak();
// meowJr.speak();

//primitive data types are copied by value
let name1 = "Johan"
let name2 = name1;  // name2 == "Johan"

name1 = "Pelle";    // name1 == "Pelle", name2 == "johan"

// console.log(name1, name2);

// console.log(barksby.name);

let littleBarksby = barksby;        // connects new variable with barksby
littleBarksby.name = "Barksby Jr";  // new value in barksby.name

// let emptyObj1 = {}
// let emptyObj2 = {}
// emptyObj1 === emptyObj2 // false

// let emptyObj2 = emptyObj1;
// emptyObj1 === emptyObj2 // true

// console.log(barksby.name);
// console.log(littleBarksby.name);

const happyBirthday = (name, age) => {
    age++;
    console.log(`Happy Birthday, ${name}`, age)
}

let pelle = "Pelle";
let pelle_age = 2;
happyBirthday(pelle, pelle_age)

console.log("Age outside", pelle_age);

const happyPetBirthday = (pet) => {
    pet.age++;
    console.log(`Happy Birthday, ${pet.name}`, pet.age)
}

happyPetBirthday(meowJr);
console.log("Age outside", meowJr.age);