'use strict'

console.log([] + false + null + true)

console.log('b' + 'a' + + 'a' + 'a')

const fn = x => x * 2;
console.log(fn.bind(null, 2))

console.log(([] + {})[0])

let x = 0;
console.log(x++)
console.log(++x)
console.log(x)

console.log([1,2,3].map(x => {x*2}))

const on = () => console.log(this);
on()

const outer = () => {
    this.val = 10;
    const inner = () => {
        console.log(val)
    }
    inner()
}
outer()