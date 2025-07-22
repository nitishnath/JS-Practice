const set = new Set()
let arr = [1,2,2,3,4,4,5]
let obj = {
    name: 'nitish',
    age: 26,
    greeting() {
        return this.age
    }
}
for(let entries of arr) {
    set.add(entries)
}

// set.delete(2)
const iterator1 = set.entries()
for(const item of iterator1) {
    console.log(item)
}

console.log(set, 'set')


//difference()
const odd = new Set([1,3,5,7])
const square = new Set([1,4,9])
console.log(odd.difference(square), 'difference')