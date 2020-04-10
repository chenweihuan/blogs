## 169 - 多数元素
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

```
示例 1:

输入: [3,2,3]
输出: 3
```
```
示例 2:

输入: [2,2,1,1,1,2,2]
输出: 2
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/majority-element)

### 解
1. Map + for循环
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let resMap = {}
    let res,max=0
    for(let i=0;i<nums.length;i++){
        resMap[nums[i]] ? resMap[nums[i]]++ : resMap[nums[i]]=1
        if(resMap[nums[i]] > max) {
            max = resMap[nums[i]]
            res = nums[i]
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了56.68%的用户
内存消耗 :37.7 MB, 在所有 JavaScript 提交中击败了70.21%的用户
```

2. 排序  
思路：如果将数组 nums 中的所有元素按照单调递增或单调递减的顺序排序，那么下标为 n/2 的元素（下标从 0 开始）一定是众数。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort((a,b)=>a-b)
    return nums[Math.floor(nums.length/2)]
};
```
```
执行结果：通过
执行用时 :96 ms, 在所有 JavaScript 提交中击败了29.29%的用户
内存消耗 :38 MB, 在所有 JavaScript 提交中击败了41.85%的用户
```

3. 投票法  
思路：如果我们把众数记为 +1，把其他数记为 -1，将它们全部加起来，显然和大于 0。在一个for循环中，一个众数干掉一个非众数，最后胜利的一定是众数。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let count = 1
    let num = nums[0]
    for(let i=1;i<nums.length;i++){
        if(count === 0) num = nums[i]
        nums[i] === num? count++:count--
    }
    return num
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了95.39%的用户
内存消耗 :37.5 MB, 在所有 JavaScript 提交中击败了85.82%的用户
```
