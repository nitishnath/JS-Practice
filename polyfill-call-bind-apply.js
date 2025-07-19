//polyfill for call
const car = {
  color: "Black",
  company: "BMW",
};

function purchaseCar(currency, price) {
  console.log(
    `I have purchased ${this.color} color ${this.company} of ${currency}${price}`
  );
}

//plyfill for call
Function.prototype.myCall = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new error(this + `It's not callable`);
  }

  context.fun = this;
  context.fun(...args);
};

purchaseCar.call(car, "₹", "1cr");
purchaseCar.myCall(car, "₹", "1cr");

//polyfill for apply()
Function.prototype.myApply = function (context = {}, args = []) {
  if (typeof this !== "function") {
    throw new error(this + `It's not callable`);
  }
  if (!Array.isArray(args)) {
    throw new error("CreateListFromArrayLike called on non-object");
  }

  context.fun = this;
  context.fun(...args);
};

purchaseCar.apply(car, ["₹", "1cr"]);
purchaseCar.myApply(car, ["₹", "1cr"]);

//polyfill for bind()
Function.prototype.myBind = function (context = {}, ...args) {
  if (typeof this !== "function") {
    throw new error(this + `It's not callable`);
  }

  context.fun = this;
  return function (...newArr) {
    return context.fun(...args, ...newArr);
  };
};

const bindFunc = purchaseCar.myBind(car, "₹");
bindFunc("1cr");
