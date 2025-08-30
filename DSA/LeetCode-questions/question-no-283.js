//283. Move Zeroes
//Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

//Note that you must do this in-place without making a copy of the array.

//Example 1:

//Input: nums = [0,1,0,3,12]
//Output: [1,3,12,0,0]

const moveZeros = (nums) => {
    let pointer = 0;
    let temp = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
           temp =  nums[pointer]
           nums[pointer] = nums[i]
           nums[i] = temp
           pointer ++
        }
    }
    return nums;
}

let nums = [0,1,0,3,12,12,0,7,0,8,8,0]
let nums1 = [0]

console.log(moveZeros(nums), 'moveZeros')
console.log(moveZeros(nums1), 'moveZeros1')
