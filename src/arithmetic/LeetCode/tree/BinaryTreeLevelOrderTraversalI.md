## 102 - 二叉树的层序遍历
给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

示例：
二叉树：[3,9,20,null,null,15,7],
```
    3
   / \
  9  20
    /  \
   15   7
```
返回其层次遍历结果：
```
[
  [3],
  [9,20],
  [15,7]
]
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/binary-tree-level-order-traversal)

### 解
1. 迭代
```js
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) return []
    let q = [root, null], res = [], now = []
    while(q.length){
        let curr = q.shift()
        if(!curr){
            res.push(now)
            now = []
            if(q.length) q.push(null)
        }else{
            now.push(curr.val)
            if(curr.left) q.push(curr.left)
            if(curr.right) q.push(curr.right)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了48.06%的用户
内存消耗 :35 MB, 在所有 JavaScript 提交中击败了76.92%的用户
```

2. 递归
思路：其实我们也不必一定要按照层序顺序来遍历，可以使用前序遍历，只需要告诉他在哪一层即可，节点在num层，就给数组第num个元素添加node.val。
```js
var levelOrder = function(root) {
    function fn(node, num = 0){
        if(!node) return
        res[num] ? res[num].push(node.val) : res[num] = [node.val]
        fn(node.left, num+1)
        fn(node.right, num+1)
    }
    let res = []
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了93.80%的用户
内存消耗 :35.1 MB, 在所有 JavaScript 提交中击败了73.43%的用户
```
