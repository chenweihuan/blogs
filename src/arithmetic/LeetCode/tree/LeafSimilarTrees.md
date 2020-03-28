## 872 - 叶子相似的树
请考虑一颗二叉树上所有的叶子，这些叶子的值按从左到右的顺序排列形成一个 叶值序列 。

```
              3
             / \
            5   1
           / \   \ \
          6   2  9  8
             / \   
            7    4
```

举个例子，如上图所示，给定一颗叶值序列为 (6, 7, 4, 9, 8) 的树。

如果有两颗二叉树的叶值序列是相同，那么我们就认为它们是 叶相似 的。

如果给定的两个头结点分别为 root1 和 root2 的树是叶相似的，则返回 true；否则返回 false 。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/leaf-similar-trees)


### 解
1. 递归
```js
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    function fn(node, res = ''){
        if(!node) return res
        if(!node.left && !node.right) res += `${node.val},`
        return res + fn(node.left) + fn(node.right)
    }
    return fn(root1) === fn(root2)
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了63.64%的用户
内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了94.12%的用户
```
