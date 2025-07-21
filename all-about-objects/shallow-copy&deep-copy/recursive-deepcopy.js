const user1 = {
    name: 'Nitish',
    age: 27,
    social: {
       instagram: {
         accountId: 1,
         email: 'insta@gmail.com'
       },
       facebook: {
         accountId: 2,
         email: 'face@gmail.com'
       }
    }
}

function recursiveDeepCopy(obj) {

    //base case: here we have checked that if obj is not an object or null then return it
    if((typeof obj !== 'object') || obj === null) return obj

    // if obj is an array then create a new array else create a new object
    let newCoppiedObj = Array.isArray(obj) ? [] : {}

    // get all the keys of obj
    let keys = Object.keys(obj)

    // loop through all the keys and copy each key-value pair to newCoppiedObj
    for(let i = 0; i < keys.length; i++) {
        newCoppiedObj[keys[i]] = recursiveDeepCopy(obj[keys[i]])
    }
    
    // store the newCoppiedObj in map
    map.set(obj, newCoppiedObj)
    return newCoppiedObj
}

// console.log(recursiveDeepCopy(user1), 'recursiveDeepCopy')

const user2 = recursiveDeepCopy(user1)

user2.name = 'Barsha'
user2.social.facebook.email = 'barsha@gmail.com'
console.log(user1, 'user1')
console.log(user2, 'user2')