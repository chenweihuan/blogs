## 674 - 最长连续递增序列
给定一个未经排序的整数数组，找到最长且连续的的递增序列。
```
示例 1:

输入: [1,3,5,4,7]
输出: 3
解释: 最长连续递增序列是 [1,3,5], 长度为3。
尽管 [1,3,5,7] 也是升序的子序列, 但它不是连续的，因为5和7在原数组里被4隔开。 
```
```
示例 2:

输入: [2,2,2,2,2]
输出: 1
解释: 最长连续递增序列是 [2], 长度为1。
```

注意：数组长度不会超过10000。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence)

### 解
1. 常规拆解
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if(nums.length === 0)return 0
    let res = 1, num = 1
    for(let i=0;i<nums.length;i++){
        if(nums[i] < nums[i+1]){
            num++
            res = Math.max(res, num)
        }else{
            num = 1
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了16.71%的用户
内存消耗 :35.2 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```

2.  滑动窗口法  
思路：每个（连续）增加的子序列是不相交的，并且每当 nums[i-1]>=nums[i] 时，每个此类子序列的边界都会出现。当它这样做时，它标志着在 nums[i] 处开始一个新的递增子序列，我们将这样的 i 存储在变量 anchor 中。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    let res = 0, k = 0
    for(let i=0;i<nums.length;i++){
        if(i>0 && nums[i-1] >= nums[i]) k = i
        res = Math.max(res, i-k+1)
    }
    return res
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了98.50%的用户
内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```