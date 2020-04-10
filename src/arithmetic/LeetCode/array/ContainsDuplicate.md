## 217 - 存在重复元素
给定一个整数数组，判断是否存在重复元素。

如果任意一值在数组中出现至少两次，函数返回 true 。如果数组中每个元素都不相同，则返回 false 。

```
示例 1:

输入: [1,2,3,1]
输出: true
```
```
示例 2:

输入: [1,2,3,4]
输出: false
```
```
示例 3:

输入: [1,1,1,3,3,4,3,2,4,2]
输出: true
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/contains-duplicate)

### 解
1. 去重比较数组个数
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    return [...new Set(nums)].length !== nums.length
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了62.68%的用户
内存消耗 :43.4 MB, 在所有 JavaScript 提交中击败了18.92%的用户
```

2. Map
```js
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let resMap = {}
    for(let i=0;i<nums.length;i++){
        let curr = nums[i]
        if(resMap[curr]){
            return true
        }else{
            resMap[curr] = 1
        }
    }
    return false
};
```
```
执行结果：通过
执行用时 :116 ms, 在所有 JavaScript 提交中击败了33.28%的用户
内存消耗 :42.2 MB, 在所有 JavaScript 提交中击败了44.59%的用户
```