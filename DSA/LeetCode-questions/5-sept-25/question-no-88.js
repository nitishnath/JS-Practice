//88. Merge Sorted Array

//You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

// Example 1:

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.
// Example 2:

// Input: nums1 = [1], m = 1, nums2 = [], n = 0
// Output: [1]
// Explanation: The arrays we are merging are [1] and [].
// The result of the merge is [1].

//Time Complexity: O(m+n)
//Space Complexity: O(m)
const mergeSortedArray = (nums1, m, nums2, n) => {
    let copyOfNums1 = nums1.slice(0, m); // real copy of nums1
    let pointer1 = 0;
    let pointer2 = 0;
    for(let i = 0; i < m+n; i++) {
       if(copyOfNums1[pointer1] <= nums2[pointer2] || pointer2 === n) {
            nums1[i] = copyOfNums1[pointer1++]
        } else {
            nums1[i] = nums2[pointer2++]
        }
    }
    return nums1
}

// let nums1 = [1,2,3, 0, 0, 0];
let nums1 = [2,7,10];
let m = 3;
let nums2 = [2,5,6];
let n = 3;
console.log(mergeSortedArray(nums1, m, nums2, n), 'mergeSortedArray')