//Convert an object to a query string

const objData = { 
    name: "Nitish", 
    age: 25,
    address: {
        city: 'Delhi',
        pincode: '1234567'
    } 
};

// output: "name=Nitish&age=25&city=Delhi"

const queryString = (obj, output = '') => {
    for(const [key, value] of Object.entries(obj)) {
        output = output.concat(`${key}=${value}&`)
    }
    return output
}

console.log(queryString(objData), 'string')
