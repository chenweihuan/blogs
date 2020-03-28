## 897 - 递增顺序查找树
给你一个树，请你 按中序遍历 重新排列树，使树中最左边的结点现在是树的根，并且每个结点没有左子结点，只有一个右子结点。

 
```
示例 ：

输入：[5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \ 
1        7   9

输出：[1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9  
```

提示：

给定树中的结点数介于 1 和 100 之间。
每个结点都有一个从 0 到 1000 范围内的唯一整数值。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/increasing-order-search-tree)

### 解
1. 中序遍历 + 构建新树
```js
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    function fn(node){ // 构建有序数组
        if(!node) return
        fn(node.left)
        res.push(node.val)
        fn(node.right)
    }
    function fns(node, res){ // 构建树
        if(!res.length) return
        node.right = new TreeNode(res.shift())
        fns(node.right, res)
    }
    let res = []
    fn(root)
    let tree = new TreeNode(res.shift())
    fns(tree, res)
    return tree
};
```
```
执行结果：通过
执行用时 :36 ms, 在所有 JavaScript 提交中击败了100.00%的用户
内存消耗 :34 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```

> 不太懂,为什么这样写就双100了???

2. 中序遍历 + 原地更改树结构  
思路:当我们遍历到一个节点时，把它的左孩子设为空，并将其本身作为上一个遍历到的节点的右孩子。
```js
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
    let res = new TreeNode()
    let current = res
    function fn(node){
        if(!node) return
        fn(node.left)
        node.left = null // 先把左孩子置空
        current.right = node
        current = node
        fn(node.right)
    }
    fn(root)
    return res.right
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了94.85%的用户
内存消耗 :34 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
