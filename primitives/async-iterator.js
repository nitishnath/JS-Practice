// const delayedResponse = {
//     //delays: [500, 1500, 4000],
//     // wait(delay) {
//     //     return new Promise((resolve) => {
//     //         setTimeout(resolve, delay)
//     //     })
//     // },
//     iterationLimit: 3,
//     async next(delay) {
//         return new Promise((resolve, reject) => {
//             setTimeout(reject, delay)
//         }).catch(() => {
//             return {
//                 done: false,
//                 value: 'Rejected'
//             }
//         })
//     },
//     // async *[Symbol.asyncIterator]() {
//     //     for(let i = 0; i < this.delays.length; i++) {
//     //         const delay = this.delays[i];
//     //         await this.wait(delay);
//     //         yield {
//     //             done: i === this.delays.length - 1,
//     //             value: `Delayed response for ${delay} milliseconds`
//     //         };
//     //     }
//     // },

//     async *[Symbol.asyncIterator]() {
//         const responseData = await this.next(1000)
//         console.log(responseData, 'data');
//         if(responseData.value === 'Rejected') {
//             for(let i = 0; i < this.iterationLimit; i++) {
//                 await this.next(i*1000 + 1000)
//                 yield {
//                     done: i === this.iterationLimit - 1,
//                     value: `Delayed response for ${i*1000 + 1000} milliseconds`
//                 }
//             }
//         }
//        // yield responseData
//     }
// };

// // (async () => {
// //     for await(const response of delayedResponse) {
// //         console.log(response.value);
// //         if (response.done) {
// //             console.log('All responses completed!');
// //         }
// //     }
// // })();

// (async () => {
//     for await(const response of delayedResponse) {
//         console.log(response)
//         if(response.done) {
//             console.log('Still got rejected response');
//         }
//     }
// })();


const delayedResponse = {
    delays: [500, 1500, 3000],
    next(delay) {
        return new Promise((resolve) => {
            setTimeout(resolve, delay)
        })
    },

    async *[Symbol.asyncIterator]() {
        for(let i = 0; i < this.delays.length; i++) {
            const delay = this.delays[i]
            await this.next(delay)
            yield{
                done: i === this.delays.length - 1,
                value: `Delayed response for ${delay} milliseconds`
            }
        }
    },
};

// (async () => {
//     for await (const response of delayedResponse) {
//         console.log(response.value)
//         if(response.done) {
//             console.log('All responses completed')
//         }
//     }
// })()


const consecutiveRequestObj = {
    requestLimit: 3,
    data: 'nitish',
    async next(delay) {
        return new Promise((resolve, reject) => {
            if(this.data === 'nitish') {
                setTimeout(reject, delay)
            } else {
                setTimeout(resolve, delay)
            }
        }).then(() => {
            return {
                done: true,
                value: 'Resolved!'
            }
        }).catch(()=> {
            return{
                done: false,
                value: 'Rejected!'
            }
        })
    },

    async *[Symbol.asyncIterator]() {
        const responseData = await this.next(1000)
        if(responseData.value === 'Rejected!') {
            console.log(responseData.value + 'calling API again');
            for(i = 0; i < this.requestLimit; i++) {
                await this.next(i*1000 + 1000)
                yield{
                    done: i === this.requestLimit - 1,
                    value: `Delayed response for ${i*1000 + 1000} milliseconds`
                }
            }
        } else {
            await this.next(1000);
            yield{
                done: true,
                value: `Congrats!! you got the response`
            }
        }
        // yield{
        //     value: responseData
        // }
    }
};

(async () => {
    for await (const response of consecutiveRequestObj) {
        console.log(response.value)
        if(response.done) {
            console.log(`All response completed`)
        }
    }
})()
