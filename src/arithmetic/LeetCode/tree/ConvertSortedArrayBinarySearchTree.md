## 108 - 将有序数组转换为二叉搜索树
将一个按照升序排列的有序数组，转换为一棵高度平衡二叉搜索树。

本题中，一个高度平衡二叉树是指一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1。

示例:

给定有序数组: [-10,-3,0,5,9],

一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：
```
      0
     / \
   -3   9
   /   /
 -10  5
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/convert-sorted-array-to-binary-search-tree)

### 解
1. 递归
```js
var sortedArrayToBST = function(nums) {
    if(!nums.length) return null
    let middle = Math.floor(nums.length/2)
    return {
        val: nums[middle],
        left: sortedArrayToBST(nums.slice(0, middle)),
        right: sortedArrayToBST(nums.slice(middle+1))
    }
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了96.24%的用户
内存消耗 :37.7 MB, 在所有 JavaScript 提交中击败了67.31%的用户
```