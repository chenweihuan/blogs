## 643 - 子数组最大平均数 I
给定 n 个整数，找出平均数最大且长度为 k 的连续子数组，并输出该最大平均数。
```
示例 1:

输入: [1,12,-5,-6,50,3], k = 4
输出: 12.75
解释: 最大平均数 (12-5-6+50)/4 = 51/4 = 12.75
```

注意:

1 <= k <= n <= 30,000。  
所给数据范围 [-10,000，10,000]。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/maximum-average-subarray-i)

### 解
1. 累计求和  
思路：为了获得长度为 kk 的子数组的平均值，我们需要知道这 kk 个元素之和。使用 sumsum 记录数组的累加和，sum[i]sum[i] 存储从第一个元素到第 ii 个元素之和。该数组只需要计算一次。  
在数组 sumsum 中，原数组索引从 ii 到 i+ki+k 的元素之和为 sum[i] - sum[i-k]sum[i]−sum[i−k]。按照此方法遍历数组 sumsum，计算每个长度为 kk 的子数组平均值，即可获得长度为 kk 的子数组的最大平均值。

```
[1,12,-5,-6,50,3] => [1,13,8,2,52,55]
```
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length < k) return 0
    let sum = [nums[0]]
    for(let i=1;i<nums.length;i++) sum[i] = nums[i] + sum[i-1]
    let res = sum[k-1] / k
    for(let i=k;i<sum.length;i++){
        res = Math.max(res, (sum[i] - sum[i-k]) / k)
    }
    return res
};
```
```
执行结果：通过
执行用时 :116 ms, 在所有 JavaScript 提交中击败了62.05%的用户
内存消耗 :46.8 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```

2. 滑动窗口  
思路：相比于创建一个累加和数组，再遍历计算最大平均值，本方法只需要遍历一次数组 num，从中找出长度为 k 的子数组最大和（和最大子序列和类似，只不过此题限定个数为k）。
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = 0, res = 0
    for(let i=0;i<k;i++)sum += nums[i]
    res = sum
    for(let i=k;i<nums.length;i++){
        sum += nums[i] - nums[i-k]
        res = Math.max(sum, res)
    }
    return res/k
};
```
```
执行结果：通过
执行用时 :108 ms, 在所有 JavaScript 提交中击败了74.10%的用户
内存消耗 :42.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
