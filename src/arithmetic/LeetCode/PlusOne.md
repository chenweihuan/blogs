## 066 - 加一
给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。

最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。

你可以假设除了整数 0 之外，这个整数不会以零开头。
```
示例 1:

输入: [1,2,3]
输出: [1,2,4]
解释: 输入数组表示数字 123。
```
```
示例 2:

输入: [4,3,2,1]
输出: [4,3,2,2]
解释: 输入数组表示数字 4321。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/plus-one)

### 解
1. 大整数加法  
解：当作大整数加法来做，相当于一个大整数+1。tip：不可以使用```String(Number(digits.join('')) + 1).split('')```，因为JavaScript 能表示并进行精确算术运算的整数范围为：[-253-1，253-1]（9007199254740991,9007199254740991）。
```js
/**
* @param {number[]} digits
* @return {number[]}
*/
var plusOne = function (digits) {
  let res = [], add = 0, first = true
  while (digits.length) {
    let pop = digits.pop()
    let num = pop + add
    if (first) {
      num += 1
      first = false
    }
    res.unshift(num % 10)
    add = num == 10 ? 1 : 0
  }
  if (add) res.unshift(add)
  return res
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了88.83%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了48.19%的用户
```

2. 大整数加法+特殊情况特殊处理  
解法：采用大整数加法之后，特殊情况其实就只有一种，那就是大整数的末尾是9，加一之后要往前进一位。那么就把尾部的9抽离出来。例如[1,2,3,9,9,9]+1就是[1,2,3+1]+[0,0,0]。
```js
/**
* @param {number[]} digits
* @return {number[]}
*/
var plusOne = function (digits) {
  let nineNum = 0
  while (digits.length && digits[digits.length - 1] == 9) {
    digits.pop()
    nineNum++
  }
  // digits.length === 0时，就是数组元素均为9的情况，例如[9,9,9]
  digits.length > 0 ? (digits[digits.length - 1] += 1) : digits = [1] 
  let nineArr = Array.from({ length: nineNum }, () => 0)
  return digits.concat(nineArr)
  // 数组后面添加0，也可如下操作
  // for(let i=0;i<nineNum;i++) digits.push(0)
  // return digits
};
```
```
执行结果：通过
执行用时 :52 ms, 在所有 JavaScript 提交中击败了99.10%的用户
内存消耗 :33.7 MB, 在所有 JavaScript 提交中击败了67.60%的用户
```
