## 581 - 最短无序连续子数组
给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。
```
示例 1:

输入: [2, 6, 4, 8, 10, 9, 15]
输出: 5
解释: 你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
```
说明 :

输入的数组长度范围在 [1, 10,000]。  
输入的数组可能包含重复元素 ，所以升序的意思是<=。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray)

### 解
1. 排序 + 判断第一个移位元素和最后一个移位元素
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    let copyNums = [...nums]
    nums.sort((a,b)=>a-b)
    let start,end = 0
    for(let i=0;i<copyNums.length;i++){
        if(copyNums[i] !== nums[i] && start === undefined) start = i // 第一个移位元素
        else if(copyNums[i] !== nums[i]) end = i // 最后一个移位元素
    }
    return start === undefined ? 0 : end - start + 1 // start如果是undefined的话，证明数组本身就是有序的
};
```
```
执行结果：通过
执行用时 :128 ms, 在所有 JavaScript 提交中击败了47.08%的用户
内存消耗 :38.8 MB, 在所有 JavaScript 提交中击败了25.00%的用户
```
