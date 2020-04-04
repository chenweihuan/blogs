## 145 - 二叉树的后序遍历
给定一个二叉树，返回它的 后序 遍历。

示例:
```
输入: [1,null,2,3]  
   1
    \
     2
    /
   3 

输出: [3,2,1]
```
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/binary-tree-postorder-traversal)

### 解
1. 递归
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    function fn(node, res = []){
        if(!node) return res
        fn(node.left, res)
        fn(node.right, res)
        res.push(node.val)
        return res
    }
    return fn(root)
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了95.68%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了89.16%的用户
```

2. 迭代  
思路：从根节点开始依次迭代，弹出栈顶元素输出到输出列表中，然后依次压入它的所有孩子节点，按照从上到下、从左至右的顺序依次压入栈中。因为深度优先搜索后序遍历的顺序是从下到上、从左至右，所以需要将输出列表逆序输出。
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if(!root) return []
    let stack = [root], res = []
    while(stack.length){
        let curr = stack.pop()
        res.unshift(curr.val)
        if(curr.left) stack.push(curr.left)
        if(curr.right) stack.push(curr.right)
    }
    return res
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了68.48%的用户
内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了92.77%的用户
```
