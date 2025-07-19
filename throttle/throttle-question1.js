//for question refer to notebook
const throttle = (array, limit, callBack, delay) => {
  let timerId;
  let lastRun; // to check when the function run last
  let queue = [...array];

  return function () {
    //ir this is the first call
    if (!lastRun) {
      let ele = queue.splice(0, limit);
      callBack(ele);
      lastRun = Date.now();
    } else {
      // if the function is invoked before time
      clearTimeout(timerId); //need to clear the timerId if the function is invoked before time
      timerId = setTimeout(() => {
        if (Date.now() - lastRun >= delay) {
          let ele = queue.splice(0, limit);
          callBack(ele);
          lastRun = Date.now();
        }
      }, delay - (Date.now() - lastRun));
    }
  };
};

const btn = document.getElementById("btn");
btn.addEventListener(
  "click",
  throttle(
    [1, 2, 3, 4, 5, 6, 7, 8, 9],
    2,
    (tasks) => {
      console.log(tasks);
    },
    2000
  )
);
