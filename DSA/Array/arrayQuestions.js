// write a function that searchs for an element in an array and returns the index of the element, if not present return -1
const searchElement = (arr, num) => {
    // for(let i = 0; i < arr.length - 1; i++) {
    //     if(num === arr[i]) {
    //         return i
    //     }
    // }
    // return -1;


    //using for of loop
    for(let i of arr) {
        if(num === i) {
            return i
        }
    }
    return -1;
}

const arr = [4,5,6,8,10,11,67]

console.log(searchElement(arr, 5), 'data1')
console.log(searchElement(arr, 11), 'data2')
console.log(searchElement(arr, 55), 'data3')



//Write a function that returns the number of negative numbers in an array.
const findNegativeNumber = (arr) => {
    let negativeCount = 0;
    for(let num of arr) {
        if(num < 0) {
            negativeCount ++
        }
    }
    return negativeCount;
}

const arr1 = [4,-5,6,8,10,-11,67]

console.log(findNegativeNumber(arr1), 'findNegativeNumber')



//Write a function that returns the smallest number in an array.
const findSmallestNum = (arr) => {
    let smallest = Infinity;
    for(let num of arr) {
        if(num < smallest) {
            smallest = num
        }
    }
    return smallest;
}

console.log(findSmallestNum(arr1), 'findSmallestNum')



//Write a function that returns the largest number in an array.
const findLargestNum = (arr) => {
    let largest = -Infinity;
    for(let num of arr) {
        if(num > largest) {
            largest = num
        }
    }
    return largest;
}

console.log(findLargestNum(arr1), 'findLargestNum')

console.log(Infinity, 'Infinity')
console.log(-Infinity, '-Infinity')