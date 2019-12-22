## 020 - 有效的括号
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。

有效字符串需满足：

- 左括号必须用相同类型的右括号闭合。
- 左括号必须以正确的顺序闭合。  
注意空字符串可被认为是有效字符串。
```
示例 1:

输入: "()"
输出: true
```
```
示例 2:

输入: "()[]{}"
输出: true
```
```
示例 3:

输入: "(]"
输出: false
```
```
示例 4:

输入: "([)]"
输出: false
```
```
示例 5:

输入: "{[]}"
输出: true
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/valid-parentheses)

### 解
1. 数组进出栈  
思路：给定一个数组res，遍历字符串s，如果是s[i]是 ```({[``` 其中一个，则添加到res中；在s[i]是 ```)}]``` 时，取出res的最后一个字符，如果和 ```({[``` 没匹配上，那就不是有效字符串；遍历结束后，如果数组res为空，s则是有效字符串，否则不是。
```js
/**
* @param {string} s
* @return {boolean}
*/
var isValid = function (s) {
  let strMap = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let res = []
  for (let i = 0; i < s.length; i++) { // 如果是s[i]是 ```({[``` 其中一个，则添加到res中
    if (!strMap[s[i]]) { 
      res.push(s[i])
      continue
    }
    if (res.pop() !== strMap[s[i]]) return false // 在s[i]是 ```)}]``` 时，取出res的最后一个字符，如果和 ```({[``` 没匹配上，那就不是有效字符串
  }
  return res.length === 0
};
```

```
执行结果：通过
显示详情执行用时 :76 ms, 在所有 javascript 提交中击败了 35.08% 的用户
内存消耗 :34.1 MB, 在所有 javascript 提交中击败了 57.05% 的用户
```

2. 数组进出栈，思路和解法1类似，但用时较少。
```js
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let strMap = {
    '[': ']',
    '(': ')',
    '{': '}'
  }
  let res = []
  for (let i = 0; i < s.length; i++) {
    if (s[i] === strMap[res[res.length - 1]]) { // s[i]是 )}] ,如果和res最后一个元素匹配上，删除数组res最后的一个元素；注：res[-1] === undefined
      res.pop()
    } else { // 其余所有情况都添加s[i]到数组res中，
      res.push(s[i])
    }
  }
  return res.length === 0 // 如果数组res为空，则是有效字符串
};
```
```
执行结果：通过
显示详情执行用时 :56 ms, 在所有 javascript 提交中击败了 97.02% 的用户
内存消耗 :34.5 MB, 在所有 javascript 提交中击败了 49.67% 的用户
```

