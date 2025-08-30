const checkPalindromeWithoutMethod = (val) => {
    if(typeof val !== 'number' && typeof val !== 'string') {
        return `${val} is not palindrome`
    }

   // Negative numbers are not palindrome
  if (typeof val === 'number') {
    if (val < 0) return `${val} is not palindrome`;
    // val = String(val); // convert number to string
  }
  // Number branch: reverse digits arithmetically

  //time complexity: o(log n)
  //space complexity: o(1)
  if (typeof val === 'number') {
    let reverse = 0;
    const original = val;
    while (val > 0) {
      const rem = val % 10; // last digit
      reverse = (reverse * 10) + rem;
      val = Math.floor(val / 10);
    }
    return original === reverse
      ? `${original} is palindrome`
      : `${original} is not palindrome`;
  }

  // String branch: two-pointer comparison

  //time complexity: o(n)
  //space complexity: o(1)
    if (typeof val === 'string') {
    let i = 0, j = val.length - 1;
    while (i < j) {
      if (val[i] !== val[j]) {
        return `${val} is not palindrome`;
      }
      i++; j--;
    }
    return `${val} is palindrome`;
  }
}

console.log(checkPalindromeWithoutMethod(121))
console.log(checkPalindromeWithoutMethod('nitish'))
console.log(checkPalindromeWithoutMethod('nitin'))
console.log(checkPalindromeWithoutMethod({}))
console.log(checkPalindromeWithoutMethod([]))
console.log(checkPalindromeWithoutMethod(null))
console.log(checkPalindromeWithoutMethod(undefined))
console.log(checkPalindromeWithoutMethod(NaN))
console.log(checkPalindromeWithoutMethod(1232144))
console.log(checkPalindromeWithoutMethod(-1232))
console.log(checkPalindromeWithoutMethod(10))
