//throttle function in count based and this throttleOnCount function take function which will invoke once after the given count.
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
const timeBasedThrottle = (callBackFunc, delay) => {
  let lastTimerId;
  let lastRun;

  return function (...args) {
    //when the click is the 1st click or the initial click
    if(!lastRun) {
      callBackFunc.apply(this, args);
      lastRun = Date.now()
    } else {
      clearTimeout(lastTimerId);
      lastTimerId = setTimeout(() => {
        if((Date.now() - lastRun) >= delay) {
          callBackFunc.apply(this, args);
          lastRun = Date.now()
        }
      }, delay - (Date.now() - lastRun));
    }
  };
};

const onClick1 = () => {
  console.log("Button clicked at", new Date().toLocaleTimeString());
};

const throttleFucWithTime = timeBasedThrottle(onClick1, 3000);

document.getElementById("btn").addEventListener("click", throttleFucWithTime);

//Custom Throttle Implementation with leading and trailing
// function throttleWithLeadingTrailing(
//   func,
//   delay,
//   options = { leading: true, trailing: true }
// ) {
//   let lastTimerId;
//   let lastArgs;

//   return function (...args) {
//     const { leading, trailing } = options;

//     //need to create a wait function for all the consecutive calls, inside this waitFunc we're checking only for trailing, cause trailing is happen after a delay and the consutive call for leading is trailing only.
//     const waitFunc = () => {
//       if (trailing && lastArgs) {
//         func.apply(this, lastArgs);
//         lastArgs = null;
//         lastTimerId = setTimeout(waitFunc, delay);
//       } else {
//         lastTimerId = null;
//       }
//     };

       // this is for leading inital case
//     if (!lastTimerId && leading) {
//       func.apply(this, args);
//     } else {
//       lastArgs = args;
//     }

//     //this case for trailing and inside this setTimeout I passed this helper function waitFunc which will called recursively will start the timer...
//     if (!lastTimerId) {
//       lastTimerId = setTimeout(waitFunc, delay);
//     }
//   };
// }

// const onClickWithLeadingTrailing = () => {
//   console.log("Clicked");
// };

// const options = {
//   leading: false,
//   trailing: true,
// };

// const throttleFunc = throttleWithLeadingTrailing(
//   onClickWithLeadingTrailing,
//   2000,
//   options
// );

// document.getElementById("btn").addEventListener("click", throttleFunc);
