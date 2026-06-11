// Given an array of integers nums and an integer target, return indices of the two numbers 
// such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

const arr = [2,7,11,15];
const target = 9

//Better Solution(using Map()) ==> T.C -- O(nlogn), S.C -- O(n)
const twoSum = (nums, target) => {
    const myMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        const remainingVal = target - nums[i]
        if(myMap.has(remainingVal, i)) {
            return [myMap.get(remainingVal), i]
        } else {
            myMap.set(nums[i], i)
        }
    }

    return [];
}
console.log(twoSum(arr, target), 'Two Sum')

//Optimal Solution(using Two Pointer)--> 1st we need to sort the array then apply two pointer approach
const twoSumOptimal = (nums, target) => {
    nums = nums.sort((a, b) => a - b);
    let i = 0 , j = nums.length - 1;
    while(i <= j) {
        let sum = nums[i] + nums[j];
        if(sum !== target) {
            if(sum > target) {
                j--
            } else {
                i++
            }
        } else {
            return [i, j]
        }
    }
    return []
}

console.log(twoSumOptimal(arr, target), 'Two Sum Optimal')