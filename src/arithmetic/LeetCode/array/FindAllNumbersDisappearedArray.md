## 448 - 找到所有数组中消失的数字
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
```
示例:

输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/find-all-numbers-disappeared-in-an-array)

### 解
1. indexOf暴力拆解
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let res = []
    for(let i=1;i<=nums.length;i++){
        if(nums.indexOf(i) == -1) res.push(i)
    }
    return res
};
```
```
执行结果：通过
执行用时 :8212 ms, 在所有 JavaScript 提交中击败了9.09%的用户
内存消耗 :43.8 MB, 在所有 JavaScript 提交中击败了88.89%的用户
```

2. 原地修改  
思路：将所有正数作为数组下标，置对应数组值为负值。那么，仍为正数的位置即为（未出现过，没操作过）消失的数字，为负数的都是被我们操作过的。
```
举个例子：
原始数组：[4,3,2,7,8,2,3,1]
重置后为：[-4,-3,-2,-7,8,2,-3,-1]
```
```js
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    for(let i=0;i<nums.length;i++){
        nums[Math.abs(nums[i]) - 1] = - Math.abs(nums[Math.abs(nums[i]) - 1])
    }
    let res = []
    for(let i=0;i<nums.length;i++){
        if(nums[i] > 0) res.push(i+1)
    }
    return res
};
```
```
执行结果：通过
执行用时 :116 ms, 在所有 JavaScript 提交中击败了86.26%的用户
内存消耗 :43.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
