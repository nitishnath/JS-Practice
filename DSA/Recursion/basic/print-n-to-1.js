//WAP to print n to 1 using recursion
const printNto1 = (num) => {
    if(num === 0) return
    console.log(num)
    num = num - 1;
    printNto1(num)
}

//printNto1(10)

//WAP to print 1 to n using recursion
let count = 1;
const print1toN = (num) => {
    if(count > num) return
    console.log(count)
    count = count + 1;
    print1toN(num)
}

print1toN(10)
