## 107. 二叉树的层次遍历 II
给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其自底向上的层次遍历为：
```
[
  [15,7],
  [9,20],
  [3]
]
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii)

### 解
1. 队列  
思路：只要你明白使用队列进行广度优先遍历二叉树的过程，基本就能做出来了，这题就是自底而上的广度优先遍历。
```js
var levelOrderBottom = function(root) {
    if(!root) return []
    let q = [root,null]
    let res = [],resItem = []
    while(q.length){
        let current = q.shift()
        if(current===null){
            res.unshift(resItem)
            resItem = []
            if(q.length)q.push(null)
        }else{
            resItem.push(current.val)
            if(current.left)q.push(current.left)
            if(current.right)q.push(current.right)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了94.91%的用户
内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了71.03%的用户
```

