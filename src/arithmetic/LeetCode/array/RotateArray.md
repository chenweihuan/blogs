## 189 - 旋转数组
给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
```
示例 1:

输入: [1,2,3,4,5,6,7] 和 k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右旋转 1 步: [7,1,2,3,4,5,6]
向右旋转 2 步: [6,7,1,2,3,4,5]
向右旋转 3 步: [5,6,7,1,2,3,4]
```
```
示例 2:

输入: [-1,-100,3,99] 和 k = 2
输出: [3,99,-1,-100]
解释: 
向右旋转 1 步: [99,-1,-100,3]
向右旋转 2 步: [3,99,-1,-100]
```
说明:

尽可能想出更多的解决方案，至少有三种不同的方法可以解决这个问题。  
要求使用空间复杂度为 O(1) 的 原地 算法。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/rotate-array)

### 解
1. while + unshift + pop
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    while(k > 0){
        nums.unshift(nums.pop())
        k--
    }
};
```
```
执行结果：通过
执行用时 :140 ms, 在所有 JavaScript 提交中击败了18.72%的用户
内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了78.22%的用户
```

2. splice
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    nums.splice(0, 0, ...nums.splice(nums.length - k))
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了68.67%的用户
内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了94.35%的用户
```

3. 使用额外的数组
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    let res = []
    for(let i=0;i<nums.length;i++){
        res[(i+k)%nums.length] = nums[i]
    }
    for(let j=0;j<res.length;j++){
        nums[j] = res[j]
    }
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了64.51%的用户
内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了14.51%的用户
```

4. 使用三次反转  
思路：假设 n=7 且 k=3 :
```
原始数组                   : 1 2 3 4 5 6 7
反转所有数字后             : 7 6 5 4 3 2 1
反转前 k 个数字后          : 5 6 7 4 3 2 1
反转后 n-k 个数字后        : 5 6 7 1 2 3 4 --> 结果
```
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length
    function reverse(nums, start=0, end=nums.length-1){
        while (start < end) {
            let temp = nums[start]
            nums[start] = nums[end]
            nums[end] = temp
            start++
            end--
        }
    }
    reverse(nums)
    reverse(nums,0, k-1)
    reverse(nums,k, nums.length-1)
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了62.97%的用户
内存消耗 :35.4 MB, 在所有 JavaScript 提交中击败了77.42%的用户
```
