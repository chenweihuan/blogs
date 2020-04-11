## 268 - 缺失数字
给定一个包含 0, 1, 2, ..., n 中 n 个数的序列，找出 0 .. n 中没有出现在序列中的那个数。
```
示例 1:

输入: [3,0,1]
输出: 2
```
```
示例 2:

输入: [9,6,4,2,3,5,7,0,1]
输出: 8
```
说明:
你的算法应具有线性时间复杂度。你能否仅使用额外常数空间来实现?

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/missing-number)

### 解
1. indexOf
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i=0;i<=nums.length;i++){
        if(nums.indexOf(i) === -1) return i
    }
};
```
```
执行结果：通过
执行用时 :420 ms, 在所有 JavaScript 提交中击败了8.61%的用户
内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了66.67%的用户
```

2. 数学法计算连续数字的总数  
思路：跟我一起回忆高斯求和公式：```连续数字之和=(首项+尾项)*项数/2```。知道应得的总和之后，for循环遍历一次，剩下的就是缺失那个数了。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let sum = nums.length * (nums.length+1) / 2 // 计算应得的总和
    for(let i=0;i<nums.length;i++){
        sum -= nums[i]
    }
    return sum
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了80.22%的用户
内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了96.97%的用户
```
