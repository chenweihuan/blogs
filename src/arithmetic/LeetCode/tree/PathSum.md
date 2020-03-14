## 112 - 路经总和
给定一个二叉树和一个目标和，判断该树中是否存在根节点到叶子节点的路径，这条路径上所有节点值相加等于目标和。

说明: 叶子节点是指没有子节点的节点。

示例: 
给定如下二叉树，以及目标和 sum = 22，
```
              5
             / \
            4   8
           /   / \
          11  13  4
         /  \      \
        7    2      1
```
返回 true, 因为存在目标和为 22 的根节点到叶子节点的路径 5->4->11->2

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/path-sum)

### 解
1. 递归  
```js
var hasPathSum = function(root, sum) {
    if(!root) return false
    sum -= root.val
    if(!root.left && !root.right) return sum === 0
    return hasPathSum(root.left, sum) || hasPathSum(root.right, sum)
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了66.15%的用户
内存消耗 :37.3 MB, 在所有 JavaScript 提交中击败了53.39%的用户
```
