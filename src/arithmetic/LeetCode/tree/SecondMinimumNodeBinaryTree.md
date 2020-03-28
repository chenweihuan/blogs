## 671 - 二叉树中第二小的节点
给定一个非空特殊的二叉树，每个节点都是正数，并且每个节点的子节点数量只能为 2 或 0。如果一个节点有两个子节点的话，那么这个节点的值不大于它的子节点的值。 

给出这样的一个二叉树，你需要输出所有节点中的第二小的值。如果第二小的值不存在的话，输出 -1 。
```
示例 1:

输入: 
    2
   / \
  2   5
     / \
    5   7

输出: 5
说明: 最小的值是 2 ，第二小的值是 5 。
```
```
示例 2:

输入: 
    2
   / \
  2   2

输出: -1
说明: 最小的值是 2, 但是不存在第二小的值。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/second-minimum-node-in-a-binary-tree)

### 解
1. 暴力遍历二叉树 + 排序
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findSecondMinimumValue = function(root) {
    let res = fn(root)
    function fn(node, arr = []){ // 以后还是用这种方法遍历二叉树吧
        if(!node) return arr
        if(!arr.includes(node.val)) arr.push(node.val)
        if(node.val > root.val) return arr // 如果node.val大于root.val,在 node 处的子树中的所有值都至少是 node.val，因此在该子树中不存在第二个最小值。因此，我们不需要搜索这个子树。
        fn(node.left, arr)
        fn(node.right, arr)
        return arr
    }
    res.sort((a, b)=> a - b)
    return res[1] || -1
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了71.43%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了76.92%的用户
```

> 疑惑: [2,5,3] 为什么是5，不是3呢？第二小不是3吗？题目也没说是二叉搜索树之类的。所以在我的解法里加了一个排序操作。
