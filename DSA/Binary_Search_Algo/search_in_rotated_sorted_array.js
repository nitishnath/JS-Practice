//33. Search in Rotated Sorted Array

//Given the array nums after the possible rotation and an integer target, 
// return the index of target if it is in nums, or -1 if it is not in nums.

//You must write an algorithm with O(log n) runtime complexity.

//Input: nums = [4,5,6,7,0,1,2], target = 0
//Output: 4

function rotatedSortedArray(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while(left <= right) {
        let mid = left + Math.floor((right - left) / 2);

        if(target === nums[mid]) {
            return mid;
        } else if(nums[mid] >= nums[left]) { //left portion sorted // here >= is because there might be a case where left and middle will point to same index. example: [3,1]
            if(target < nums[mid] && nums[left] <= target) {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            if(target > nums[mid] && target <= nums[right]) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    return -1;
}

console.log(rotatedSortedArray([4,5,6,7,0,1,2], 0), 'rotatedSortedArray')
