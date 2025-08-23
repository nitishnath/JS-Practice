const checkPalindromeWithoutMethod = (val) => {
    if(typeof val !== 'number' && typeof val !== 'string') {
        return `${val} is not palindrome`
    }

    if(typeof val === 'number' && val < 0) {
        return `${val} is not palindrome`
    }

    let start = 0;
    let end = val.length - 1;
    for(let i = start, j = end; i<=j; i++, j--) {
        if(val[i] !== val[j]) {
            return `${val} is not palindrome`
        }
    }
    return `${val} is palindrome`
}

console.log(checkPalindromeWithoutMethod(121))
console.log(checkPalindromeWithoutMethod('nitish'))
console.log(checkPalindromeWithoutMethod('nitin'))
console.log(checkPalindromeWithoutMethod({}))
console.log(checkPalindromeWithoutMethod([]))
console.log(checkPalindromeWithoutMethod(null))
console.log(checkPalindromeWithoutMethod(undefined))
console.log(checkPalindromeWithoutMethod(NaN))
console.log(checkPalindromeWithoutMethod(12321))
console.log(checkPalindromeWithoutMethod(-1232))
