//call() method
const person1 = {
  name: "Nitish",
  greet: () => {
    console.log("hello" + this.name);
  },
  //   greet: function () {
  //     console.log("hello " + this.name);
  //   },
};

const person2 = {
  name: "Barsha",
};

person1.greet.call(person2); //output: 'hello' only for arrow function, but for anonymous function it will be 'hello Barsha'

function greet1(greeting, punctuation) {
  console.log(greeting + ", " + this.name + punctuation);
}

const person = { name: "Nitish" };
greet1.call(person, "Hello", "!");

//apply()
const arr1 = ["a", "b", "c"];
const arr2 = [1, 2, 3];

//without any method
// function pushArr(arr1, arr2) {
//   for (let i = 0; i < arr2.length; i++) {
//     arr1[arr1.length] = arr2[i];
//   }
//   return arr1;
// }
// console.log(pushArr(arr1, arr2), "pushArr");

//with array.concat() and array.push()
// function arrpush2(arr1, arr2) {
//   arr1.push(...arr2);
//   return arr1;
// }
// console.log(arrpush2(arr1, arr2), "qwerty");

//with apply() method
arr1.push.apply(arr1, arr2);
console.log(arr1, "arr1 with apply");

//bind()
const obj = { name: "nitish" };

function func(age) {
  console.log("Hello " + this.name + " is " + age);
}

const bindFunc = func.bind(obj);
console.log(bindFunc, "bindFunc");
bindFunc(26);

//apply()
function getData(name, age) {
  console.log(`hello ${name} is ${age}`, "Apply method");
}
const arrApply = ["Nitish", 26];
getData.apply(null, arrApply);
// getData.call(null, ...arrApply);
