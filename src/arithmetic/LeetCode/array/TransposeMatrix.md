## 867 - 转置矩阵
给定一个矩阵 A， 返回 A 的转置矩阵。

矩阵的转置是指将矩阵的主对角线翻转，交换矩阵的行索引与列索引。
```
示例 1：

输入：[[1,2,3],[4,5,6],[7,8,9]]
输出：[[1,4,7],[2,5,8],[3,6,9]]
```
```
示例 2：

输入：[[1,2,3],[4,5,6]]
输出：[[1,4],[2,5],[3,6]]
```

提示：

1 <= A.length <= 1000  
1 <= A[0].length <= 1000

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/transpose-matrix)

### 解
1. 常规解法
```js
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
    const res = Array.from({length: A[0].length}, ()=> [])
    for(let i=0;i<A.length;i++){
        for(let j=0;j<A[0].length;j++){
            res[j][i] = A[i][j]
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了36.97%的用户
内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```