// const URL = "";

// const getData = () => {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((res) => {
//       console.log(res, "res");
//     });
// };

//GET and POST request example

const URL = "https://jsonplaceholder.typicode.com/posts";

const myHeaders = new Headers();
myHeaders.append("content-type", "application/json");

const options = {
  method: "POST",
  body: JSON.stringify({
    userName: "Nitish Kumar Nath",
  }),
  headers: myHeaders,
};

const postData = async () => {
  const response = await fetch(URL, options);
  const data = await response.json();
  console.log(data, "data12");
};

const getData = async () => {
  const response = await fetch(URL + "/100");
  const data = await response.json();
  console.log(data, "data");
};

const processData = async () => {
  await postData();
  await getData();
};

processData();

//PUT --> update a resource
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "foo",
    body: "bar",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));

// PATCH -> Patching a resource

fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PATCH",
  body: JSON.stringify({
    title: "foo",
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
