## 538 - 把二叉搜索树转换为累加树
给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

例如：
```
输入: 原始二叉搜索树:
              5
            /   \
           2     13

输出: 转换为累加树:
             18
            /   \
          20     13
```

### 解
1. 递归  
思路：利用二叉搜索树的特性，当前节点肯定比父节点和父节点的右节点小。通过反向中序遍历二叉搜索树，先递归右节点，不停相加val值，赋给全局sum，最后递归左节点。
```js
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function(root) {
    let sum = 0
    function fn(node){
        if(!node) return
        fn(node.right)
        sum += node.val
        node.val = sum
        fn(node.left)
    }
    fn(root)
    return root
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了94.39%的用户
内存消耗 :40.2 MB, 在所有 JavaScript 提交中击败了70.00%的用户
```