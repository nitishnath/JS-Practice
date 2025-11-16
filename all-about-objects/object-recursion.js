//Get nested property value part 1
const user = 
{
    info: {
        address: {
            home: {
                hobbies: ['cricket', 'watching movies']
            }
        }
    }
};

function nestedValue(user) {

    if (user === null || typeof user !== 'object' || Array.isArray(user)) return user

    for (let key in user) {
        return nestedValue(user[key])
    }
    return undefined
}

console.log(nestedValue(user), 'data')

//Print all leaves value collected
const data = {
  id: 42,
  name: 'Alice',
  active: true,
  info: {
    age: 30,
    contact: {
      email: 'a@b.com',
      phones: ['123', '456']
    },
    address: {
      city: 'Delhi',
      zip: 110001,
      coords: { lat: 28.6, lng: 77.2 }
    }
  },
  tags: ['dev', 'js'],
  preferences: {
    theme: 'dark',
    notifications: { email: false, sms: null, emsg : undefined }
  },
  misc: [
    { a: 1 },
    { b: [2, 3] },
    null
  ]
};

const nestedObjValePrint = (data) => {
  
  if(data === null || data === undefined){
    console.log(data)
    return
  }
  // console.log(data, 'data');
  for(const [key, value] of Object.entries(data)) {
    if(typeof value !== 'object' || typeof value === null) {
      console.log(value)
    } else if(Array.isArray(value)) {
      value.forEach(el => {
        if(el !== null && typeof el === 'object') nestedObjValePrint(el)
        else console.log(el)
      })
    } else {
      // return nestedObjValePrint(value) // this return statement stop at contact i.e that exits entire function on the first needed object I encounter, so the loop never proceeds to address, coords etc..
      nestedObjValePrint(value)
    }
  }
}

nestedObjValePrint(data)
