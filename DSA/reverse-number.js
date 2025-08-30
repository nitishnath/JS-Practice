var reverse = function(x) {
    let reverse = 0;
    let xCopy = x;
    // let limit = Math.pow(2,31);
    let limit = 2**31;
    x = Math.abs(x)

    while(x>0) {
        let rem = x % 10;
        reverse = (reverse * 10) + rem;
        x = Math.floor(x / 10)
    }

    if(reverse < -limit || reverse > (limit - 1)) {
        return 0;
    } else {
        return (xCopy < 0) ? -reverse : reverse; 
    }
};

console.log(reverse(123), 'reverse(123)');
console.log(reverse(-123), 'reverse(-123)');
console.log(reverse(120), 'reverse(120)');
console.log(reverse(1534236469), 'reverse(1534236469)');
console.log(reverse(2147483647), 'reverse(2147483647)');
console.log(reverse(-2147483648), 'reverse(-2147483648)');
console.log(reverse(1563847412), 'reverse(1563847412)')