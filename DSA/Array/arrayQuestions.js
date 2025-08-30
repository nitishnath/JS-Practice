// write a function that searchs for an element in an array and returns the index of the element, if not present return -1
const searchElement = (arr, num) => {
    // for(let i = 0; i < arr.length - 1; i++) {
    //     if(num === arr[i]) {
    //         return i
    //     }
    // }
    // return -1;


    //time complexity: o(n)
    //space complexity: o(1)

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



//time complexity: o(n)
//space complexity: o(1)
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



//time complexity: o(n)
//space complexity: o(1)
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



//time complexity: o(n)
//space complexity: o(1)
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

//time complexity: o(n)
//space complexity: o(1)
//Write a function secondLargest(arr) that returns the second largest distinct number in an array.

const findSecondLargest = (arr) => {

    if(arr.length < 2) {
        return 'Array should have atleast two elements!'
    }

    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for(let num of arr) {

        // main catch here is if arr[i] is greater than firstLargest then previous firstLargest will be stored in secondLargest and then firstLargest will update.
        if(num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num
        } else if(num > secondLargest && num !== firstLargest) { //this is to handle the case when there are duplicate elements in the array
            secondLargest = num
        }
    }
    return secondLargest === -Infinity ? 'No second largest found!' : secondLargest
}

console.log(findSecondLargest(arr1), 'findSecondLargest')