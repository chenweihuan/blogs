## 070 - 爬楼梯
假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

注意：给定 n 是一个正整数。
```
示例 1：

输入： 2
输出： 2
解释： 有两种方法可以爬到楼顶。
1.  1 阶 + 1 阶
2.  2 阶
```
```
示例 2：

输入： 3
输出： 3
解释： 有三种方法可以爬到楼顶。
1.  1 阶 + 1 阶 + 1 阶
2.  1 阶 + 2 阶
3.  2 阶 + 1 阶
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/climbing-stairs)

### 解
1. 递归  
思路：对于到达第n阶楼梯来说，其实就是等于f(n-1)+f(n-2)（倒数第二格+2step 或者 倒数第一个+1step）。和斐波那契数列的求法一样。
```js
/**
 * @param {number} n
 * @return {number}
 */
// 空间换时间
let map = { // 如果某一层楼梯已经算过了，那么就放进map里，这样下次就不用重新算过一次了
  1: 1,
  2: 2
}
var climbStairs = function (n) {
  if (!map[n]) map[n] = climbStairs(n - 1) + climbStairs(n - 2)
  return map[n]
};

// 错误解法：直接使用递归
// 执行到45时，递归太深，会溢出
var climbStairs = function(n) {
    if(n===1) return 1
    if(n===2) return 2
    return climbStairs(n-1) + climbStairs(n-2)
};
```
```
执行结果：通过
执行用时 :52 ms, 在所有 JavaScript 提交中击败了97.18%的用户
内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了47.05%的用户
```

2. 非递归  
思路：把到1,2,3....n阶楼梯的方法都算出来，放进一个数组里存起来。
```js
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function (n) {
  let a = 1, b = 2
  let res = [a, b]
  while (res.length < n) {
    [a, b] = [b, a + b]
    res.push(b)
  }
  return res[n - 1]
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了35.89%的用户
内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了48.48%的用户
```