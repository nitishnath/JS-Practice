// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

const arrStrs = ["eat","tea","tan","ate","nat","bat"]

const groupAnagram = (strs) => {
    const myMap = new Map();
    for(let i = 0; i < strs.length; i++) {
        let originalStr = strs[i];
        let sortedStrKey = originalStr.split('').sort().join('');
        //console.log(sortedStrKey, 'sortedStrKey')

        if(!myMap.has(sortedStrKey)) {
            myMap.set(sortedStrKey, [])
        }

        myMap.get(sortedStrKey).push(strs[i])
        // console.log(myMap.get(sortedStrKey).push(strs[i]), 'groupAnagram(arrStrs)')
    }
    return Array.from(myMap.values())
}

// groupAnagram(arrStrs);

console.log(groupAnagram(arrStrs), 'groupAnagram(arrStrs)')

