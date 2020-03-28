## 687 - 最长同值路径
给定一个二叉树，找到最长的路径，这个路径中的每个节点具有相同值。 这条路径可以经过也可以不经过根节点。

注意：两个节点之间的路径长度由它们之间的边数表示。
```
示例 1:

输入:

              5
             / \
            4   5
           / \   \
          1   1   5
输出:2
```
```
示例 2:

输入:

              1
             / \
            4   5
           / \   \
          4   4   5
输出:2
```
注意: 给定的二叉树不超过10000个结点。 树的高度不超过1000。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/longest-univalue-path)

### 解
1. 递归
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function(root) {
    let res = 0
    function fn(node){
        if(!node) return 0
        let left = fn(node.left)
        let right = fn(node.right)
        let leftTimer = 0, rightTimer = 0
        if(node.val === (node.left && node.left.val)) leftTimer += left+1
        if(node.val === (node.right && node.right.val)) rightTimer += right+1
        res = Math.max(res, leftTimer + rightTimer)
        return Math.max(leftTimer, rightTimer)
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :188 ms, 在所有 JavaScript 提交中击败了93.97%的用户
内存消耗 :52.4 MB, 在所有 JavaScript 提交中击败了28.00%的用户
```
