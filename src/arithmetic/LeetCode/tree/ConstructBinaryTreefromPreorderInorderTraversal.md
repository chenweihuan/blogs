## 105 - 从前序与中序遍历序列构造二叉树
根据一棵树的前序遍历与中序遍历构造二叉树。

注意:
你可以假设树中没有重复的元素。

例如，给出

前序遍历 preorder = [3,9,20,15,7]  
中序遍历 inorder = [9,3,15,20,7]  
返回如下的二叉树：
```
    3
   / \
  9  20
    /  \
   15   7
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal)

### 解
1. 递归
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0 || inorder.length === 0) return null
    let gen = preorder[0]
    let index = inorder.indexOf(gen)
    let tree = new TreeNode(gen)
    tree.left = buildTree(preorder.slice(1, index+1), inorder.slice(0, index))
    tree.right = buildTree(preorder.slice(index+1), inorder.slice(index + 1))
    return tree
};
```
```
执行结果：通过
执行用时 :144 ms, 在所有 JavaScript 提交中击败了34.20%的用户
内存消耗 :127.6 MB, 在所有 JavaScript 提交中击败了47.37%的用户
```
