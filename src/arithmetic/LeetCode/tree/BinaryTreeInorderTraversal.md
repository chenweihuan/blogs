## 94 - 二叉树的中序遍历
给定一个二叉树，返回它的中序 遍历。
```
示例:

输入: [1,null,2,3]
   1
    \
     2
    /
   3

输出: [1,3,2]
```
进阶: 递归算法很简单，你可以通过迭代算法完成吗？

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/binary-tree-inorder-traversal)

### 解
1. 递归
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    function fn(node, res = []){
        if(!node) return res
        fn(node.left, res)
        res.push(node.val)
        fn(node.right, res)
        return res
    }
    return fn(root)
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了94.50%的用户
内存消耗 :34 MB, 在所有 JavaScript 提交中击败了72.58%的用户
```

2. 迭代
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = [],stack = []
    let curr = root
    while(curr !== null || stack.length){
        while(curr !== null){
            stack.push(curr)
            curr = curr.left
        }
        curr = stack.pop()
        res.push(curr.val)
        curr = curr.right
    }
    return res
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了94.61%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了83.12%的用户
```

3. 莫里斯遍历  
思路：举例而言:
```
          1
        /   \
       2     3
      / \   /
     4   5 6
```
首先，1 是根节点，所以将 current 初始化为 1。1 有左子节点 2，current 的左子树是
```
         2
        / \
       4   5
```
在此左子树中最右侧的节点是 5，于是将 current(1) 作为 5 的右子节点。令 current = cuurent.left (current = 2)。
现在二叉树的形状为:
```
         2
        / \
       4   5
            \
             1
              \
               3
              /
             6
```
对于 current(2)，其左子节点为4，我们可以继续上述过程
```
        4
         \
          2
           \
            5
             \
              1
               \
                3
               /
              6
```
由于 4 没有左子节点，添加 4 为输出，接着依次添加 2, 5, 1, 3 。节点 3 有左子节点 6，故重复以上过程。
最终的结果是 [4,2,5,1,6,3]。

```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let res = []
    let curr = root
    let prev
    while(curr){
        if(!curr.left){
            res.push(curr.val)
            curr = curr.right
        }else{
            prev = curr.left
            while(prev.right) prev = prev.right
            prev.right = curr
            let temp = curr // 这个节点本身就存在左右节点，这是它一开始就有的。即使被挪去其他地方了，它依旧有左右节点。需要去掉
            curr = curr.left
            temp.left = null
        }
    }
    return res
};
```
