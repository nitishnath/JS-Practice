//This problem has been recently asked in interviews at Goldman Sachs, Amazon, Facebook, Microsoft, and Google.


//121. Best Time to Buy and Sell Stock

//You are given an array prices where prices[i] is the price of a given stock on the ith day.

//You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

//Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

//Example 1:
//Input: prices = [7,1,5,3,6,4]
//Output: 5
//Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
//Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

//Time Complexity: O(n^2)
//Space Complexity: O(1)
var maxProfit = function(prices) {
    let max = 0;
    for(let i = 0; i < prices.length; i++) {
        for(let j = i+1; j < prices.length; j++) {
            if(prices[i] < prices[j]) {
                max = Math.max(max, prices[j] - prices[i])
            }
        }
    }
    return max;
};

//Time Complexity: O(n)
//Space Complexity: O(1)
const maxProfitOptimize = (prices) => {
    // let min = Infinity;
    let min = prices[0];
    let max = 0;

    if(prices.length < 2) return 0;

    for(let i = 1; i < prices.length; i++) {
        // min = Math.min(min, prices[i])
        // max = Math.max(max, prices[i]-min)

        if(prices[i] - min > max) {
            max = prices[i] - min
        }

        if(min > prices[i]) {
            min = prices[i]
        }
    }
    return max;
}

let prices = [7,1,5,3,6,4]
let prices1 = [7,6,4,3,1]
let prices2 = [1,3,5,7,2,8,10]
let prices3 = [2]

console.log(maxProfit(prices), 'maxProfit');
console.log(maxProfitOptimize(prices), 'maxProfitOptimize');
console.log(maxProfitOptimize(prices1), 'maxProfitOptimize1');
console.log(maxProfitOptimize(prices2), 'maxProfitOptimize2');
console.log(maxProfitOptimize(prices3), 'maxProfitOptimize3');

