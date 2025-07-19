// function outer() {
//   let a = 10;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }

// let x = 100;

// var y = 200;

// outer();

// function multiple() {
//   for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
// }

// multiple();

// // Function expression and function statement

// increment()();

// function increment() {
//   let val = 0;
//   return function () {
//     val++;
//     console.log(val, "val");
//   };
// }

// function multiplier(factor) {
//   return function (number) {
//     return factor * number;
//   };
// }

// const double = multiplier(2);
// console.log(double);

class Test {
  greet() {
    console.log(this);
  }
}

const t = new Test();
t.greet = t.greet.bind(t);
const greet = t.greet();
greet;
