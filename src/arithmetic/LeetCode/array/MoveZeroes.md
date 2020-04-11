## 283 - 移动零
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
```
示例:

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]
```
说明:

必须在原数组上操作，不能拷贝额外的数组。  
尽量减少操作次数。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/move-zeroes)

### 解
1. 常规解法（双指针？）
```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0, // 记录操作到哪一个位置
        j=0, // 记录操作了多少遍
        len = nums.length
    while(j<len){
        if(nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
        }else{
            i++
        }
        j++
    }
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了20.04%的用户
内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了24.72%的用户
```

