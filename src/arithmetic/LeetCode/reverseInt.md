## 007 - 正数反转
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
```
示例 1:
输入: 123
输出: 321  

示例 2:
输入: -123
输出: -321

示例 3:
输入: 120
输出: 21
```
注意:  
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。

来源：[力扣-正数反转](https://leetcode-cn.com/problems/reverse-integer)

### 解
1. 分为正数，负数和0三种情况来处理。
```
/**js
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res
  if (x > 0) { // 正数
    let r = x.toString().split('').reverse() // number需要转为string才能split
    while (r[0] == 0) r.shift() // 去掉前面多余的0
    res = Number(r.join(''))
  } else if (x < 0) { // 负数
    let r = Math.abs(x).toString().split('').reverse()
    while (r[0] == 0) r.shift()
    res = -Number(r.join(''))
  } else { // 0
    res = 0
  }
  return Math.abs(res) > (Math.pow(2, 31) - 1) ? 0 : res // 超出数值范围便返回0
};
```

2. 数学解法
* 个位数 = num % 10
* 把一个数字添加到最后一位的两种方式
  * ```num*10 + x```
  * ```num = ''; num += y%10; Number(num)```
```
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0,
    y = Math.abs(x)
  while (y !== 0) { // 一直除掉y的个位数，直至等于0
    res = res * 10 + y % 10 //把y的个位数添加到res的个位数
    // res += y%10 // 当res=''时，使用字符串相加也可以，最后Number()转化出来就行

    y = Math.floor(y / 10) //除掉y的个位数
    if (Math.abs(res) > (Math.pow(2, 31) - 1)) { // 超出数值范围便返回0
      res = 0
      y = 0
    }
  }
  return x > 0 ? res : -res
};
```