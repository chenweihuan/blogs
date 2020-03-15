## 257 - 二叉树的所有路径
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。

示例:

输入:
```
   1
 /   \
2     3
 \
  5
```
输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/binary-tree-paths)

### 解
1. 递归+传参保存状态  
思路：还是递归老套路，先做好自己节点的事情，再继续递归子节点。但这里还需要把自己节点拼接的路径结果传给子节点，让子节点继续拼接。
```js
var binaryTreePaths = function(root) {
    let res = []
    function fn(node, path = ''){
        if(!node) return
        path = path + node.val + (node.left || node.right ? '->' : '')
        if(!node.left && !node.right) res.push(path)
        fn(node.left, path)
        fn(node.right, path)
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了55.73%的用户
内存消耗 :34.3 MB, 在所有 JavaScript 提交中击败了96.81%的用户
```