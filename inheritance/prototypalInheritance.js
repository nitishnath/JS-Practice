let obj1 = {
    fname: "Nitish",
    lname: "Nath",
    getName: function() {
        return `${this.fname} ${this.lname}`
    }
}

let obj2 = Object.create(obj1);

console.log(obj1, 'obj1')
console.log(obj2, 'obj2') //empty object with Prototype of obj1
console.log(obj2.getName(), 'getName()from obj2')
obj2.__proto__.fname = 'Hack'
console.log(obj1.getName(), 'getName()from obj1')

console.log(obj2.__proto__, 'proto')

//Define a constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

//Add a method to the prototype
Person.prototype.sayHello = function () {
    console.log(`Hello, My name is ${this.name} and I am ${this.age} years old...`)
}

// Create an object using this constructor function
const nitish = new Person('Nitish', 27);

//The new object has access to the methods defined on the prototype
nitish.sayHello()

console.log(nitish, 'nitish')

//The prototype of new object is the prototype of constructor function
console.log(nitish.__proto__ === Person.prototype)

//Adding properties to constructor function
Person.prototype.gender = 'Male';
console.log(nitish.gender, 'gender')

//We can also get the prototype using Object.getPrototypeOf()
//output: 
// {
//     "gender": "Male",
//     "sayHello": ƒ sayHello(),
//     "constructor": ƒ Person(name, age)
// }
console.log(Object.getPrototypeOf(nitish), 'getProtoTypeOf')

//true
console.log(Object.getPrototypeOf(nitish) === Person.prototype, 'getProtoTypeOf')

//We can also set the prototype using Object.setPrototypeOf()
let newObj = {
    sayBye() {
        console.log(`Bye, ${this.name}`, 'from set func')
    }
}

// it completely replaces the prototype chain, that's why we lose the access to sayHello method.
// Object.setPrototypeOf(nitish, newObj)

//output:
// {
//     "name": "Nitish",
//     "age": 27,
//     [[prototype]]: Object
            // sayBye: f sayBye()
            // [[prototype]]: Object
            // __proto__: Object
// }
//console.log(nitish, 'after setPrototypeOf');

//nitish.sayBye()

// But no longer has access to the methods defined on the old prototype
console.log(nitish.sayHello,'sayHello') //undefined


//To keep the both sayHello and sayBye available, we should create a new prototype chain that includes both.
//Instead of completely replacing the prototype, we'll create a new prototype chain

let newProto = {
    sayByeEnhanced() {
        console.log(`Bye, ${this.name}`)
    }
}

//Set the prototype of newProto to be the current prototype of nitish
Object.setPrototypeOf(newProto, Object.getPrototypeOf(nitish));

//Now set the prototype of nitish to be newProto
Object.setPrototypeOf(nitish, newProto)


//output:
// Person {
//     age: 27
//     name: 'Nitish'
//     [[prototype]]: Person
//           sayByeEnhanced: f sayByeEnhanced()
//            [[prototype]]: Object
//              gender: 'male'
//              sayHello: f()
//              constructor: f Person(name, age)
//              [[prototype]]: Object
//                 __proto__: Person
//                   ......

// }
console.log(nitish, 'after enhanced prototype')
nitish.sayHello()
nitish.sayByeEnhanced()






