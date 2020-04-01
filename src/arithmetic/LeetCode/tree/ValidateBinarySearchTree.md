## 98 - 验证二叉搜索树
给定一个二叉树，判断其是否是一个有效的二叉搜索树。

假设一个二叉搜索树具有如下特征：

节点的左子树只包含小于当前节点的数。  
节点的右子树只包含大于当前节点的数。   
所有左子树和右子树自身必须也是二叉搜索树。
```
示例 1:

输入:
    2
   / \
  1   3
输出: true
```
```
示例 2:

输入:
    5
   / \
  1   4
     / \
    3   6
输出: false
解释: 输入为: [5,1,4,null,null,3,6]。
     根节点的值为 5 ，但是其右子节点值为 4 。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/validate-binary-search-tree)

### 解
1. 中序遍历 + 比较
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    let res = true, prev
    function fn(node){
        if(!node) return
        fn(node.left)
        if(node.val <= prev) res = false
        prev = node.val
        fn(node.right)
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了39.34%的用户
内存消耗 :37.6 MB, 在所有 JavaScript 提交中击败了61.33%的用户
```

2. 递归
```js
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min = -Infinity, max = Infinity) {
    if(!root) return true
    if(root.val <= min || root.val >= max) return false
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max) 
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了72.49%的用户
内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了97.33%的用户
```

3. 迭代  
思路：通过使用队列，上面的递归法可以转化为迭代法。
```js
var isValidBST = function(root) {
    function add(node, h, s){ // 给每个节点添加 对应的最值
        q.push(node)
        higher.push(h)
        short.push(s)
    }
    let q = [root], higher = [null], short = [null]
    while(q.length){
        let curr = q.shift()
        let h = higher.shift()
        let s = short.shift()
        if(curr){
            if(s !== null && curr.val <= s) return false
            if(h !== null && curr.val >= h) return false
            add(curr.left, curr.val, s)
            add(curr.right, h, curr.val)
        }
    }
    return true
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了57.60%的用户
内存消耗 :38.3 MB, 在所有 JavaScript 提交中击败了12.00%的用户
```