## 111. 二叉树的最小深度
给定一个二叉树，找出其最小深度。

最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

说明: 叶子节点是指没有子节点的节点。
```
示例:

给定二叉树 [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7
返回它的最小深度  2.
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/minimum-depth-of-binary-tree)

### 解
1. 递归  
思路：和二叉树的最大深度基本一个思路，但是注意不同之处在于 最小深度是从根节点到最近```叶子节点```的最短路径上的节点数量，不能是空的。所以要特殊处理左右子节点有一个为空的情况。
```js
var minDepth = function(root) {
    if(root == null) return 0
    let left = minDepth(root.left)
    let right = minDepth(root.right)
    if(!root.left) return right + 1
    if(!root.right) return left + 1
    return Math.min(left,right) + 1
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了89.26%的用户
内存消耗 :37.3 MB, 在所有 JavaScript 提交中击败了74.56%的用户
```