const createCachedApiCall = () => {
    let cache = new Map();
    let fetchedCounter = 0;

    function getFetchedCount() {
        return fetchedCounter;
    }

    function cachedApiCall(apiUrl) {
        if(cache.has(apiUrl)){
            console.log('Return from cache', apiUrl)
            return cache.get(apiUrl)
        }
        console.log('Fetching from API', apiUrl)
        fetchedCounter++;

        const cachedDataPromise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const isSuccess = Math.random() > 0.2
                if(isSuccess) {
                    resolve(`Data from ${apiUrl}`)
                } else {
                    reject(`Api failed for ${apiUrl}`)
                }
            },1000)
        })

        cache.set(apiUrl, cachedDataPromise)

        return cachedDataPromise
    }

    return {cachedApiCall, getFetchedCount }
}

const {cachedApiCall, getFetchedCount} = createCachedApiCall()

cachedApiCall("https://api.example.com/users")
  .then((data) => {
    console.log("First Call Result:", data);

    // Wait 2 seconds before second call
    setTimeout(() => {
      cachedApiCall("https://api.example.com/users")
        .then((data2) => {
          console.log("Second Call Result:", data2);
          console.log("Actual Fetch Count:", getFetchedCount());
        })
        .catch((err) => {
          console.log("Second Call Error:", err);
          console.log("Actual Fetch Count:", getFetchedCount());
        });
    }, 2000);
  })
  .catch((err) => {
    console.log("First Call Error:", err);
    console.log("Actual Fetch Count:", getFetchedCount());
  });