//26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, 
// remove the duplicates in-place such that each unique element appears only once. 
// The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

const removeDuplicates = (arr) => {
    let pointer = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i+1] > arr[i]) {
            pointer ++;
            arr[pointer] = arr[i+1]
        }
    }
    return pointer +1;
}

const arr = [0,1,1,1,2,2,3,3,4,5,5,6]

console.log(removeDuplicates(arr), 'removeDuplicates')