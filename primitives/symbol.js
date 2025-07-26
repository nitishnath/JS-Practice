const sym = Symbol();
const sym1 = Symbol('nitish');
const sym2 = Symbol('nitish');

console.log(sym, 'sym')
console.log(sym1, 'sym1')
console.log(sym2, 'sym2')
console.log(sym1 === sym2)


const symObj1 = Symbol()
const symObj2 = Symbol()
const mainObj = {}

mainObj[symObj1] = "Nitish"
mainObj[symObj2] = 'Barsha'

//Adding a normal key to mainObj
mainObj.title = 'Nath'


//output: 
// {
// Symbol() : "Nitish"
// Symbol() : "Barsha"
// }
console.log(mainObj, 'mainObj')

//output: Barsha
console.log(mainObj[symObj2], 'mainObj[symObj2]')

//output: undefined, cause here it is searching symObj1 string not that Symbol that's why it is undefined...
console.log(mainObj.symObj1, 'mainObj.symObj1')

for(items in mainObj) {
    console.log(mainObj[items], 'items')
}

//unique Object Property Keys
const id = Symbol('id');
const user = {
    name: 'Nitish',
    [id]: 101, //symbol as a property key
    id: 102
}
const anotherId = Symbol('id')
user[anotherId] = 202

//output: 101
console.log(user[id], 'user[id]')

//output: 102
console.log(user.id, 'user.id')

//outpur: 202
console.log(user[anotherId], 'user[anotherId]')

//Symbols are Hidden from iteration
const symUser = {
    name: 'Barsha',
    [Symbol('secret')]: 'She loves me more!'
}

for(let items in symUser) {
    console.log(symUser[items], 'items')
}

//output: ['name']
console.log(Object.keys(symUser), 'Object.keys(symUser)')

//output: [Symbol(secret)]
console.log(Object.getOwnPropertySymbols(symUser), 'Object.getOwnPropertySymbols(user)')

//Symbol.for() and Symbol.keyFor()
const usingSymFor1 = Symbol.for('bar') //create a new global symbol
const usingSymFor2 = Symbol.for('bar') //retrieve the already created symbol
const normalStr = 'Nitish'

//output: true
console.log(usingSymFor1 === usingSymFor2, 'usingSymFor1 === usingSymFor2')

//output: Symbol(Nitish)
console.log(Symbol.for(normalStr), 'NormalStr')

//Global Symbol Registry

//output: Symbol(foo)
console.log(Symbol.for('foo'), 'Symbol.for(foo)')

// output: foo
console.log(Symbol.keyFor(Symbol.for('foo')), 'Symbol.keyFor(Symbol.for(foo))')

//output: bar
console.log(Symbol.keyFor(Symbol.for('bar')), 'Symbol.keyFor(Symbol.for(bar))')

//output: true
console.log(Symbol.keyFor(Symbol.for('bar')) === 'bar', 'Symbol.keyFor(Symbol.for(bar)) === bar')
