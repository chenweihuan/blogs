##  889 - 根据前序和后序遍历构造二叉树
返回与给定的前序和后序遍历匹配的任何二叉树。

 pre 和 post 遍历中的值是不同的正整数。

 

示例：

输入：pre = [1,2,4,5,3,6,7], post = [4,5,2,6,7,3,1]  
输出：[1,2,3,4,5,6,7]
 

提示：

1 <= pre.length == post.length <= 30  
pre[] 和 post[] 都是 1, 2, ..., pre.length 的排列  
每个输入保证至少有一个答案。如果有多个答案，可以返回其中一个。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-postorder-traversal)

### 解
1. 递归  
思路：只有前序和后序遍历的时候，只知道父子关系，并不知道兄弟关系，所以是不能明确构造一个二叉树的。我们令左分支有 LL 个节点。我们知道左分支的头节点为 pre[1]，但它也出现在左分支的后序表示的最后。所以 pre[1] = post[L-1]（因为结点的值具有唯一性），因此 L = post.indexOf(pre[1]) + 1。现在在我们的递归步骤中，左分支由 pre[1 : L+1] 和 post[0 : L] 重新分支，而右分支将由 pre[L+1 : N] 和 post[L : N-1] 重新分支。  
下面解法是N=i，并不是i+1，大同小异，思路一样。
```js
/**
 * @param {number[]} pre
 * @param {number[]} post
 * @return {TreeNode}
 */
var constructFromPrePost = function(pre, post) {
    if(!pre.length) return null
    let tree = new TreeNode(pre[0])
    if(pre.length == 1) return tree
    let N = 0
    for(let i=0;i<post.length;i++){
        if(post[i] === pre[1]){
            N = i
            break
        }
    }
    tree.left = constructFromPrePost(pre.slice(1, N), post.slice(0, N + 1))
    tree.right = constructFromPrePost(pre.slice(N), post.slice(N + 1, post.length - 1))
    return tree
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了62.26%的用户
内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```