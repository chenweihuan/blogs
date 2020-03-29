## 1022 - 从根到叶的二进制数之和
给出一棵二叉树，其上每个结点的值都是 0 或 1 。每一条从根到叶的路径都代表一个从最高有效位开始的二进制数。例如，如果路径为 0 -> 1 -> 1 -> 0 -> 1，那么它表示二进制数 01101，也就是 13 。

对树上的每一片叶子，我们都要找出从根到该叶子的路径所表示的数字。

以 10^9 + 7 为模，返回这些数字之和。

 
```
示例：
输入：[1,0,1,0,1,0,1]
输出：22
解释：(100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
```

提示：

树中的结点数介于 1 和 1000 之间。  
node.val 为 0 或 1 。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/sum-of-root-to-leaf-binary-numbers)

### 解
1. 递归 + 求和  
思路：把当前节点拼接的二进制传给下一个节点，到了叶子节点之后，就相加即可。
```js
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function(root) {
    function fn(node, str = ''){
        if(!node) return
        str += node.val
        if(!node.left && !node.right) sum += parseInt(str, 2) // parseInt(num, 2)可以把二进制转为十进制
        fn(node.left, str)
        fn(node.right, str)
    }
    let res = [], sum = 0
    fn(root)
    return sum
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了82.50%的用户
内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了16.67%的用户
```
