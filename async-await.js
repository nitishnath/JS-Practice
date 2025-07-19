// async function getData() {
//   return "Nitish Kumar Nath";
// }
// getData().then((res) => console.log(res));

//Example of async-await
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise1 Resolved");
  }, 5000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise2 Resolved");
  }, 10000);
});

// async function getData() {
//   const val1 = await p1;
//   console.log("Nitish1");
//   console.log(val1);

//   const val2 = await p2;
//   console.log("Nitish2");
//   console.log(val2);
// }
// getData();

async function getData() {
  const [val1, val2] = await Promise.all([p1, p2]);
  console.log(val1, "val1");
  console.log(val2, "val2");
}

getData();

// explanation of this above code is in my notebook

//fetching data
// const API_URL = "https://api.github.com/users";
// const INVALID_URL = "https://invalidUrl";
// async function getUserData() {
//   try {
//     const data = await fetch(INVALID_URL);
//     console.log(data, "data");
//     const jsonValue = await data.json();
//     console.log(jsonValue, "jsonValue");
//   } catch (err) {
//     console.log(err, "err");
//   }
// }

// getUserData();

//traditional way to handle errors
// getUserData().catch((err) => console.log(err, "err2"));
