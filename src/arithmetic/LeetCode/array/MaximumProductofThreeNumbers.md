## 628 - 三个数的最大乘积
给定一个整型数组，在数组中找出由三个数组成的最大乘积，并输出这个乘积。
```
示例 1:

输入: [1,2,3]
输出: 6
```
```
示例 2:

输入: [1,2,3,4]
输出: 24
```
注意:

给定的整型数组长度范围是[3,104]，数组中所有的元素范围是[-1000, 1000]。  
输入的数组中任意三个数的乘积不会超出32位有符号整数的范围。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/maximum-product-of-three-numbers)

### 解
1. 排序
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if(nums.length < 3) return 0
    nums.sort((a,b)=>a-b)
    let num1 = nums[0] * nums[1] * nums[nums.length-1] // 两个负数，一个正数
    let num2 = nums[nums.length-3] * nums[nums.length-2] * nums[nums.length-1] // 全正数，全负数
    return Math.max(num1, num2)
};
```
```
执行结果：通过
执行用时 :112 ms, 在所有 JavaScript 提交中击败了85.28%的用户
内存消耗 :38.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
