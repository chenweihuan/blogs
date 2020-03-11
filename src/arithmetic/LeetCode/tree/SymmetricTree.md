## 101 - 对称二叉树
给定一个二叉树，检查它是否是镜像对称的。

例如，二叉树 [1,2,2,3,4,4,3] 是对称的。
```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```
但是下面这个 [1,2,2,null,3,null,3] 则不是镜像对称的:
```
    1
   / \
  2   2
   \   \
   3    3
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/symmetric-tree)

### 解
1. 递归  
思路：还是用二叉树的套路解法，把当前节点要做的事做好，剩下的就交给递归。
```js
function fn(left,right){
    if(left == null && right == null)return true
    if(left == null || right == null) return false
    if(left.val !== right.val) return false
    return fn(left.left,right.right) && fn(left.right,right.left)
}
var isSymmetric = function(root) {
    return fn(root,root)
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了66.34%的用户
内存消耗 :35.4 MB, 在所有 JavaScript 提交中击败了90.19%的用户
```

2. 递归+比较字符串  
思路：分别遍历出左右节点，左节点按正常顺序 [根左右] 遍历出来，右节点按相反顺序 [跟右左] 遍历出来，最后比较结果字符串即可啦。
```js
function each(node, reverse=false){
    let res = ''
    function fn(root){
        res+= `${root?root.val:'null'}`
        if(root==null)return
        if(reverse){
            fn(root.left)
            fn(root.right)
        }else{
            fn(root.right)
            fn(root.left)
        }
    }
    fn(node)
    return res

}
var isSymmetric = function(root) {
    if(!root) return true
    return each(root.left) === each(root.right,true)
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了97.94%的用户
内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了49.89%的用户
```
