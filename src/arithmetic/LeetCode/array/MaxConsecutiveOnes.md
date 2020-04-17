## 485 - 最大连续1的个数
给定一个二进制数组， 计算其中最大连续1的个数。
```
示例 1:

输入: [1,1,0,1,1,1]
输出: 3
```
解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.  

注意：

输入的数组只包含 0 和1。   
输入数组的长度是正整数，且不超过 10,000。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/max-consecutive-ones)

### 解
1. reduce记录连续个数
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let num = 0
    return nums.reduce((max, val)=>{
        val == 1 ? num++:num = 0
        max = Math.max(num, max)
        return max
    }, 0)
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了34.63%的用户
内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```

