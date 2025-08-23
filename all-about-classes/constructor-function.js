function Animal(name) {
    this.name = name;
}

Animal.prototype.bark = function() {
    console.log('...' + this.name)
}

function Dog(name, bread) {
    Animal.call(this, name) // inherit properties from Animal
    this.bread = bread
}

//Inherit methods from Animal by setting the prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

const dog = new Dog('Alice', 'Labrador')
dog.bark()