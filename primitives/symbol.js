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

//output: undefined, cause here it is searching symObj1 object not that Symbol that's why it is undefined...
console.log(mainObj.symObj1, 'mainObj.symObj1')

for(items in mainObj) {
    console.log(mainObj[items], 'items')
}