## 167 - 两数之和 II - 输入有序数组
给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

说明:

返回的下标值（index1 和 index2）不是从零开始的。  
你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。
```
示例:

输入: numbers = [2, 7, 11, 15], target = 9
输出: [1,2]
解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/two-sum-ii-input-array-is-sorted)

### 解
1. Map + for循环
```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let resMap = new Map()
    for(let i=0;i<numbers.length;i++){
        if(resMap.has(numbers[i])){
            return [resMap.get(numbers[i])+1, i+1]
        }else{
            resMap.set(target - numbers[i], i)
        }
    }
    return []
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了55.88%的用户
内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了84.27%的用户
```

2. 双指针  
思路：上面的方法并没有用到已经排序的性质，我们使用两个指针，初始分别位于第一个元素和最后一个元素位置，比较这两个元素之和与目标值的大小。如果和等于目标值，我们发现了这个唯一解。如果比目标值小，我们将较小元素指针增加一。如果比目标值大，我们将较大指针减小一。
```js
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let left = 0, right = numbers.length-1
    while(left < right){
        let sum = numbers[left] + numbers[right]
        if(sum === target) return [left+1, right+1]
        if(sum > target){
            right--
        }else{
            left ++
        }
    }
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了70.81%的用户
内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了84.27%的用户
```
