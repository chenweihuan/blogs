## 938 - 二叉搜索树的范围和
给定二叉搜索树的根结点 root，返回 L 和 R（含）之间的所有结点的值的和。

二叉搜索树保证具有唯一的值。
```
示例 1：

输入：root = [10,5,15,3,7,null,18], L = 7, R = 15
输出：32
```
```
示例 2：

输入：root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
输出：23
```

提示：

树中的结点数量最多为 10000 个。
最终的答案保证小于 2^31。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/range-sum-of-bst)

### 解
1. 深度遍历（递归）
```js
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    function fn(node){
        if(!node) return
        if(node.val >= L) fn(node.left) // 只有比L大的 才递归左节点
        if(node.val >= L && node.val <= R) res += node.val
        if(node.val <= R) fn(node.right) // 只有比R小的 才递归右节点
    }
    let res = 0
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :192 ms, 在所有 JavaScript 提交中击败了65.03%的用户
内存消耗 :67.3 MB, 在所有 JavaScript 提交中击败了85.26%的用户
```

2. 广度遍历（迭代）
```js
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function(root, L, R) {
    let res = 0
    let q = [root]
    while(q.length){
        let current = q.shift()
        if(current){
            if(current.val >= L && current.val <= R) res += current.val
            if(current.val >= L) q.push(current.left)
            if(current.val <= R) q.push(current.right)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :168 ms, 在所有 JavaScript 提交中击败了99.08%的用户
内存消耗 :73.4 MB, 在所有 JavaScript 提交中击败了5.26%的用户
```

