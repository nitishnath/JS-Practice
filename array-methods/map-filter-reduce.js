//what is Sparse Array?
//Sparse Array is an array that has empty slots in it, created using Array constructor which are not the same as slots filled with value undefined

//example
const sparseArr1 = Array(10)
console.log(sparseArr1, 'sparseArr')

const sparseArr2 = [1,2]
sparseArr2[5] = 10;
console.log(sparseArr2, 'sparseArr2')

const sparseArr3 = [1,2,3,4]
delete sparseArr3[2]
console.log(sparseArr3, 'sparseArr3')

//Reduce Method
//example(1)
const arr1 = [2,6,4,3,1]

const initialVal = 0
const findSum = arr1.reduce((acc, curr) => {
    return acc + curr;
}, initialVal)

console.log(findSum, 'sum')

//example(2)
//Find maximum of this arr1 using reduce() method
const maxVal = - Infinity
const findMax = arr1.reduce((acc, cur) => {
    if(cur > acc) {
        acc = cur
    }
    return acc
}, maxVal)

console.log(findMax, 'findMax')

const users = [
  { firstName: "Akshay", lastName: "Saini", age: 26 },
  { firstName: "Donald", lastName: "Trump", age: 75 },
  { firstName: "Elon", lastName: "Musk", age: 50 },
  { firstName: "Elon", lastName: "Musk23", age: 50 },
  { firstName: "Elon", lastName: "Musk2344", age: 50 },
  { firstName: "Deepika", lastName: "Padukone", age: 26 }
];

// output: {26: 2, 50: 1, 75: 1}

const outout = users.reduce((acc, cur) => {
    if(acc[cur.age]) {
        acc[cur.age] = ++acc[cur.age]
    } else {
        acc[cur.age] = 1
    }
    return acc;
},{})

console.log(outout, 'output')


// output: [
//     {
//         "name": "Piyush",
//         "rollNumber": 31,
//         "marks": 80
//     }
// ]
const students = [
  { name: "Piyush", rollNumber: 31, marks: 80 },
  { name: "Jen", rollNumber: 15, marks: 69 },
  { name: "Kaushal", rollNumber: 16, marks: 35 },
  { name: "Dilpreet", rollNumber: 7, marks: 55 }
];

//question: More than 60 marks and rollnum greater than 15

const output1 = students.reduce((acc, curr) => {
   if(curr.marks > 60 && curr.rollNumber > 15) acc.push(curr)
    return acc
},[])

console.log(output1, 'output1');

//output:
// {
//     'name': ['all the names'],
//     'rollNumber': ['all the rollNumber']
// }

const output2 = students.reduce((acc, curr) => {
    
    if(curr.marks > 40) {
        acc.name.push(curr.name);
        acc.rollNumber.push(curr.rollNumber);
    }
    return acc
},{name: [], rollNumber: []})

console.log(output2, 'output2')

//Return total marks for the students with marks greater than 60 after 20 marks have been added to those students who scored less than 60.

const output3 = students.reduce((acc, curr) => {
    if(curr.marks > 60) {
        acc += curr.marks
    } else if((curr.marks < 60 && (curr.marks + 20 > 60))) {
        acc += curr.marks + 20
    }
    return acc;
},0)

console.log(output3, 'output3')
