## 509 - 斐波那契数
斐波那契数，通常用 F(n) 表示，形成的序列称为斐波那契数列。该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

F(0) = 0,   F(1) = 1  
F(N) = F(N - 1) + F(N - 2), 其中 N > 1.  
给定 N，计算 F(N)。
 
```
示例 1：

输入：2
输出：1
解释：F(2) = F(1) + F(0) = 1 + 0 = 1.
```
```
示例 2：

输入：3
输出：2
解释：F(3) = F(2) + F(1) = 1 + 1 = 2.
```
```
示例 3：

输入：4
输出：3
解释：F(4) = F(3) + F(2) = 2 + 1 = 3.
```

提示：

0 ≤ N ≤ 30

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/fibonacci-number)

### 解
1. 递归：如果N大于45，递归太深会溢出。
```js
var fib = function(N) {
    if(N==0) return 0
    if(N==1) return 1
    return fib(N-1) + fib(N-2)
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了33.36%的用户
内存消耗 :34.5 MB, 在所有 JavaScript 提交中击败了32.00%的用户
```

2. 具有缓存的递归
```js
let resMap = {
    0:0,
    1:1
}
var fib = function(N) {
    if(resMap[N] == undefined) resMap[N] = fib(N-1) + fib(N-2)
    return resMap[N]
};
```
```
执行结果：通过
执行用时 :40 ms, 在所有 JavaScript 提交中击败了99.96%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了84.00%的用户
```

3. 尾递归优化
```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N, r1=0, r2=1) {
    if(N<=0) return r1
    return fib(N-1, r2, r1+r2)
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了36.98%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了84.00%的用户
```

4. 非递归
```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let res = [0, 1], a = 0, b = 1
    while(res.length-1 < N){
        [a,b] = [b, a+b]
        res.push(b)
    }
    return res[N]
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了52.72%的用户
内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了84.00%的用户
```

5. 公式法
<div align="center"><img src="https://pic.leetcode-cn.com/d5e05b3f46910d4bf79d3b235e5a3d7803b63bce092c6c20a53c16d228e33113.png"/></div>

```js
/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    let goldenRatio = (1 + Math.sqrt(5)) / 2
    return Math.round(Math.pow(goldenRatio, N)/ Math.sqrt(5));
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了67.40%的用户
内存消耗 :33.9 MB, 在所有 JavaScript 提交中击败了84.00%的用户
```
