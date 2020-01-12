## 028 - 实现 strStr()
实现 strStr() 函数。

给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
```
示例 1:
输入: haystack = "hello", needle = "ll"
输出: 2
```
```
示例 2:
输入: haystack = "aaaaa", needle = "bba"
输出: -1
```

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/implement-strstr)


### 解
1. indexOf???
```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    return haystack.indexOf(needle)
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了60.16%的用户
内存消耗 :34.2 MB, 在所有 JavaScript 提交中击败了37.95%的用户
```

2. substring截取字符串指定长度的子串
```js
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (!haystack && !needle) return 0
    for (let i = 0; i < haystack.length; i++) {
        if (haystack.substring(i, i + needle.length) === needle) return i
    }
    return -1
};
```
```
执行结果：通过
执行用时 :60 ms, 在所有 JavaScript 提交中击败了89.73%的用户
内存消耗 :36.3 MB, 在所有 JavaScript 提交中击败了5.05%的用户
```