function slowFunction(num) {
    console.log("Calculating...");
    // Simulate heavy work
    for (let i = 0; i < 1e8; i++) {}  
    return num * 2;
  }
  
  function memoize(fn) {
    const cache = {};
    return function (num) {
      if (cache[num] !== undefined) {
        console.log("Fetching from cache...");
        return cache[num];
      }
      const result = fn(num);
      cache[num] = result;
      return result;
    };
  }
  
  const fastFunction = memoize(slowFunction);
  
  // First call (calculation)
  console.time("First Call");
  console.log(fastFunction(5));
  console.timeEnd("First Call");
  
  // Second call (cache fetch)
  console.time("Second Call");
  console.log(fastFunction(5));
  console.timeEnd("Second Call");
  