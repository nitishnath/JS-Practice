//throttle function in count based
// function throttleOnCount(func, count) {
//   let counter = 0;

//   return function (...args) {
//     if (++counter !== count) return;
//     counter = 0;
//     func.call(this, ...args);
//     //func.apply(this, args); //Preserving this Context
//   };
// }

// const onClick = (e) => {
//   console.log(e, "clicked");
// };

// const throttleClick = throttleOnCount((e) => onClick(e), 4);

// document.getElementById("btn").addEventListener("click", throttleClick);

//Time-Based Throttle
// const timeBasedThrottle = (callBackFunc, delay) => {
//   let lastExecutionTime = 0;

//   return function (...args) {
//     let now = new Date();
//     if (now - lastExecutionTime >= delay) {
//       lastExecutionTime = now;
//       callBackFunc.apply(this, args);
//     }
//   };
// };

// const onClick1 = () => {
//   console.log("Button clicked at", new Date().toLocaleTimeString());
// };

// const throttleFucWithTime = timeBasedThrottle(onClick1, 3000);

// document.getElementById("btn").addEventListener("click", throttleFucWithTime);

//Custom Throttle Implementation with leading and trailing
function throttleWithLeadingTrailing(
  func,
  delay,
  options = { leading: true, trailing: true }
) {
  let lastTimerId;
  let lastArgs;

  return function (...args) {
    const { leading, trailing } = options;

    //need to create a wait function for all the consecutive calls
    const waitFunc = () => {
      if (trailing && lastArgs) {
        func.apply(this, lastArgs);
        lastArgs = null;
        lastTimerId = setTimeout(waitFunc, delay);
      } else {
        lastTimerId = null;
      }
    };

    if (!lastTimerId && leading) {
      func.apply(this, args);
    } else {
      lastArgs = args;
    }

    //this case for trailing
    if (!lastTimerId) {
      lastTimerId = setTimeout(waitFunc, delay);
    }
  };
}

const onClickWithLeadingTrailing = () => {
  console.log("Clicked");
};

const options = {
  leading: false,
  trailing: true,
};

const throttleFunc = throttleWithLeadingTrailing(
  onClickWithLeadingTrailing,
  2000,
  options
);

document.getElementById("btn").addEventListener("click", throttleFunc);
