## 697 - 数组的度
给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。
```
示例 1:

输入: [1, 2, 2, 3, 1]
输出: 2
解释: 
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
```
```
示例 2:

输入: [1,2,2,3,1,4,2]
输出: 6
```

注意:

nums.length 在1到50,000区间范围内。  
nums[i] 是一个在0到49,999范围内的整数。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/degree-of-an-array)

### 解
1. Map  
```
[1, 2, 2, 3, 1]
=> {1:[0,4], 2:[1,2], 3:[5]}
=> 取数组最长的一组，last-first+1就是解了。如果存在数组最长且相等的，比较得出最短的即可。
```
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let resMap = {}
    for(let i=0;i<nums.length;i++){
        if(!resMap[nums[i]]) resMap[nums[i]] = []
        resMap[nums[i]].push(i)
    }

    let maxLen = 0, res = Number.MAX_VALUE
    for(let i in resMap){
        let value = resMap[i]
        let cha = value[value.length-1] - value[0] + 1
        if(value.length > maxLen){
            maxLen = value.length
            res = cha
        }
        if(value.length === maxLen) {
            res = Math.min(res, cha)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :116 ms, 在所有 JavaScript 提交中击败了63.38%的用户
内存消耗 :42.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
