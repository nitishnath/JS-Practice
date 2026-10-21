// 852. Peak Index in a Mountain Array

// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

// Example 1:
// Input: arr = [0,1,0]
// Output: 1

// Example 2:
// Input: arr = [0,2,1,0]
// Output: 1

function peakIndexInMountainArray (arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        let mid = left + Math.floor((right - left) / 2);

        if(arr[mid] > arr[mid + 1]){
            right = mid
        } else {
            left = mid + 1
        }
    }

    return right;
}

console.log(peakIndexInMountainArray([0,1,0]), 'peakIndexInMountainArray')