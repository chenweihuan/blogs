## 414 - 第三大的数
给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
```
示例 1:

输入: [3, 2, 1]

输出: 1

解释: 第三大的数是 1.
```
```
示例 2:

输入: [1, 2]

输出: 2

解释: 第三大的数不存在, 所以返回最大的数 2 .
```
```
示例 3:

输入: [2, 2, 3, 1]

输出: 1

解释: 注意，要求返回第三大的数，是指第三大且唯一出现的数。
存在两个值为2的数，它们都排第二。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/third-maximum-number)


### 解
1. 暴力排序 + 去重（ps：按道理sort的时间复杂度应该超On了吧，居然能通过了）
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums.sort((a,b)=>a-b)
    nums = [...new Set(nums)]
    return nums.length >= 3 ? nums[nums.length-3] : nums[nums.length-1]
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了44.95%的用户
内存消耗 :38.6 MB, 在所有 JavaScript 提交中击败了10.00%的用户
```

2. 也是暴力解法，存储第一大，第二大和第三大的数值
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let num1 = -Infinity
    let num2 = -Infinity
    let num3 = -Infinity
    for(let i=0;i<nums.length;i++){
        if(nums[i] >= num1){
            if(nums[i] === num1) continue
            num3 = num2
            num2 = num1
            num1 = nums[i]
        }else if(nums[i] >= num2){
            if(nums[i] === num2) continue
            num3 = num2
            num2 = nums[i]
        }else if(nums[i] >= num3){
            if(nums[i] === num3) continue
            num3 = nums[i]
        }
    }
    return num3 === -Infinity ? num1 : num3
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了82.98%的用户
内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
