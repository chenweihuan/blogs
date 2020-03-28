## 783 - 二叉搜索树结点最小距离
给定一个二叉搜索树的根结点 root，返回树中任意两节点的差的最小值。

```
示例：

输入: root = [4,2,6,1,3,null,null]
输出: 1
解释:
注意，root是树结点对象(TreeNode object)，而不是数组。

给定的树 [4,2,6,1,3,null,null] 可表示为下图:

          4
        /   \
      2      6
     / \    
    1   3  

最小的差值是 1, 它是节点1和节点2的差值, 也是节点3和节点2的差值。
```

注意：

二叉树的大小范围在 2 到 100。  
二叉树总是有效的，每个节点的值都是整数，且不重复。  
本题与 530：https://leetcode-cn.com/problems/minimum-absolute-difference-in-bst/ 相同

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/minimum-distance-between-bst-nodes)

### 解
1. 中序遍历 + reduce寻找最小差值
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let res = []
    function fn(node){
        if(!node) return
        fn(node.left)
        res.push(node.val)
        fn(node.right)
    }
    fn(root)
    return res.reduce((min, val, i)=>{
        if(i === res.length-1) return min
        return Math.min(min, res[i+1] - res[i])
    }, Number.MAX_VALUE) //  Number.MAX_VALUE：最大值。确保第一次遍历的差值，否则res的第一个元素会被作为首个min值
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了80.43%的用户
内存消耗 :34.1 MB, 在所有 JavaScript 提交中击败了89.66%的用户
```

2. 中序遍历 + 递归里获取最小差值  
思路：既然中序遍历是按照从小到大的顺序来的，reduce的作用不就是从小到大做一次遍历取到最小差值吗？那么reduce的操作也可以在中序遍历的递归里做呀。
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let prev = null, min = Number.MAX_VALUE
    function fn(node){
        if(!node) return
        fn(node.left)
        if(prev) min = Math.min(min, node.val - prev.val)
        prev = node
        fn(node.right)
    }
    fn(root)
    return min
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了97.10%的用户
内存消耗 :34.6 MB, 在所有 JavaScript 提交中击败了65.52%的用户
```
