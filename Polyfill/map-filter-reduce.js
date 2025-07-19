//map() polyfill
//syntax: Array.map((num, i, arr) => {})
Array.prototype.myMap = function(callBack) {
    let temp = []
    for(let i = 0; i < this.length; i++) {
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