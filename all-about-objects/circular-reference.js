// How to safely stringify a circular object?

const person = {
    name: "Nitish",
    details: {
      age: 26
    }
  };

person.details.self = person

function safeStringify(obj) {
    const map = new WeakSet()
    return JSON.stringify(obj, (key, value) => {
        if(typeof value === 'object' && value !== null) {
            if(map.has(value)) return '[circular]'
            map.add(value)
        }
        return value
    })
}

console.log(safeStringify(person), 'person')