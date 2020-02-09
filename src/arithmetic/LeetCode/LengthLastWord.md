## 058 - 最后一个单词的长度
给定一个仅包含大小写字母和空格 ' ' 的字符串 s，返回其最后一个单词的长度。

如果字符串从左向右滚动显示，那么最后一个单词就是最后出现的单词。

如果不存在最后一个单词，请返回 0 。

说明：一个单词是指仅由字母组成、不包含任何空格的 最大子字符串。
 
```
示例1:
输入: "Hello World"
输出: 5
```
```
示例1:
输入: "Hello  "
输出: 5
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/length-of-last-word)

### 解
1. Set
思路：先去掉s尾部的空格，然后使用split方法分割s，取数组最后一个元素即可。 
```js
/**
* @param {string} s
* @return {number}
*/
var lengthOfLastWord = function (s) {
  let res = [...new Set(s.split(' '))]// 处理"ab  "的情况
  if (res.length > 1 && res[res.length - 1] == '') return res[res.length - 2].length
  return res[res.length - 1].length
};
```
```
执行结果：通过
执行用时 :64 ms, 在所有 JavaScript 提交中击败了65.06%的用户
内存消耗 :34 MB, 在所有 JavaScript 提交中击败了31.85%的用户
```

2. 正则去掉s尾部的空格
```js
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s= s.replace(/\s*$/g,'') // \s空格,*{0,}任意次数
  let res = s.split(' ')
  return res[res.length-1].length
};
```
```
执行结果：通过
执行用时 :56 ms, 在所有 JavaScript 提交中击败了94.27%的用户
内存消耗 :33.6 MB, 在所有 JavaScript 提交中击败了92.84%的用户
```