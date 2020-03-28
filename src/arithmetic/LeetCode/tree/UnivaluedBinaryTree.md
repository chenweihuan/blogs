## 965 - 单值二叉树
如果二叉树每个节点都具有相同的值，那么该二叉树就是单值二叉树。

只有给定的树是单值二叉树时，才返回 true；否则返回 false。
```
示例 1：

输入：[1,1,1,1,1,null,1]
输出：true
```
```
示例 2：

输入：[2,2,2,5,2]
输出：false
```
 

提示：

给定树的节点数范围是 [1, 100]。  
每个节点的值都是整数，范围为 [0, 99] 。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/univalued-binary-tree)

### 解
1. 深度优先遍历
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let rootVal = root.val
    let res = true
    fn(root)
    function fn(node){
        if(!node) return
        if(res){
            res = node.val === rootVal
            fn(node.left)
            fn(node.right)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了84.14%的用户
内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了76.92%的用户
```

2. 递归  
思路：一颗树是单值的，当且仅当根节点的子节点所在的子树也是单值的，同时根节点的值与子节点的值相同。
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let left = root.left === null 
        || (root.val === root.left.val && isUnivalTree(root.left))
    let right = root.right === null
        || (root.val === root.right.val && isUnivalTree(root.right))
    return left && right
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了71.72%的用户
内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了76.92%的用户
```

3. 迭代
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isUnivalTree = function(root) {
    let rootVal = root.val
    let q = [root]
    while(q.length){
        let current = q.shift()
        if(current){
            if(current.val !== rootVal) return false 
            q.push(current.left)
            q.push(current.right)
        }
    }
    return true
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了10.34%的用户
内存消耗 :34 MB, 在所有 JavaScript 提交中击败了84.62%的用户
```