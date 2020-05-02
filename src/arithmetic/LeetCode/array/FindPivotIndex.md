## 724 - 寻找数组的中心索引
给定一个整数类型的数组 nums，请编写一个能够返回数组“中心索引”的方法。

我们是这样定义数组中心索引的：数组中心索引的左侧所有元素相加的和等于右侧所有元素相加的和。

如果数组不存在中心索引，那么我们应该返回 -1。如果数组有多个中心索引，那么我们应该返回最靠近左边的那一个。
```
示例 1:

输入: 
nums = [1, 7, 3, 6, 5, 6]
输出: 3
解释: 
索引3 (nums[3] = 6) 的左侧数之和(1 + 7 + 3 = 11)，与右侧数之和(5 + 6 = 11)相等。
同时, 3 也是第一个符合要求的中心索引。
```
```
示例 2:

输入: 
nums = [1, 2, 3]
输出: -1
解释: 
数组中不存在满足此条件的中心索引。
```
说明:

nums 的长度范围为 [0, 10000]。  
任何一个 nums[i] 将会是一个范围在 [-1000, 1000]的整数。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/find-pivot-index)

### 解
1. 求和  
思路：先把nums转化为左侧元素之和的数组，接下来遍历新数组，当```nums[len-1] -nums[j] === nums[j-1]```时，j就是解了。
```
[1, 7, 3, 6, 5, 6]
=>
[1, 8, 11, 17, 22, 28]
28-17 === 11，所以解就是17的索引 3
```
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length === 0)return -1
    if(nums.length === 1)return 0
    for(let i=1;i<nums.length;i++){
        nums[i] = nums[i-1] + nums[i]
    }
    let j=0,len = nums.length
    while(j<len){
        if((nums[len-1] -nums[j]) === (nums[j-1] || 0)) return j
        j++
    }
    return -1
};
```
```
执行结果：通过
执行用时 :96 ms, 在所有 JavaScript 提交中击败了53.63%的用户
内存消耗 :37.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```