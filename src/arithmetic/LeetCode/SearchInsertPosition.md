## 035 - 搜索插入位置
给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。

你可以假设数组中无重复元素。
```
示例 1:

输入: [1,3,5,6], 5
输出: 2
```
```
示例 2:

输入: [1,3,5,6], 2
输出: 1
```
```
示例 3:

输入: [1,3,5,6], 7
输出: 4
```
```
示例 4:

输入: [1,3,5,6], 0
输出: 0
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/search-insert-position)

### 解
1. 暴力拆解  
思路：使用indexOf判断，如果存在，返回索引即可。如果不存在的话，就遍历数组，把target放在左边小，右边大的位置即可，注意，一定要考虑target是最值得情况噢。

```js
/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
var searchInsert = function (nums, target) {
  const index = nums.indexOf(target)
  if (~index) return index
  if (target < nums[0]) return 0 // 如果target最小，返回0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < target && nums[i + 1] > target) return i + 1
  }
  return nums.length //如果target最大，就插入最后的位置，返回nums数组长度
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了50.87%的用户
内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了40.81%的用户
```

2. 更优的暴力拆解。也可以不使用indexOf，直接遍历数组，如果当前元素大于或等于target，直接返回i。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i
  }
  return nums.length
};
```
```
执行结果：通过
执行用时 :52 ms, 在所有 JavaScript 提交中击败了98.86%的用户
内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了38.12%的用户
```
