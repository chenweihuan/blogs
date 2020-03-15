## 404 - 左叶子之和
计算给定二叉树的所有左叶子之和。

示例：
```
    3
   / \
  9  20
    /  \
   15   7
```
在这个二叉树中，有两个左叶子，分别是 9 和 15，所以返回 24

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/sum-of-left-leaves)

### 解
1. 前序遍历 + 判断  
思路：要得到所有左叶子之和，那我们就做一次前序遍历，遇到做叶子就加上即可。
```js
var sumOfLeftLeaves = function(root) {
    if(!root) return 0
    let res = 0
    function fn(node, isLeft){ // isLeft,区分是否是左节点
        if(!node) return
        if(!node.left && !node.right && isLeft) res += node.val
        fn(node.left, true)
        fn(node.right, false)
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了98.09%的用户
内存消耗 :35 MB, 在所有 JavaScript 提交中击败了22.73%的用户
```