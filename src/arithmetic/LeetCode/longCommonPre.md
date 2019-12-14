## 014 - 最长公共前缀
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

```
示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
```
```
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。
```
说明: 所有输入只包含小写字母 a-z 。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/longest-common-prefix)

### 解
1. 暴力拆解
思路：先把数组的第一个元素取出来，外层for循环遍历此元素，内层for循环遍历数组剩余元素。如果相同，继续循环，直至结束；如果不相同，则可以返回res。
```js
/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  let res = ''
  if (strs.length === 0) return res // strs为空时，返回空字符串""
  let str1 = strs.shift()
  for (let i = 0; i < str1.length; i++) { // 遍历首元素
    for (let j = 0; j < strs.length; j++) { 
      if (str1[i] !== strs[j][i]) return res // 取首元素字符和数组剩余元素同位置的字符对比
    }
    res += str1[i]
  }
  return res
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 javascript 提交中击败了 89.09% 的用户
内存消耗 :35.6 MB, 在所有 javascript 提交中击败了 19.53% 的用户
```

2. 使用reduce累加器  
思路：reduce就是一个累加器，把数组的所有元素一个一个的进行函数里面的操作，把结果保存下来继续和下一个元素进行操作。既然这样，先让第一二两个元素先比较，得到最长公共前缀后，再继续和第三个元素比较...最后就能得出所有数组的最长公共前缀了。
```js
/**
* @param {string[]} strs
* @return {string}
*/
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return '' // strs为空时，返回空字符串""
  return strs.reduce((current, next) => {
    let i = 0
    while (current[i] && next[i] && current[i] === next[i]) {
      i++
    }
    return current.slice(0, i)
  })
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 javascript 提交中击败了 77.58% 的用户
内存消耗 :35.6 MB, 在所有 javascript 提交中击败了 19.60% 的用户
```