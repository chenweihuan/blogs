## 235 - 二叉搜索树的最近公共祖先
给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉搜索树:  root = [6,2,8,0,4,7,9,null,null,3,5]

示例 1:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
输出: 6 
解释: 节点 2 和节点 8 的最近公共祖先是 6。
示例 2:

输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
输出: 2
解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree)

### 解
1. 递归  
思路：结合二叉搜索树的特点，如果root.val比p和q都小，那么最近公共祖先肯定在root.right；如果root.val比p和q都大，那么最近公共祖先肯定在root.left；如果root.val比p大，比q小，那么最近公共祖先就是root。
```js
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root.val > p.val && root.val > q.val){
        return lowestCommonAncestor(root.left, p, q)
    }
    if(root.val < p.val && root.val < q.val){
        return lowestCommonAncestor(root.right, p, q)
    }
    return root
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了70.61%的用户
内存消耗 :43.5 MB, 在所有 JavaScript 提交中击败了94.55%的用户
```

2. 迭代  
```js
var lowestCommonAncestor = function(root, p, q) {
    while(root){
        if(root.val > p.val && root.val > q.val){
            root = root.left
            continue
        }
        if(root.val < p.val && root.val < q.val){
            root = root.right
            continue
        }
        return root
    }
    return root
};
```
```
执行结果：通过
执行用时 :96 ms, 在所有 JavaScript 提交中击败了52.74%的用户
内存消耗 :43.6 MB, 在所有 JavaScript 提交中击败了82.73%的用户
```
