## 106 - 从中序与后序遍历序列构造二叉树
根据一棵树的中序遍历与后序遍历构造二叉树。

注意:  
你可以假设树中没有重复的元素。

例如，给出

中序遍历 inorder = [9,3,15,20,7]  
后序遍历 postorder = [9,15,7,20,3]  
返回如下的二叉树：
```
    3
   / \
  9  20
    /  \
   15   7
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal)

### 解
1. 递归
```js
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(!inorder.length || !postorder.length) return null
    let gen = postorder[postorder.length - 1]
    let index = inorder.indexOf(gen)
    let tree = new TreeNode(gen)
    tree.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    tree.right = buildTree(inorder.slice(index + 1), postorder.slice(index, postorder.length - 1))
    return tree
};
```
```
执行结果：通过
执行用时 :128 ms, 在所有 JavaScript 提交中击败了59.42%的用户
内存消耗 :127.3 MB, 在所有 JavaScript 提交中击败了44.44%的用户
```
