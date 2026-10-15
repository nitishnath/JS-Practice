//1, How would you implement memoization for an async function that return a promise?

//This technique is known as in-flight request deduplication.

const asyncMemoization = (fn) => {
    const cache = new Map();
    return function(...args) {

        //key is used to uniquely identify a function call so that we can store and retrieve its result from cache..
        //For example:
        //cache.set("10,20", 30);
        //cache.set("10,30", 40);
        const key = JSON.stringify(args); 
        if(cache.has(key)) {
            return cache.get(key);
        }

        const promise = Promise.resolve().then(() => 
            fn.apply(this, args)
        )
        //const promise =  fn.apply(this, args)

        cache.set(key, promise);

        promise.catch(() => {
            //Remove failed requests from the cache
            //Is the Promise currently stored in the cache still the same Promise that just failed?
            if(cache.get(key) === promise) {
                cache.delete(key)
            }
        })
        return promise;
    }
}

let apiCallCount = 0;

async function fetchUser(id) {
    apiCallCount++;
    
    const response = await fetch(`https://dummyjson.com/users/${id}`)

    if(!response.ok) {
        throw new Error("API request failed");
    }
    const data = await response.json();
    return data;
}

function normalFunc(id) {
    if(!id) {
        return 'no id'
    } else {
        return id;
    }
}

const memoizedFetchUser = asyncMemoization(fetchUser);
const memoizedFetchUser1 = asyncMemoization(normalFunc)

async function test() {
    try {
    const [user1, user2, user3, user4] = await Promise.all([
      memoizedFetchUser(101),
      memoizedFetchUser(101),
      memoizedFetchUser(102),
      memoizedFetchUser1(104)
    ]);

    console.log(user1, user2, user3, user4);
    console.log("API calls:", apiCallCount);
  } catch (error) {
    console.error(error);
  }
}

test()