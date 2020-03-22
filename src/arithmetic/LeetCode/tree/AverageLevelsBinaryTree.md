## 637 - 二叉树的层平均值
给定一个非空二叉树, 返回一个由每层节点平均值组成的数组.
```
示例 1:

输入:
    3
   / \
  9  20
    /  \
   15   7
输出: [3, 14.5, 11]
解释:
第0层的平均值是 3,  第1层是 14.5, 第2层是 11. 因此返回 [3, 14.5, 11].
```
注意：

节点值的范围在32位有符号整数范围内。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/average-of-levels-in-binary-tree)

### 解
1. 广度遍历
```js
var averageOfLevels = function(root) {
    let q = [root, null]
    let res = [], sum = 0, num = 0
    while(q.length){
        let current = q.shift()
        if(!current){
            res.push(sum/num)
            num = 0
            sum = 0
            if(q.length)q.push(null)
        }else{
            if(current.left)q.push(current.left)
            if(current.right)q.push(current.right)
            num++
            sum = sum + current.val
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了90.16%的用户
内存消耗 :38.6 MB, 在所有 JavaScript 提交中击败了37.93%的用户
```