//Write a function countDigits(n)that takes an integer n and returns how many digits it contains.

const countDigits = (num) => {
    let count = 0;
    let currVal = Math.abs(num)
    if(num === 0) {
        return 1;
    }
    while(currVal !== 0) {
        count ++;
        currVal = Math.floor(currVal / 10)
    }
    return count;
}

//time complexity: o(log n)
//space complexity: o(1)

console.log(countDigits(254323), 'countDigits1')
console.log(countDigits(-254323), 'countDigits2')
console.log(countDigits(0), 'countDigits3')
console.log(countDigits(1), 'countDigits4')
console.log(countDigits(-1), 'countDigits5')

