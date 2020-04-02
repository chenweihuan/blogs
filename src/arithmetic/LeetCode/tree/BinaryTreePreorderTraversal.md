## 144 - 二叉树的前序遍历
给定一个二叉树，返回它的 前序 遍历。
```
示例:

输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [1,2,3]
```
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/binary-tree-preorder-traversal)

### 解
1. 递归
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    function fn(node, res = []){
        if(!node) return res
        res.push(node.val)
        fn(node.left, res)
        fn(node.right, res)
        return res
    }
    return fn(root)
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了85.39%的用户
内存消耗 :33.5 MB, 在所有 JavaScript 提交中击败了98.70%的用户
```

2. 迭代
思路：利用栈先进后出的特性，从根节点开始，每次迭代弹出当前栈顶元素，并将其孩子节点压入栈中，先压右孩子再压左孩子。
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    if(!root) return []
    let stack = [root], res = []
    while(stack.length){
        let curr = stack.pop()
        res.push(curr.val)
        if(curr.right) stack.push(curr.right)
        if(curr.left) stack.push(curr.left)
    }
    return res
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了46.80%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了83.77%的用户
```
