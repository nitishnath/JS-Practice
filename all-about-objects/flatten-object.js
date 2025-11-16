const obj = {
  name: "Nitish",
  address: {
    city: "Delhi",
    pin: 110001,
    coords: { lat: 12.3, long: 45.6, data: [2,4] }
  }
};

// obj['address.name'] = 'Nitish'


// output: 
// {
//   "name": "Nitish",
//   "address.city": "Delhi",
//   "address.pin": 110001,
//   "address.coords.lat": 12.3,
//   "address.coords.long": 45.6
// }

const flatterObj = (obj, parentKey = '', output = {}) => {
    if(obj === null || typeof obj !== 'object') {
        if(parentKey) output[parentKey] = obj
        return output
    }

    for(const [key, value] of Object.entries(obj)) {
        const nextKey = parentKey ? `${parentKey}.${key}` : key
        if(value !== null && typeof value === 'object') {
            flatterObj(value, nextKey, output)
        } else {
            output[nextKey] = value
        }
    }
    return output
}

console.log(flatterObj(obj), 'flatten')