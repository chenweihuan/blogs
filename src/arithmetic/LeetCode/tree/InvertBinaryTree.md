## 226 - 翻转二叉树
翻转一棵二叉树。

示例：

输入：
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
输出：
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/invert-binary-tree)

### 解
1. 递归  
思路：老套路。。。
```js
var invertTree = function(root) {
    function fn(node){
        if(!node) return
        [node.left, node.right] = [node.right, node.left]
        invertTree(node.left)
        invertTree(node.right)
    }
    fn(root)
    return root
};
```
```
执行结果：通过
执行用时 :48 ms, 在所有 JavaScript 提交中击败了99.62%的用户
内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了46.77%的用户
```

2. 队列  
思路：使用队列 对二叉树进行广度遍历，在遍历过程把子节点的位置互换。
```js
var invertTree = function(root) {
    if(!root) return root
    const q = [root]
    while(q.length){
        var a = q.shift();
        [a.left, a.right] = [a.right, a.left]
        if(a.left !== null) q.push(a.left);
        if(a.right !== null) q.push(a.right);
    }
    return root
};
```
```
执行结果：通过
执行用时 :52 ms, 在所有 JavaScript 提交中击败了98.50%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了49.68%的用户
```