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