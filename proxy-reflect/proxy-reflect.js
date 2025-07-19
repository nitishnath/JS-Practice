const obj1 = {
    fname: 'Nitish',
    lname: 'Nath',
    age: 27
}

const handlerObj = {

    has(target, prop){
        if(prop[0] === 'l') return false

        return prop in target
    },

    get(target, prop, reciever){
        // console.log(target, 'target');
        // console.log(prop, 'prop');
        // console.log(reciever, 'reciever');
        // return 'Hello World'
        if(prop in target) {
            // default behaviour
            // return target[prop]
            return Reflect.get(target, prop)
        } else {
            return false;
        }
    },
    
    set(target, prop, value) {
        console.log(prop, 'props');
        console.log(value, 'value')
        
        if(!(prop in target)) throw new Error(`${prop} does not exist!!`)
        
        switch(prop){
            case 'fname':
            case 'lname':
                if(typeof value !== 'string') {
                    throw new Error('Fname and Lname should be string')
                };
                break
            case 'age':
                if(typeof value !== 'number' || value <=0) {
                    throw new Error('Age should be a number and not less than or equal to 0')
                }
        }
        //this is a buggy code and we need to handle this default behaviour of js code using Reflect to provide more security on set data to this obj property
        // target[prop] = value
        Reflect.set(target, prop, value)
    }
}

const proxyObj = new Proxy(obj1, handlerObj)
console.log(proxyObj.fname, 'fname')
proxyObj.fname = 'hack'
proxyObj.lname = 'jakson'
proxyObj.age = 28
console.log(proxyObj, 'proxyObj');
console.log('fname' in proxyObj)

// console.log(proxyObj.lname, 'lname')
// console.log(proxyObj.age, 'age')