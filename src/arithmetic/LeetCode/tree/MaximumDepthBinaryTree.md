## 104 - 二叉树的最大深度
给定一个二叉树，找出其最大深度。

二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

说明: 叶子节点是指没有子节点的节点。
```
示例：
给定二叉树 [3,9,20,null,null,15,7]，

    3
   / \
  9  20
    /  \
   15   7
返回它的最大深度 3 。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree)

### 解
1. 递归  
思路：还是使用树结构的常规套路，先考虑当前节点该做的事情。如果当前节点为null，那么深度为0；如果当前节点不为null，那么最大深度就等于Math.max(左节点的最大深度,右节点的最大深度)+1。
```js
var maxDepth = function(root) {
    if(root === null){
        return 0
    }else{
        const left = maxDepth(root.left)
        const right = maxDepth(root.right)
        return Math.max(left,right)+1
    }
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了95.25%的用户
内存消耗 :36.9 MB, 在所有 JavaScript 提交中击败了85.07%的用户
```

2. 队列（非递归）  
思路：给数组q添加每层的元素，一层添加完毕之后添加null；那么遍历这个数组q，一遇到null就代表遍历了一层，sum++。
```js
var maxDepth = function(root) {
    if(!root) return 0 // 传入空树的情况
    let q = [root,null]
    let depth = 0
    while(q.length){
        let current = q.shift()
        if(current === null){ // 遍历到null，说明已经遍历过一层了
            depth ++
            if(q.length !== 0)q.push(null)
        }else{
            if(current.left!==null)q.push(current.left)
            if(current.right!==null)q.push(current.right)
        }
    }
    return depth
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了87.29%的用户
内存消耗 :37.2 MB, 在所有 JavaScript 提交中击败了63.20%的用户
```