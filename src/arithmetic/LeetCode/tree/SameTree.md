## 100 - 相同的树
给定两个二叉树，编写一个函数来检验它们是否相同。

如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
```
示例 1:

输入:       1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

输出: true
```
```
示例 2:

输入:      1          1
          /           \
         2             2

        [1,2],     [1,null,2]

输出: false
```
```
示例 3:

输入:       1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

输出: false
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/same-tree)

### 解
1. 类前序遍历+拼接比较字符串  
思路：把二叉树按照类前序遍历（空子节点也算上）的顺序遍历出来，拼接成字符串，然后比较即可。
```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
function each(node){
    let res = ''
    function fn(root){
        res += `${root && root.val},`
        if(root == null)return
        fn(root.left)
        fn(root.right)
    }
    fn(node)
    return res
}
var isSameTree = function(p, q) {
    return each(p) == each(q)
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了42.67%的用户
内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了39.17%的用户
```

```js
var isSameTree = function(p, q) {
    function each(node){
        if(!node)return '#'
        return `${node.val},${each(node.left)},${each(node.right)}`
    }
    return each(p) == each(q)
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了42.67%的用户
内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了44.27%的用户
```

2. 递归  
思路：先不管子节点，先判断根节点，接着递归判断左右子节点即可。
```js
var isSameTree = function(p, q) {
    if(p == null && q == null) return true
    if(p == null || q == null) return false
    if(p.val !== q.val) return false
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了42.67%的用户
内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了70.38%的用户
```
