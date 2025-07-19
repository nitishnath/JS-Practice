var a = 10;
console.log(window.a);

function b() {
  var x = 100;
}

// console.log(window.b);

console.log(window.x); //undefined
// console.log(x)
console.log(this.x); //undefined

console.log(window);

console.log(window.document);

console.log(window.navigator.userAgent, "user agent"); // this user agent is used to check the browser type and version and os of the user

console.log(window.location.href, "location"); // this location is used to check the url of the page
