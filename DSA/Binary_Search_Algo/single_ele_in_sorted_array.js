//540. Single Element in a Sorted Array

// You are given a sorted array consisting of only integers where every element appears exactly twice, except for one element which appears exactly once.

// Return the single element that appears only once.

// Your solution must run in O(log n) time and O(1) space.

// Example 1:

// Input: nums = [1,1,2,3,3,4,4,8,8]
// Output: 2
// Example 2:

// Input: nums = [3,3,7,7,10,11,11]
// Output: 10


//Time Complexity: O(n)
//Space Complexity: O(n)
function singleNonDuplicate(arr) {
    let myMap = new Map();
    
    for(let item of arr) {
        let key = JSON.stringify(item)
        if(myMap.has(key)) {
            let currVal = myMap.get(key);
            currVal++
            myMap.set(key, currVal)
        } else {
            myMap.set(key, 1)
        }
    }

    for(const [key, value] of myMap) {
       if(value === 1) 
        return key
    }
}

console.log(singleNonDuplicate([3,3,7,7,10,11,11]), 'singleNonDuplicate')