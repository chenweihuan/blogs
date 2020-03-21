## 572 - 另一个树的子树
给定两个非空二叉树 s 和 t，检验 s 中是否包含和 t 具有相同结构和节点值的子树。s 的一个子树包括 s 的一个节点和这个节点的所有子孙。s 也可以看做它自身的一棵子树。
```
示例 1:
给定的树 s:

     3
    / \
   4   5
  / \
 1   2
给定的树 t：

   4 
  / \
 1   2
返回 true，因为 t 与 s 的一个子树拥有相同的结构和节点值。

示例 2:
给定的树 s：

     3
    / \
   4   5
  / \
 1   2
    /
   0
给定的树 t：

   4
  / \
 1   2
返回 false。
```

### 解
1. 前序遍历
思路：判断是否是子树，遍历出来看看连成的字符串是否是子串即可。这里必须要注意 s 的一个子树包括 s 的一个节点和这个节点的```所有子孙```，并不是有结构吻合就行，所以要遍历到下一层节点或叶子节点必须添加特殊符号才行。
```js
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
function fn(root){
    if(!root) return '#'
    return '!' + root.val + fn(root.left) + fn(root.right)
}
var isSubtree = function(s, t) {
    let sStr = fn(s)
    let tStr = fn(t)
    return sStr.includes(tStr)
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了83.33%的用户
内存消耗 :40.1 MB, 在所有 JavaScript 提交中击败了25.00%的用户
```