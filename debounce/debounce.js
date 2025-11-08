const debounceFunc = (callBack, delay) => {
  let timerId;
  return function (...args) {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      callBack.apply(this, args);
    }, delay);
  };
};

// const debounceWithLeadingAndTrailing = (
//   fn,
//   delay,
//   options = { leading: true, trailing: false }
// ) => {
//   let timerId;
//   let isLeadingInvoked = false;
//   return function (...args) {
//     if (timerId) clearTimeout(timerId);
//     if (options.leading && !timerId) {
//       fn.apply(this, args);
//       isLeadingInvoked = true;
//     } else {
//       isLeadingInvoked = false;
//     }

//     timerId = setTimeout(() => {
//       if (options.trailing && !isLeadingInvoked) {
//         fn.apply(this, args);
//       }
//       timerId = null;
//     }, delay);
//   };
// };

const onChange = (e) => {
  console.log(e.target.value);
};

const debounceSearch = debounceFunc(onChange, 1000);

// const debounceSearch = debounceWithLeadingAndTrailing(onChange, 1000);

const search = document.getElementById("search");
search.addEventListener("keyup", debounceSearch);
