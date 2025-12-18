const a = new String('Hello World!')
console.log(a, 'A') // "Hello World!"(object)

const b = String('Hello World 2.0')
console.log(b, 'B') // Hello World 2.0(string)

const greetList = ['Hello', ' ', 2, 'Nitish', '!'];
const mainStr = 'Hi'

console.log(mainStr.concat(...greetList), 'string concat method')