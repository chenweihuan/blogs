## 110. 平衡二叉树
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过1。
```
示例 1:

给定二叉树 [3,9,20,null,null,15,7]

    3
   / \
  9  20
    /  \
   15   7
返回 true 。
```
```
示例 2:

给定二叉树 [1,2,2,3,3,null,null,4,4]

       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
返回 false 。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/balanced-binary-tree)

### 解
1. 递归  
思路：获取当前节点的左右节点的最大深度，比较绝对值即可。注意还要递归他们的所有孩子节点，因为平衡二叉树的定义是 ```每个节点``` 的左右两个子树的高度差的绝对值不超过1。

```js
var isBalanced = function(root) {
    if(root==null)return true
    let left = getMaxDepth(root.left)
    let right = getMaxDepth(root.right)
    if((left-right)>1 ||(right-left)>1) return false
    return isBalanced(root.left) && isBalanced(root.right)
};
function getMaxDepth(root){
    if(root == null){
        return 0
    }else{
        let left = getMaxDepth(root.left)
        let right = getMaxDepth(root.right)
        return Math.max(left,right)+1
    }
}
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了72.58%的用户
内存消耗 :37.8 MB, 在所有 JavaScript 提交中击败了47.16%的用户
```