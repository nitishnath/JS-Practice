function recursiveDeepCopy(obj, map = new WeakMap()) {
    // Handle primitives and null/undefined
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // Handle circular references
    if (map.has(obj)) {
        return map.get(obj);
    }

    // Handle Date
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // Handle RegExp
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }

    // Handle Map
    if (obj instanceof Map) {
        const copy = new Map();
        map.set(obj, copy);
        obj.forEach((value, key) => {
            copy.set(recursiveDeepCopy(key, map), recursiveDeepCopy(value, map));
        });
        return copy;
    }

    // Handle Set
    if (obj instanceof Set) {
        const copy = new Set();
        map.set(obj, copy);
        obj.forEach(value => {
            copy.add(recursiveDeepCopy(value, map));
        });
        return copy;
    }

    // Handle Array
    if (Array.isArray(obj)) {
        const copy = [];
        map.set(obj, copy);
        for (let i = 0; i < obj.length; i++) {
            copy[i] = recursiveDeepCopy(obj[i], map);
        }
        return copy;
    }

    // Handle plain objects
    const copy = Object.create(Object.getPrototypeOf(obj));
    map.set(obj, copy);

    // Copy all properties including symbols and non-enumerable ones
    const allKeys = [
        ...Object.getOwnPropertyNames(obj),
        ...Object.getOwnPropertySymbols(obj)
    ];

    for (const key of allKeys) {
        const descriptor = Object.getOwnPropertyDescriptor(obj, key);
        if (descriptor) {
            Object.defineProperty(copy, key, {
                ...descriptor,
                value: recursiveDeepCopy(descriptor.value, map)
            });
        }
    }

    return copy;
}

// Test cases
const testObj = {
    num: 42,
    str: 'hello',
    bool: true,
    nullValue: null,
    undefinedValue: undefined,
    date: new Date(),
    regex: /abc/gi,
    arr: [1, 2, { a: 1 }],
    map: new Map([['key1', 'value1'], ['key2', { b: 2 }]]),
    set: new Set([1, 2, 3, { c: 3 }]),
    [Symbol('symbolKey')]: 'symbolValue',
    func: function() { return this.num; }
};

// Add circular reference
testObj.self = testObj;

// Add non-enumerable property
Object.defineProperty(testObj, 'hidden', {
    value: 'hiddenValue',
    enumerable: false
});

const deepCopy = recursiveDeepCopy(testObj);

// Verify the copy
console.log('Original:', testObj);
console.log('Deep Copy:', deepCopy);
console.log('Circular reference check:', deepCopy.self === deepCopy); // Should be true
console.log('Function check:', deepCopy.func() === 42); // Should be true
console.log('Non-enumerable check:', Object.getOwnPropertyDescriptor(deepCopy, 'hidden')?.value === 'hiddenValue'); // Should be true