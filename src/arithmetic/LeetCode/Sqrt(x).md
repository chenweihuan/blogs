## 069 - x 的平方根
实现 int sqrt(int x) 函数。

计算并返回 x 的平方根，其中 x 是非负整数。

由于返回类型是整数，结果只保留整数的部分，小数部分将被舍去。
```
示例 1:

输入: 4
输出: 2
```
```
示例 2:

输入: 8
输出: 2
说明: 8 的平方根是 2.82842..., 
     由于返回类型是整数，小数部分将被舍去。
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/sqrtx)

### 解
1. Math.sqrt  
思路：一看到题目，最直接粗暴的解法不正是Math.sqrt吗？
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return ~~Math.sqrt(x) // ~~对于正数来说，效果相当于Math.floor
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了86.05%的用户
内存消耗 :35.5 MB, 在所有 JavaScript 提交中击败了77.03%的用户
```

2. 二分法  
思路：提到二分法就想起了快排... 先取中间值，如果中间值的平方大于x，那么解肯定在[0,middle]中；如果中间值的平方大于x，那么解肯定在[middle,x]中；一直二分下去即可。
```js
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x == 0 || x == 1) return x
  let left = 0, right = x
  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    if (middle * middle > x) {
      right = middle
    }
    if (middle * middle < x) {
      left = middle // 注意：不是middle+1，因为解有可能在middle+0.几里面
    }
    if (middle * middle === x) {
      return middle
    }
    if (left === right - 1) return left
  }
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了99.94%的用户
内存消耗 :35.7 MB, 在所有 JavaScript 提交中击败了57.49%的用户
```