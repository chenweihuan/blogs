## 121 - 买卖股票的最佳时机

给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。

如果你最多只允许完成一笔交易（即买入和卖出一支股票一次），设计一个算法来计算你所能获取的最大利润。

注意：你不能在买入股票前卖出股票。
```
示例 1:

输入: [7,1,5,3,6,4]
输出: 5
解释: 在第 2 天（股票价格 = 1）的时候买入，在第 5 天（股票价格 = 6）的时候卖出，最大利润 = 6-1 = 5 。
     注意利润不能是 7-1 = 6, 因为卖出价格需要大于买入价格。
```
```
示例 2:

输入: [7,6,4,3,1]
输出: 0
解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
```

### 解
1. 暴力解法（一次for循环 + 求最大值）  
思路：一次for循环，遍历到i的时候，那么最赚钱的时候就是在后续几天的最高价卖出，也就是```Math.max(...prices.slice(i))```，每个for循环统计最大值即可。
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0
    for(let i = 0;i<prices.length;i++)
        res = Math.max(res, Math.max(...prices.slice(i)) - prices[i])
    return res
};
```
```
执行结果：通过
执行用时 :944 ms, 在所有 JavaScript 提交中击败了5.06%的用户
内存消耗 :41.9 MB, 在所有 JavaScript 提交中击败了10.14%的用户
```

2. 一次for循环  
思路：在最低点买入，在最高点卖出是最理想的。但考虑[2,5,1,3,2]这种情况，所以只需要把最大值存在一个变量即可。
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE
    let max = 0
    for(let i=0;i<prices.length;i++){
        if(prices[i] < min){
            min = prices[i]
        }else{
            max = Math.max(max, prices[i] - min)
        }
    }
    return max
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了49.97%的用户
内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了84.54%的用户
```

3. 转化 + 求最大子序列和  
思路：把原数组转为相邻两数之差的数组，例如[7,1,3,4,2] => [-6,2,1,-1]，那么解就是这个数组的最大子序列之和了。
```js
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let last = 0
    let max = 0
    for(let i=0;i<prices.length-1;i++){
        last = Math.max(prices[i+1] - prices[i] + last, 0) // 只有大于0，才值得继续往后面走
        max = Math.max(max, last)
    }
    return max
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了84.22%的用户
内存消耗 :35.4 MB, 在所有 JavaScript 提交中击败了90.82%的用户
```
