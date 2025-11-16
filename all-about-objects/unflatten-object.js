const objData = {
    "name": "Nitish",
    "address.city": "Delhi",
    "address.pin": 110001,
    "address.coords.lat": 12.3,
    "address.coords.long": 45.6,
    "address.coords.data.0": 2,
    "address.coords.data.1": 4
}
// output: {
//   user: {
//     name: "Nitish",
//     details: {
//       age: 25,
//       city: "Delhi"
//     }
//   }
// }

// const unflettenObj = (objData) => {
//     let output = {}
//     for(const key in objData) {

//         //Skip keys inherited from prototype (safety check)
//         // Ensures only actual properties of obj are used.
//         if (!Object.prototype.hasOwnProperty.call(objData, key)) continue;
//         const parts = key.split('.');

//         // Start from the root of the result object
//         // We move deeper into it as we build nested paths.
//         let cur = output;

//         for(let i = 0; i < parts.length; i++) {
//             const p = parts[i];

//             //For "user.details.age" the last part is "age",
//             if(i === parts.length - 1) {
//                 let num = Number(p);
//                 if(isNaN(num)) {
//                 cur[p] = objData[key]
//                 }                
//             } else {
//                 //If it's not the last part, ensure that key exists, 
//                 //If "user" doesn't exist, create {} under outout.
//                 //If "details" doesn't exist inside 'user' create {}.
//                 if(!cur[p] || typeof cur[p] !== 'object') {
//                     cur[p] = {}
//                 }
//                 //Move deeper inside the object
//                 //Makes us ready to process the next nested level.
//                 //output → output.user → output.user.details
//                 cur = cur[p]
//             }
//         }
//     }
//     return output
// }

function unflatten(obj) {
  const res = {};

  for (const key in obj) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) continue;

    const parts = key.split('.');
    let cur = res;

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i];
      const isLast = i === parts.length - 1;
      const isArrayIndex = !isNaN(part); // "0", "1", "2" → true

      if (isLast) {
        // If last part → assign the final value
        if (isArrayIndex) {
          if (!Array.isArray(cur)) cur = [];
          cur[part] = obj[key];
        } else {
          cur[part] = obj[key];
        }
      } else {
        // Not last → create object/array structure
        const nextPart = parts[i + 1];
        const nextIsArrayIndex = !isNaN(nextPart);

        if (isArrayIndex) {
          if (!Array.isArray(cur)) {
            // Replace current object with array
            cur = [];
          }
          if (!cur[part]) {
            cur[part] = nextIsArrayIndex ? [] : {};
          }
          cur = cur[part];
        } else {
          if (!cur[part] || typeof cur[part] !== "object") {
            cur[part] = nextIsArrayIndex ? [] : {};
          }
          cur = cur[part];
        }
      }
    }
  }

  return res;
}


console.log(unflatten(objData), 'unflatten')