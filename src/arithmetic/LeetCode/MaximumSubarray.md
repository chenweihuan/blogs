## 053 - 最大子序和
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
```
示例:

输入: [-2,1,-3,4,-1,2,1,-5,4],
输出: 6
解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。
```
进阶:

如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/maximum-subarray)

### 解
1. reduce  
思路：对于每一位数，先取出前一位的信息进行判断前面连续子串的总和，如果总和大于等于0，则将自己与前面进行拼接，否则就不值得和前面的数相加，只保留自身，以此生成处理信息传递给下一位处理。
```js
/**
* @param {number[]} nums
* @return {number}
*/
var maxSubArray = function (nums) {
  let temp = 0
  return nums.reduce((sum, val) => {
    temp = temp < 0 ? val : val + temp
    return Math.max(sum, temp)
  }, -Number.MAX_VALUE) // //必须要将初始值设为负无穷大，否则的话 默认为数组的第一个值；例如[1,0,5]，默认值为1，那么reduce将会从0开始计算，后面都不带上1了，所以算到最终的结果就是5（错误的，正确应该是6）。
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了99.05%
内存消耗 :34.9MB, 在所有 JavaScript 提交中击败了90.08%的用户
```