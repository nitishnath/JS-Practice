function a() {
  var b = 10;
  c();
  function c() {
    console.log(b, "b1");
  }
}

a();

console.log(window.b, "b2"); // undefined, because b is not present inside window object
console.log(window, "window");

var x = 10;

var x = 100;

console.log(x, "x declared twice with var keyword");

{
  let block = 1123;
}

console.log(block, "block"); // refrenceError
