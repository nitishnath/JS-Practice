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
function singleNonDuplicateBruteForce(arr) {
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

console.log(singleNonDuplicateBruteForce([3,3,7,7,10,11,11]), 'singleNonDuplicateBruteForce')

//TC: O(logn)
//SC: O(1)
function singleNonDuplicateOptimize(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = left + Math.floor((right - left) / 2)

        if(arr[mid - 1] === arr[mid] && arr[mid + 1] === arr[mid]) {
            return arr[mid]
        }

        if(arr[mid - 1] === arr[mid]) {
            let leftOdd = (mid+left) - 1;

            if(leftOdd % 2 === 1) {
                right = mid - 2
            } else {
                left = mid + 1
            }
        } else {
            // let leftOdd = mid - left;
            let rightOdd = right - (mid + 1)

            if(rightOdd % 2 === 1) {
                // right = mid - 1
                left = mid + 2
            } else {
                // left = mid + 2
                right = mid - 1
            }
        }
    }

    return arr[right]
}

console.log(singleNonDuplicateOptimize([1,1,3,3,4,4,8,8,7]), 'singleNonDuplicateOptimize')