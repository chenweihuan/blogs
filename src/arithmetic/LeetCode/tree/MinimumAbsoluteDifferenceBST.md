## 530 - 二叉搜索树的最小绝对差
给你一棵所有节点为非负值的二叉搜索树，请你计算树中任意两节点的差的绝对值的最小值。

示例：

输入：
```
   1
    \
     3
    /
   2

输出：
1
```
解释：
最小绝对差为 1，其中 2 和 1 的差的绝对值为 1（或者 2 和 3）。

### 解
1. 中序遍历+for循环  
思路：因为是二叉搜素树，所以中序遍历的结果一定是有序的数组。再for遍历一下数组，即可找出最小差值。
```js
var getMinimumDifference = function(root) {
    let arr = []
    function fn(node){
        if(!node) return
        fn(node.left)
        arr.push(node.val)
        fn(node.right)
    }
    fn(root)
    let min = -1
    for(let i = 0;i < arr.length-1; i++){
        let diff = arr[i+1]-arr[i]
        min = min < 0? diff : Math.min(diff, min)
    }
    return min
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了94.16%的用户
内存消耗 :38.4 MB, 在所有 JavaScript 提交中击败了43.48%的用户
```
