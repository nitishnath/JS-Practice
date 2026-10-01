// Memoization is an optimized technique that stores the result of expensive function calls.
// When the same input is passed again, it returns the cache result instead of recalculating it..

function slowFunction(num) {
    console.log("Calculating...");
    // Simulate heavy work
    for (let i = 0; i < 1e8; i++) {}  
    return num * 2;
  }

  function multiply(num1, num2) {
    return num1*num2
  }
  
  // function memoize(fn) {
  //   const cache = {};
  //   return function (num) {
  //     if (cache[num] !== undefined) {
  //       console.log("Fetching from cache...");
  //       return cache[num];
  //     }
  //     const result = fn(num);
  //     cache[num] = result;
  //     return result;
  //   };
  // }

  //Memoization for single argument
  function memoize(fn) {
    const cache = new Map(); // use map to store previously calculated result.
    return function(arg) {
      if(cache.has(arg)) {
        console.log('Fetching from cache');
        return cache.get(arg)
      }
      console.log('Calculating...')
      const result = fn.call(this, arg)
      cache.set(arg, result);

      return result; 
    }
  }

  //Memoization for multiple arguments
  function memoizeMultiFunc(fn) {
    const cache = new Map();
    return function(...args) {
      const key = JSON.stringify(args);

      if(cache.has(key)) {
        console.log('fetching from cache')
        return cache.get(key);
      }

      console.log('Calculating...')
      const result = fn.apply(this, args); //fn.call(this, ...args)
      cache.set(key, result);
      return result;
    }
  }
  
  const fastFunction = memoize(slowFunction);

  const getResMultiFunc = memoizeMultiFunc(multiply);
  
  // First call (calculation)
  console.time("First Call");
  console.log(fastFunction(5));
  console.timeEnd("First Call");
  
  // Second call (cache fetch)
  console.time("Second Call");
  console.log(fastFunction(5));
  console.timeEnd("Second Call");

  console.log(getResMultiFunc(10, 20))
  console.log(getResMultiFunc(20, 30))
  console.log(getResMultiFunc(10, 20))
  