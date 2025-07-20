//Shallow Copy for objects
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

// const user2 = {...user1} //copying using spread operator
// const user3 = Object.assign({}, user1) //copying using Object.assign()
// user2.name = 'Barsha'
// user2.social.accountId = 2
// user3.name = 'Hack'
// user3.social.accountId = 3

// console.log(user1, 'user1 shallow')
// console.log(user2, 'user2 shallow')
// console.log(user3, 'user3 shallow')

//Deep Copy for objects
const deepUser2 = JSON.parse(JSON.stringify(user1));
deepUser2.name = 'Barsha'
deepUser2.social.instagram.accountId = 3
console.log(user1, 'user1 deepCopy')
console.log(deepUser2, 'deepUser2 deepCopy')


//structuredClone()
const deepUser3 = structuredClone(user1)
deepUser3.name = 'Hack'
deepUser3.social.facebook.email = 'hack@gmail.com'
console.log(deepUser3, 'deepUser3 deepCopy')