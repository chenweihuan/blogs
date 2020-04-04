## 118 - 杨辉三角
给定一个非负整数 numRows，生成杨辉三角的前 numRows 行。

在杨辉三角中，每个数是它左上方和右上方的数的和。
```
示例:

输入: 5
输出:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/pascals-triangle)

### 解
1. 递归
```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    function fn(i, j){
        let r = (j==0 || i==j) 
            ? 1
            : (resMap[`${i-1},${j}`] || fn(i-1, j)) + (resMap[`${i-1},${j-1}`] || fn(i-1, j-1))
        resMap[`${i},${j}`] = r
        return r
    }
    let res = [], resMap = {}
    for(let i=0;i<numRows;i++){
        let a = []
        for(let j=0;j<=i;j++) a.push(fn(i,j))
        res.push(a)
    }
    return res
};
```
```
执行结果：通过
执行用时 :108 ms, 在所有 JavaScript 提交中击败了5.27%的用户
内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了81.82%的用户
```

2. 非递归
```js
/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let res = [], resMap = {}
    for(let i=0;i<numRows;i++){
        let a = []
        for(let j=0;j<=i;j++){
            (j==0 || i==j) 
                ? a.push(1)
                : a.push(res[i-1][j-1] + res[i-1][j])
        }
        res.push(a)
    }
    return res
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了63.96%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了89.90%的用户
```