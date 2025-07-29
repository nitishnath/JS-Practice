class Animal {
    constructor(name, isDomesticated) {
      this.name = name;
      this.isDomesticated = isDomesticated
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
    isDomesticated() {
        return this.isDomesticated
    }
  }

  class Dog extends Animal {
    constructor(name, gender, color, isDomesticated) {
        super(name, isDomesticated) //invoke super class constructor and pass in the name parameter
        this.gender = gender;
        this.color = color;
    }
    isDomesticated () {
        super.isDomesticated()
    }
    speak() {
        console.log(`${this.name} barks and it's color is ${this.color} and gender is ${this.gender}...`)
    }
  }

const dog = new Dog('Alice', 'Female', 'Gray&white', true)
dog.speak()

//output: Animal { constructor: [Function: Animal], speak: [Function: speak] }
console.log(dog.__proto__, 'proto')

console.log(dog instanceof Dog, 'instanceof') //true
console.log(dog instanceof Animal, 'instanceof') // true
console.log(dog instanceof Object, 'instanceof') // true
console.log(dog instanceof Array, 'instanceof') // false
console.log(dog instanceof Map, 'instanceof') // false
console.log(dog instanceof Set, 'instanceof') // false

console.log(dog.isDomesticated, 'isDomesticated')