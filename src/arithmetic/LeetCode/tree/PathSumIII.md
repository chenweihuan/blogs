## 437 - 路径总和 III
给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

二叉树不超过1000个节点，且节点数值范围是 [-1000000,1000000] 的整数。

示例：

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8
```
      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1
```
返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11

来源：[力扣](https://leetcode-cn.com/problems/path-sum-iii/)

### 解
1. 递归  
思路：先不管子节点，算出从当前节点出发，路径和等于给定数值的路径总数。接着递归，从子节点出发即可。
```js
var pathSum = function(root, sum) {
    let res = 0
    function fn(node, num){
        if(!node) return
        num -= node.val
        if(num === 0) res++
        fn(node.left, num)
        fn(node.right, num)
    }
    function dfs(node){
        if(!node) return
        fn(node, sum)
        dfs(node.left)
        dfs(node.right)
    }
    dfs(root)
    return res
};
```
```
执行结果：通过
执行用时 :120 ms, 在所有 JavaScript 提交中击败了37.78%的用户
内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了74.51%的用户
```