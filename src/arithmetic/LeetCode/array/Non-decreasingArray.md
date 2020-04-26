## 665 - 非递减数列
给你一个长度为 n 的整数数组，请你判断在 最多 改变 1 个元素的情况下，该数组能否变成一个非递减数列。

我们是这样定义一个非递减数列的： 对于数组中所有的 i (1 <= i < n)，总满足 array[i] <= array[i + 1]。

```
示例 1:

输入: nums = [4,2,3]
输出: true
解释: 你可以通过把第一个4变成1来使得它成为一个非递减数列。
```

```
示例 2:

输入: nums = [4,2,1]
输出: false
解释: 你不能在只改变一个元素的情况下将其变为非递减数列。
```

说明：

1 <= n <= 10 ^ 4  
- 10 ^ 5 <= nums[i] <= 10 ^ 5

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/non-decreasing-array)

### 解
1. 暴力拆解  
```js
<!-- 特殊情况的测试用例 -->
[2,3,3,2,4] // true
[3,4,2,3] // false
```

```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let res = 0
    for(let i=0;i<nums.length-1;i++){
        if(nums[i] > nums[i+1]) {
            res++
            if(res>1) return false
            if (i > 0 && nums[i-1] > nums[i+1] && i + 2 < nums.length && nums[i] > nums[i+2]) {
                return false
            }
        }
    }
    return true
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了95.74%的用户
内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```