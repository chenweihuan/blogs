## 038 - 外观数列
「外观数列」是一个整数序列，从数字 1 开始，序列中的每一项都是对前一项的描述。前五项如下：
```
1.     1
2.     11
3.     21
4.     1211
5.     111221
1 被读作  "one 1"  ("一个一") , 即 11。
11 被读作 "two 1s" ("两个一"）, 即 21。
21 被读作 "one 2",  "one 1" （"一个二" ,  "一个一") , 即 1211。
```

给定一个正整数 n（1 ≤ n ≤ 30），输出外观数列的第 n 项。

注意：整数序列中的每一项将表示为一个字符串。
```
示例 1:

输入: 1
输出: "1"
解释：这是一个基本样例。
```
```
示例 2:

输入: 4
输出: "1211"
解释：当 n = 3 时，序列是 "21"，其中我们有 "2" 和 "1" 两组，"2" 可以读作 "12"，也就是出现频次 = 1 而 值 = 2；类似 "1" 可以读作 "11"。所以答案是 "12" 和 "11" 组合在一起，也就是 "1211"。
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/count-and-say)

> 今天是2020.01.26，大年初二，因为新型冠状病毒的传播，我们家所有外出或探亲的活动都取消了。希望大家都平平安安，开开心心的。万众一心，抗击病毒！

### 解
1. 递归  
解法类似与斐波数列，f(n) = fn(f(n-1))，fn函数是固定的。假设f(n-1)是已知的，通过fn函数对f(n-1)做处理即可。
```js
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1' // 如果是1，就直接返回1
  let pre = countAndSay(n - 1) // 先获取前一项的值
  let len = 1
  let str = ''
  for (let i = 0; i < pre.length; i++) {
    if (pre[i] === pre[i + 1]) {
      len++
    } else {
      str = str + len + pre[i]
      len = 1
    }
  }
  return str
};
```

```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了32.36%的用户
内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了65.15%的用户
```
