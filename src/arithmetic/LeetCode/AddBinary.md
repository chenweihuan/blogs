## 067 - 二进制求和
给定两个二进制字符串，返回他们的和（用二进制表示）。

输入为非空字符串且只包含数字 1 和 0。
```
示例 1:

输入: a = "11", b = "1"
输出: "100"
```
```
示例 2:

输入: a = "1010", b = "1011"
输出: "10101"
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/add-binary)

### 解
1. 大整数加法求解  
思路：不要把他当成二进制，看成两个大整数相加来求解即可，只不过这两个大整数只有0和1而已。
```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  while (a.length > b.length) b = '0' + b
  while (a.length < b.length) a = '0' + a
  a = a.split('')
  b = b.split('')
  let addOne = 0, result = ''
  while (a.length) {
    let num1 = Number(a.pop())
    let num2 = Number(b.pop())
    let res = num1 + num2 + addOne
    addOne = res > 1 ? 1 : 0
    result = res % 2 + '' + result
  }
  if (addOne) result = '1' + result
  return result
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了95.65%的用户
内存消耗 :36.1 MB, 在所有 JavaScript 提交中击败了33.82%的用户
```