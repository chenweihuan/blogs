## 009 - 回文数
判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。  

示例 1:
```
输入: 121
输出: true
```
示例 2:
```
输入: -121
输出: false
解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
```
示例 3:
```
输入: 10
输出: false
解释: 从右向左读, 为 01 。因此它不是一个回文数。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/palindrome-number)

### 解
1. 既然是回文数，那么转为string，再reverse一下，判断一下是否相等即可。
* 注意：
  * reverse()是数组的方法，需要将x转为数组再使用reverse方法。
  * Number('0121')输出的是121，Number函数会将前面无意义的0去掉，可解决示例3的情况。
```js
/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x === 0) return true
  return Number(x.toString().split('').reverse().join('')) === x
};
```

2. 不使用reverse函数试试吧，转化为string后，使用一个for循环，检查```str[i] ?=== str[len-i-1]```。
```js
/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x === 0) return true
  let xToString = x.toString(),
    len = xToString.length
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (xToString[i] !== xToString[len - i - 1]) return false
  }
  return true
};
```

3. 和[007 - 正数反转](./reverseInt.md)类似，使用数学运算的方法。
* 注意：
  * 获取num的个位数：```num%10```
  * 把一个数字添加到最后一位：```num*10 + x```
```js
/**
* @param {number} x
* @return {boolean}
*/
var isPalindrome = function (x) {
  if (x < 0) return false
  if (x === 0) return true
  let res = 0
  let a = x
  while (x !== 0) {
    res = res * 10 + x % 10 // 把x的个位数添加到res的末尾
    x = Math.floor(x / 10) // 去除x的个位数
  }
  return a === res
};
```
