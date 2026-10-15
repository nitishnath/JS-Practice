// Write a function that searches for an element in an array and returns the index of the element; if not present, return -1.

arr = [10, 20, 30, 40, 50];
target = 30;

// 1. Brute-force approach — Linear Search

function searchLinear(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1;
}

console.log(searchLinear(arr, target), 'searchLinear')
console.log(arr.indexOf(target), 'arr.indexOf')

// 2. More efficient algo is Binary Search if the given array is sorted we can reduce the time complexity from O(n) to O(logn)

function searchBinary(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if(arr[mid] === target) {
            return mid;
        }

        if(arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1
        }
    }

    return -1;
}

console.log(searchBinary(arr, target), 'searchBinary')