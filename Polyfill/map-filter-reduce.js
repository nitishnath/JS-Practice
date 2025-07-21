//map() polyfill
//syntax: Array.map((num, i, arr) => {})
Array.prototype.myMap = function(callBack) {
    let temp = []
    for(let i = 0; i < this.length; i++) { //here this means the parent array where this myMap called upon
        temp.push(callBack(this[i], i, this))
    }
    return temp
}

const arr = [1,2,3,4]
const  multiplyByTwo = arr.myMap((num, i, arr) => {
    return num * i
})

console.log(multiplyByTwo, 'multiplyByTwo')


//filter() polyfill
Array.prototype.myFilter = function(cb) {
    let temp = []
    for(let i = 0; i < this.length; i++) {
        //here we need to check if the cb satisfies the given condition or not
        if(cb(this[i], i, this)) {
            temp.push(this[i])
        }
    }
    return temp;
}

let arr1 = [1,2,3,4,5]

const evenNum = arr1.myFilter((item, i) => {
    if(item % 2 === 0) {
        return item
    }
})
console.log(evenNum, 'evenNum')

//reduce() polyfill
//arr.reduce((accumulator, currentValue, currentIndex, arr) => {}, initialValue)
Array.prototype.myReduce = function(callBack, initialValue) {
    let acc = initialValue
    for(let i = 0; i < this.length; i++) {
        acc = acc ? callBack(acc, this[i], i, this) : this[i]
    }
    return acc
}

const arr2 = [1,2,3,4]
const sum = arr2.myReduce((acc, curr, i, arr)=> {
    return acc + curr
}, 0)

console.log(sum, 'sum')