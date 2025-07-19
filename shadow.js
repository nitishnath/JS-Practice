// Function scope Shadowing

console.log("Example 1");
var x = 10;
function test() {
  var x = 100;
  console.log(x, "from inisde");
}
test();
console.log(x, "from outside");

console.log("Example 2");
var c = 100;
function test2() {
  var c = 200;
  console.log(window.c, "from inner c"); //100
  window.c = 300;
}
test2();
console.log(c, "from outer c"); //300
console.log(window.c, "from outer c with window"); //300

console.log("Example 3");
// let illegal = 100;
// {
//   var illegal = 200; //error
// }
console.log(illegal, "illigal");
