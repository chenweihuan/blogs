## 080 - 合并两个有序数组
给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 num1 成为一个有序数组。

说明:  
初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 
```
示例:

输入:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

输出: [1,2,2,3,5,6]
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/merge-sorted-array)

### 解
1. 常规解法while语法  
思路：先把nums1和nums2多余的数去掉，然后遍历nums1，比较nums2[0]和nums1[i]，谁小谁就放在nums1的第i位。
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let sum = m+n
    let i = 0
    nums1.splice(m,nums1.length-m) // 去掉多余的数字
    nums2.splice(n,nums2.length-n)
    while(i < sum){
        let f = nums2[0]
        if(f < nums1[i]){ // nums2[0]小的话，就合到nums1的i位
            nums1.splice(i,0,f)
            nums2.shift()
        }
        i++
    }
    if(nums2.length) nums1.push(...nums2) // 把nums2剩下的合并过去
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了97.00%的用户
内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了66.90%的用户
```

2. 合并数组再排序
```js
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    nums1.unshift(...nums2)
    nums1.splice(n+m)
    return nums1.sort((a,b)=>a-b)
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了27.75%的用户
内存消耗 :35 MB, 在所有 JavaScript 提交中击败了39.59%的用户
```