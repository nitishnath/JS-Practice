// 1. Write a function that searches for an element in an array and returns the index of the element; if not present, return -1.

let arr = [10, 20, 30, 40, 50];
let target = 30;

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
        //let mid = Math.floor((left + right) / 2); // this can lead to overflow
        //better way to finding middle value
        let mid = Math.floor(left + (right - left) / 2) // This will never overflow

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

//3. If an array contains duplicate elements, we need to return all indices where the target element is present.

let arrDup = [10, 20, 30, 20, 40, 20];
let targetData = 20;

// Output: [1, 3, 5]

function linearSearchAll(arrDup, targetData) {
    const indices = [];

    for(let i = 0; i < arrDup.length; i++) {
        if(arrDup[i] === targetData) {
            indices.push(i)
        }
    }

    if(indices.length > 0) {
        return indices
    } else {
        return -1
    }
}

console.log(linearSearchAll(arrDup, targetData), 'linearSearchAll')

function binarySearchAll(nums, element) {
    // nums: the input array, which must be sorted in ascending order.
    function findBound(isFirst) {
        //isFirst = true : find the 1st occurance
        //isFirst = false : find the last occurance 
        let left = 0;
        let right = nums.length - 1;
        let ans = -1 // stores the matches indics, if no index found -1 will return

        while(left <= right) {
            let mid = Math.floor((right + left) / 2)
            // when the middle ele matches the target we need to store its index in answer.
            // But we don't return immediately, cause there might be more occurrences on either side.
            if(nums[mid] === element) {
                ans = mid;

            // Now behaviour depends on the isFirst
            if(isFirst) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
            } else if(nums[mid] < element) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }

        return ans;
    }

    const first = findBound(true);
    if(first === -1) return []
    const last = findBound(false);

    return Array.from(
        {length: last - first + 1},
        (_, i) => first + i
    )
}

console.log(binarySearchAll([1, 2, 2, 2, 3, 4], 2), 'binarySearchAll')