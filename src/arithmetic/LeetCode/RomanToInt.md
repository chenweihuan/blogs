## 013 - 罗马数字转整数
罗马数字包含以下七种字符: I， V， X， L，C，D 和 M。
```
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。  
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。   
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。 

给定一个罗马数字，将其转换成整数。输入确保在 1 到 3999 的范围内。  

示例 1:
```
输入: "III"
输出: 3
```
示例 2:
```
输入: "IV"
输出: 4t
```
示例 3:
```
输入: "IX"
输出: 9
```
示例 4:
```
输入: "LVIII"
输出: 58
解释: L = 50, V= 5, III = 3.
```
示例 5:
```
输入: "MCMXCIV"
输出: 1994
解释: M = 1000, CM = 900, XC = 90, IV = 4.
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/roman-to-integer)

### 解
1. 暴力拆解  
思路：如果符合特殊规则，就把数字变成负数即可。例如"IV"相当于```-1+5```，"VI"相当于```5+1```：
```js
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let numMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  }
  let res = 0
  for (let i = 0; i < s.length; i++) {
    let str = s[i], num = 0
    if (str === 'I') {
      num = (s[i + 1] === 'V' || s[i + 1] === 'X') ? -numMap[str] : numMap[str]
    } else if (str === 'X') {
      num = (s[i + 1] === 'L' || s[i + 1] === 'C') ? -numMap[str] : numMap[str]
    } else if (str === 'C') {
      num = (s[i + 1] === 'D' || s[i + 1] === 'M') ? -numMap[str] : numMap[str]
    } else {
      num = numMap[str]
    }
    res += num
  }
  return res
};
```
```
执行结果：通过
执行用时 : 204 ms, 在所有 javascript 提交中击败了 33.49% 的用户
内存消耗 : 39.6 MB, 在所有 javascript 提交中击败了 89.09% 的用户
```

2. Map
思路：利用Object，把正常情况和异常情况都一一列举出来。在for循环里，正常情况的话i++，异常情况```i += 2```。
```js
/**
* @param {string} s
* @return {number}
*/
var romanToInt = function (s) {
  let numMap = {
    // 正常情况
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,

    // 异常情况
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900
  }
  let res = 0
  for (let i = 0; i < s.length;) {
    if (numMap[s[i] + s[i + 1]]) { // 命中异常情况
      res += numMap[s[i] + s[i + 1]]
      i += 2
    } else { // 正常情况
      res += numMap[s[i]]
      i++
    }
  }
  return res
};
```
```
执行结果：通过
执行用时 : 164 ms, 在所有 javascript 提交中击败了 77.19% 的用户
内存消耗 : 40.7 MB, 在所有 javascript 提交中击败了 29.72% 的用户
```