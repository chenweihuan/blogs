## 746 - 使用最小花费爬楼梯
数组的每个索引做为一个阶梯，第 i个阶梯对应着一个非负数的体力花费值 cost[i](索引从0开始)。

每当你爬上一个阶梯你都要花费对应的体力花费值，然后你可以选择继续爬一个阶梯或者爬两个阶梯。

您需要找到达到楼层顶部的最低花费。在开始时，你可以选择从索引为 0 或 1 的元素作为初始阶梯。
```
示例 1:

输入: cost = [10, 15, 20]
输出: 15
解释: 最低花费是从cost[1]开始，然后走两步即可到阶梯顶，一共花费15。
```
```
示例 2:

输入: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
输出: 6
解释: 最低花费方式是从cost[0]开始，逐个经过那些1，跳过cost[3]，一共花费6。
```
注意：

cost 的长度将会在 [2, 1000]。  
每一个 cost[i] 将会是一个Integer类型，范围为 [0, 999]。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/min-cost-climbing-stairs)

### 解
1. 动态规划1  
具体思路还得看[题解](https://leetcode-cn.com/problems/min-cost-climbing-stairs/solution/yi-bu-yi-bu-tui-dao-dong-tai-gui-hua-de-duo-chong-/)，第一次认真看dp的题。
```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCost = [0, Math.min(cost[0], cost[1])]
    for(let i=2;i<cost.length;i++){
        minCost[i] = Math.min(minCost[i-1] + cost[i], minCost[i-2] + cost[i-1])
    }
    return minCost[cost.length-1]
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了23.83%的用户
内存消耗 :35.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
优化空间复杂度：
```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let minCost0 = 0
    let minCost1 = Math.min(cost[0], cost[1])
    for(let i=2;i<cost.length;i++){
        minCost = Math.min(minCost1 + cost[i], minCost0 + cost[i-1])
        minCost0 = minCost1
        minCost1 = minCost
    }
    return minCost
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了34.52%的用户
内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```

2. 动态规划2
```js
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    let dp = [cost[0], cost[1]]
    for(let i=2;i<cost.length;i++){
        dp[i] = Math.min(dp[i-1], dp[i-2]) + cost[i]
    }
    return Math.min(dp[cost.length-1], dp[cost.length-2])
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了99.55%的用户
内存消耗 :35.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```