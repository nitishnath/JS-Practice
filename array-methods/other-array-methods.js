//Array.prototype.concat()

const concatArr1 = ["a", "b", "c"];
const concatArr2 = ["d", "e", "f"];
const concatNestedArr = [1,[2,3]];
const concatSparse = new Array(10)
console.log(concatSparse, 'concatSparse')
const concatArr3 = concatArr1.concat(concatArr2, concatSparse);
console.log(concatArr3, 'concatArr3') // ["a","b","c","d","e","f",null,null,null,null,null,null,null,null,null,null]

const concatArr4 = concatArr1.concat(concatArr2, concatNestedArr)
console.log(concatArr4, 'concatArr4')


//Array.prototype.entries()
const array = ["a", "b", "c"];

const iterator = array.entries()
// console.log(iterator.next().value)
// console.log(iterator.next().value)

for(const [index, element] of iterator) {
    console.log(index, element, 'element')
}

//Array.prototype.every()
const everyArr1 = [12, 5, 8, 130, 44]

const isBigEnough = everyArr1.every(el => el > 10);
console.log(isBigEnough, 'isBigEnough')

// Check if one array is a subset of another array

const isSubset = (arr1, arr2) => {
    return arr2.every(el => arr1.includes(el))
}

console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]), 'isSubset')

//Array.prototype.fill()
const fillArr = [1,2,3,4]
console.log(fillArr.fill({name: 'Nitish'}, -2))
console.log(new Array(3).fill({}), 'create array')

//Using fill() to create a matrix of all 1
const fillMatrixArr = new Array(3)

for(let i = 0; i < fillMatrixArr.length; i++) {
    fillMatrixArr[i] = new Array(4).fill(i)
}

console.log(fillMatrixArr, 'fillMatrixArr')

//Array.prototype.find()
//Find an object in an array by one of its properties
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

// console.log(inventory.find(el => el.name === 'bananas'), 'findObj')

//Using arrow function and destructuring
console.log(inventory.find(({name}) => name === 'cherries'), 'findObj')

//Array.prototype.flat() && Array.prototype.flatMap()

const flatArr = [1, 2, 3, 4];

//output: [[2], [4], [6], [8]]
// const outputFlatArr = flatArr.reduce((acc, curr) => {
//     acc.push([curr * 2])
//     return acc;
// }, [])

const outputFlatArr = flatArr.flatMap(el => [[el * 2]])

console.log(outputFlatArr, 'outputFlatArr')

//Array.prototype.indexOf()
//Finding all the occurrences of an element
const indexOfarray = ["a", "b", "a", "c", "a", "d"];
const element = 'a'
const outputIndexOfarray =[]

const allIndices = indexOfarray.reduce((acc, curr, index) => {
    if(curr === 'a') acc.push(index)
    return acc;
},[])
console.log(allIndices, 'allIndices')

//Array.prototype.forEach()
const forEachArr = [5,4,5]
let sum = 0

const sumFunc = async (a, b) => a + b

forEachArr.forEach(async (ele) => {
    sum = await sumFunc(sum, ele)
})

console.log(sum, 'sum in forEach') // Naively expected output: 14 // Actual output: 0

forEachArr.reduce(async (pAcc, curr) => {
    const acc = await pAcc;
    return sumFunc(acc, curr)
},Promise.resolve(0)).then(sum => console.log(sum, 'sum in reduce')).catch(err => console.log(err))

//Array.prototype.join()
const joinArr1 = ["Earth", "Fire", "Air", "Water"];
console.log(joinArr1.join(), 'joinArr.join()') //Earth,Fire,Air,Water

const joinArr2 = [
  [1, 2, [[[3]]]],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(joinArr2.join(), 'joinArr2,join()') //1,2,3,4,5,6,7,8,9
console.log(joinArr2.join(';'), 'joinArr2,join()') //1,2,3;4,5,6;7,8,9

//Array.prototype.pop()
const arrayLikePop = {
    length: 3,
    unrelated: 'foo',
    2: 5
}

console.log(Array.prototype.pop.call(arrayLikePop), 'Calling pop() on non-array objects')
console.log(arrayLikePop, 'After pop arrayLikePop') //{ "length": 2, "unrelated": "foo" }

const arrayLikePopEmpty = {}
Array.prototype.pop.call(arrayLikePopEmpty)
console.log(arrayLikePopEmpty, 'arrayLikePopEmpty') // { "length": 0 }

//Array.prototype.push()

const arraLikePushObjWithLength = {
    length: 3,
    unrelated: 'foo',
    3: 4
}

const arraLikePushObjWithoutLength = {
    unrelated: 'foo',
    2: 4
}

console.log(arraLikePushObjWithLength, 'before push arraLikePushObjWithLength') // {3: 4, length: 3, unrelated: 'foo'}
console.log(Array.prototype.push.call(arraLikePushObjWithLength, 1,2,3), 'Calling push() on non-array objects') // 6
console.log(arraLikePushObjWithLength, 'after push arraLikePushObjWithLength') //{3: 1, 4: 2, 5: 3, length: 6, unrelated: 'foo'}

console.log(Array.prototype.push.call(arraLikePushObjWithoutLength, 1,2,3), 'after push arraLikePushObjWithoutLength') // 3
console.log(arraLikePushObjWithoutLength, 'after push arraLikePushObjWithoutLength') //{0: 1, 1: 2, 2: 3, length: 3, unrelated: 'foo'}


