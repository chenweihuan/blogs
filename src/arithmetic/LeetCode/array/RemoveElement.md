## 027 - 移除元素
给定一个数组 nums 和一个值 val，你需要原地移除所有数值等于 val 的元素，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。

元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
```
示例 1:
给定 nums = [3,2,2,3], val = 3,函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。
你不需要考虑数组中超出新长度后面的元素。
```
```
示例 2:
给定 nums = [0,1,2,2,3,0,4,2], val = 2,函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。
你不需要考虑数组中超出新长度后面的元素。
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/remove-element)

### 解
1. splice  
思路和026题差不多，就不多说了。
```js
/**
* @param {number[]} nums
* @param {number} val
* @return {number}
*/
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === val) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums.length
};
```

```
执行结果：通过
执行用时 : 68 ms , 在所有 JavaScript 提交中击败了 55.49% 的用户
内存消耗 : 34.2 MB , 在所有 JavaScript 提交中击败了 5.04% 的用户
```

2. 双指针
```js
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0
    for(let j=0;j<nums.length;j++){
        if(val !== nums[j]){
            nums[i] = nums[j]
            i++
        }
    }
    return i
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了76.56%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了85.89%的用户
```