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
const promise1 = Promise.reject(new Error("error"));
const promise2 = new Promise((reslove, reject) => {
  setTimeout(reject, 100, "two");
});
const promise3 = new Promise((reslove, reject) => {
  setTimeout(reject, 200, "three");
});

const promises = [promise1, promise2, promise3];
Promise.any(promises)
  .then((msg) => {
    console.log(msg);
  })
  .catch((err) => {
    console.log(err, "err");
  });

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

//Promise.reject()
//Example:1
// const resolved = (result) => {
//   console.log(result, 'res1')
// }

// const rejected = (res) => {
//   console.log(res, 'res2')
// }

// Promise.reject(new Error('failed')).then(resolved, rejected)

//Example:2
// const resolve = Promise.resolve(1);
// const reject = Promise.reject(resolve);

// console.log(resolve, 'resolve') // return Promise Object with PromiseState 'fulfilled'
// console.log(reject, 'reject') // return Promise Object with PromiseState 'rejected'
// console.log(resolve === reject, 'resolve === reject') // false

// reject.catch((v) => {
//   console.log(v, 'v');
//   console.log(v === resolve, 'v === resolve') // true
// })

//Promise.resolve()
Promise.resolve('success').then((fulfilled, rejected) => console.log(fulfilled, rejected, 'Promise.resolve()')) // success, undefined

const p1 = Promise.resolve([1,2,4]);
p1.then((onFullfilled, onRejected) => {
  console.log(onFullfilled[1], 'onFullfilled[1]') // 2
})

const p2 = Promise.resolve(p1);
console.log(p2, 'p2') // return Promise object with --> promiseState: fulfilled and promiseResult: [1,2,4], and it will execute before p1 resolve



// Promise.resolve(32).then((value) => console.log(value));

// const promise = Promise.resolve("already resolve");
// Promise.resolve(promise).then((val) => console.log(val));

//an object with a then method
const thenable = {
  then(resolve1) {
    resolve1("Resolved from thenable");
  },
};
console.log(Promise.resolve(thenable), "Promise.resolve(thenable)"); //output: return a Promise object with --> promiseState: fulfilled and promiseResult: 'Resolved from thenable'

// Promise.resolve(thenable).then((val) => console.log(val)); //output: 'Resolved from thenable'

//infinite recusrion
// const thenable1 = {
//   then(onFullfilled, onRejected) {
//     console.log('called from infinite recursive func')
//     onFullfilled(thenable1)
//   }
// }

// Promise.resolve(thenable1)

//Promise.withResolvers()
// function createEventAggregator(eventCount) {
//   const events = [];
//   const { promise, resolve, reject } = Promise.withResolvers();

//   return {
//     add: (event) => {
//       if (events.length < eventCount) {
//         events.push(event);
//       }
//       if (events.length === eventCount) {
//         resolve(event);
//       }
//     },
//     abort: () => reject("Events aggregation aborted"),
//     events: promise,
//   };
// }

// const eventAggregator = createEventAggregator(3);

// eventAggregator.events
//   .then((events) => console.log("Resolved", events))
//   .catch((reason) => console.log("Rejected", reason));

// // eventAggregator.abort();

// eventAggregator.add("event-one");
// eventAggregator.add("event-two");
// eventAggregator.add("event-three");

//Example2: Promise.withResolvers()
function fetchWithRetry(url) {
  const {promise, resolve, reject} = Promise.withResolvers()

  function attempt() {
    fetch(url)
    .then(resolve)
    .catch(() => {
      console.log('...Retrying');
      setTimeout(attempt, 1000)
    })
  }

  attempt()
  return promise;
}

fetchWithRetry("/api/data").then(data => console.log('Got: ', data))


// const getData = (id, getNextData) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log('id is: ', id)
//       if(getNextData) {
//         getNextData();
//         resolve('success')
//       } else {
//         reject('error')
//       }
//     }, 2000)
//   })
// }

// Here we are using callback to handle the async operation and in getData(3), if we dont write .catch() it will throw an uncought error
// getData(1,() => {
//   getData(2, () => {
//     getData(3).then((value) => console.log(value, 'value')).catch((err) => console.log(err, 'err'))
//   }).then((value) => console.log(value, 'value')).catch((err) => console.log(err, 'err'))
// }).then((value) => console.log(value, 'value')).catch((err) => console.log(err, 'err'))
