## 119 - 杨辉三角 II
给定一个非负索引 k，其中 k ≤ 33，返回杨辉三角的第 k 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。
```
示例:

输入: 3
输出: [1,3,3,1]
```

进阶：

你可以优化你的算法到 O(k) 空间复杂度吗？

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/pascals-triangle-ii)

### 解
1. 常规解法
```js
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let = res = []
    for(let i=0;i<=rowIndex;i++){
        let a = []
        for(let j=0;j<=i;j++){
            (j === 0 || i === j)
                ? a.push(1)
                : a.push(res[i-1][j] + res[i-1][j-1])
        }
        res.push(a)
    }
    return res[rowIndex]
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了71.02%的用户
内存消耗 :34.7 MB, 在所有 JavaScript 提交中击败了30.56%的用户
```
