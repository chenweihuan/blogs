## 563 - 二叉树的坡度

给定一个二叉树，计算整个树的坡度。

一个树的节点的坡度定义即为，该节点左子树的结点之和和右子树结点之和的差的绝对值。空结点的的坡度是0。

整个树的坡度就是其所有节点的坡度之和。
```
示例:

输入: 
         1
       /   \
      2     3
输出: 1
解释: 
结点的坡度 2 : 0
结点的坡度 3 : 0
结点的坡度 1 : |2-3| = 1
树的坡度 : 0 + 0 + 1 = 1
```
注意:

任何子树的结点的和不会超过32位整数的范围。
坡度的值不会超过32位整数的范围。

### 解
1. 双重递归
```js
var findTilt = function(root, sum,) {
    let res = 0
    function fn(node){
        if(!node) return 0
        let left = getNodeSum(node.left)
        let right = getNodeSum(node.right)
        let diff = Math.abs(left-right)
        res += diff
        fn(node.left)
        fn(node.right)
    }
    function getNodeSum(node){
        if(!node) return 0
        return node.val + getNodeSum(node.left) + getNodeSum(node.right)
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :108 ms, 在所有 JavaScript 提交中击败了29.23%的用户
内存消耗 :37.8 MB, 在所有 JavaScript 提交中击败了54.84%的用户
```

2. 单层递归
```js
var findTilt = function(root) {
    function fn(node, sum=0, p=0){
        if(!node) return [0, 0]
        let left = fn(node.left, sum, p)
        let right = fn(node.right, sum, p)
        sum = node.val + left[0] + right[0]
        p = Math.abs(left[0]-right[0]) + left[1] + right[1]
        return [sum, p]
    }
    return fn(root)[1]
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了80.92%的用户
内存消耗 :39.3 MB, 在所有 JavaScript 提交中击败了6.45%的用户
```

