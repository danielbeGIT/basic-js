class Animal {
    constructor(name) {
      this.name = name
    }
    
    speak() {
      return `${this.name} makes a noise.`
    }
}
  
    class Pet extends Animal {
        constructor(name) {
        super(name)
        this.hasOwner = true
    }
}
  
    class Dog extends Pet {
        constructor(dogname, barkSound = "woff") {
        super(dogname)
        this.barkSound = barkSound
    }
    
    speak() {
      return `${this.name} barks: ${this.barkSound}`
    }
}

const animal1 = new Animal("Anonymous Animal")
console.log(animal1.speak())

const goodboi1 = new Dog("Good boi 1")
console.log(goodboi1.speak())

const goodboi2 = new Dog("Good boi 2", "aoooooooo")
console.log(goodboi2.speak())

console.log(goodboi2)