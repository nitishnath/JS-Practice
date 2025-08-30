//27. Remove Element
//Given an integer array nums and an integer val, 
// remove all occurrences of val in nums in-place. 
// The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

const removeElement = (nums, val) => {
    let pointer = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== val) {
            nums[pointer] = nums[i]
            pointer ++
        }
    }
    return pointer;
}

const arr = [0,1,2,2,3,0,4,2]
const arr2 = [3,2,2,3]
const val = 2
const val2 = 3

console.log(removeElement(arr, val), 'removeElement1')
console.log(removeElement(arr2, val2), 'removeElement2')
