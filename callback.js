// const greeting = (name) => {
//   const currentHour = new Date().getHours();
//   console.log(currentHour);
//   if (currentHour >= 0 && currentHour < 12) {
//     alert("Good Morning " + name);
//   } else if (currentHour >= 12 && currentHour < 18) {
//     alert("Good Afternoon " + name);
//   } else {
//     alert("Good Evening " + name);
//   }
// };

// const processUserInput = (greeting) => {
//   let name = prompt("Please Enter your name");
//   if (name) {
//     greeting(name);
//   }
// };

// processUserInput(greeting);

// WAP to print 1,2,3 after each 2s of interval
// const getData = (dataId, getNextData) => {
//   setTimeout(() => {
//     console.log("dataId", dataId);
//     if (getNextData) {
//       getNextData();
//     }
//   }, 2000);
// };

// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

//Using Promise
// const getData = (dataId, getNextData) => {
//   return new Promise((reject, reject) => {
//     setTimeout(() => {
//       if (dataId) {
//         console.log("dataId is", dataId);
//         if (getNextData) {
//           getNextData();
//         }
//         resolve("Success");
//       } else {
//         reject("error");
//       }
//     }, 3000);
//   });
// };

// getData(1, () => {
//   getData(2).then((msg) => {
//     console.log(msg);
//   });
// })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise.all()
// const promise1 = Promise.resolve(3);
// const promise2 = 42;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(reject, 1000, "foo");
// });

// Promise.all([promise1, promise2, promise3])
//   .then((msg) => {
//     console.log(msg, "msg");
//   })
//   .catch((err) => {
//     console.log(err, "err");
//   });

// Promise.race()
// function promiseState(promise) {
//   const pendingState = {
//     status: "pending",
//   };
//   return (
//     Promise.race([promise, pendingState]).then((value) =>
//       value === pendingState
//         ? value
//         : {
//             status: "fulfilled",
//             value,
//           }
//     ),
//     (reasen) => ({
//       status: "rejected",
//       reasen,
//     })
//   );
// }

// const p1 = new Promise((res) => {
//   setTimeout(() => {
//     res(100), 100;
//   });
// });

// const p2 = new Promise((res) => {
//   setTimeout(() => {
//     res(200), 200;
//   });
// });

// async function getStates() {
//   console.log(await promiseState(p1));
//   console.log(await promiseState(p2));
// }

// getStates();

// setTimeout(() => {
//   console.log("After waiting for 100ms");
//   getStates();
// }, 100);

//Promise.any()
// const promise1 = Promise.reject(new Error("error"));
// const promise2 = new Promise((reslove) => {
//   setTimeout(reslove, 100, "two");
// });
// const promise3 = new Promise((reslove) => {
//   setTimeout(reslove, 200, "three");
// });

// const promises = [promise1, promise2, promise3];
// Promise.any(promises)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err, "err");
//   });

//Promise.allSettled()
// const promise1 = Promise.reject(new Error("error"));
// const promise2 = new Promise((reslove) => {
//   setTimeout(reslove, 100, "two");
// });
// const promise3 = new Promise((reslove) => {
//   setTimeout(reslove, 200, "three");
// });

// const promises = [promise1, promise2, promise3];

// Promise.allSettled(promises)
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

//Promise.resolve()
// Promise.resolve(32).then((value) => console.log(value));

// const promise = Promise.resolve("already resolve");
// Promise.resolve(promise).then((val) => console.log(val));

// //an object with a then method
// const thenable = {
//   then(resolve1) {
//     resolve1("Resolved from thenable");
//   },
// };

// console.log(Promise.resolve(thenable), "Promise.resolve(thenable)");

// Promise.resolve(thenable).then((val) => console.log(val));

//Promise.withResolvers()

function createEventAggregator(eventCount) {
  const events = [];
  const { promise, resolve, reject } = Promise.withResolvers();

  return {
    add: (event) => {
      if (events.length < eventCount) {
        events.push(event);
      }
      if (events.length === eventCount) {
        resolve(event);
      }
    },
    abort: () => reject("Events aggregation aborted"),
    events: promise,
  };
}

const eventAggregator = createEventAggregator(3);

eventAggregator.events
  .then((events) => console.log("Resolved", events))
  .catch((reason) => console.log("Rejected", reason));

// eventAggregator.abort();

eventAggregator.add("event-one");
eventAggregator.add("event-two");
eventAggregator.add("event-three");
