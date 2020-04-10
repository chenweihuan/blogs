## 219 - 存在重复元素 II

给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，并且 i 和 j 的差的 绝对值 至多为 k。
```
示例 1:

输入: nums = [1,2,3,1], k = 3
输出: true
```
```
示例 2:

输入: nums = [1,0,1,1], k = 1
输出: true
```
```
示例 3:

输入: nums = [1,2,3,1,2,3], k = 2
输出: false
```

### 解
1. Map + 记录索引
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let resMap = {}
    for(let i=0;i<nums.length;i++){
        let curr = nums[i]
        if(resMap[curr] !== undefined && (i-resMap[curr] <= k)){ // 遇到重复的value，比较索引差和k值
            return true
        }else{
            resMap[curr] = i // 不满足上面条件的就废弃，使用新索引覆盖
        }
    }
    return false
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了58.26%的用户
内存消耗 :42.3 MB, 在所有 JavaScript 提交中击败了13.64%的用户
```
