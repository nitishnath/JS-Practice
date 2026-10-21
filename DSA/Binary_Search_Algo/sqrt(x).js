//69. Sqrt(x)

//Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
//The returned integer should be non-negative as well.

// Example 1:

// Input: x = 4
// Output: 2
// Explanation: The square root of 4 is 2, so we return 2.

function mySqrt(nums) {
    if(nums < 2) return nums

    let left = 2;
    let right = Math.floor(nums/2);

    while(left<=right) {
        let mid = Math.floor((left + right) / 2)

        if(mid * mid === nums) {
            return mid
        } else if(mid * mid > nums ) {
            right = mid - 1;
        } else {
            left = mid + 1
        }
    }
    return right;
}

console.log(mySqrt(1000), 'mySqrt')