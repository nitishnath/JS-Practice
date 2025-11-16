//Implement flatten using recursion and Flatten but remove falsy values

const arr1 = [1,3, [[[[[[4, null,[[[54, false]]]]]]]]]]

const flattenArr = (arr, output=[]) => {

    if(arr === null || arr === undefined || typeof arr !== 'object') return 'Please provide an array'

    for(let key of arr) {
        if(!Array.isArray(key)) {
            if(!key) continue; // it'll remove the falsey values
            output.push(key)
        } else {
            flattenArr(key, output)
        }
    }
    return output;
}

console.log(flattenArr(arr1), 'flatten Array')