//344. Reverse String

//Write a function that reverses a string. The input string is given as an array of characters s.
//You must do this by modifying the input array in-place with O(1) extra memory.

//Example 1:
//Input: s = ["h","e","l","l","o"]
//Output: ["o","l","l","e","h"]

const reverseString = (arr) => {
    for(let i = 0; i < (arr.length/2); i++) {
        let temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp
    }

    return arr;
}
let arr = ["h","e","l","l","o"]
console.log(reverseString(arr), 'reverseString')