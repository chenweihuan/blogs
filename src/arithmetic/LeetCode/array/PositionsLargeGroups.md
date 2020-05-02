## 830 - 较大分组的位置
在一个由小写字母构成的字符串 S 中，包含由一些连续的相同字符所构成的分组。

例如，在字符串 S = "abbxxxxzyy" 中，就含有 "a", "bb", "xxxx", "z" 和 "yy" 这样的一些分组。

我们称所有包含大于或等于三个连续字符的分组为较大分组。找到每一个较大分组的起始和终止位置。

最终结果按照字典顺序输出。
```
示例 1:

输入: "abbxxxxzzy"
输出: [[3,6]]
解释: "xxxx" 是一个起始于 3 且终止于 6 的较大分组。
```
```
示例 2:

输入: "abc"
输出: []
解释: "a","b" 和 "c" 均不是符合要求的较大分组。
```
```
示例 3:

输入: "abcdddeeeeaabbbcd"
输出: [[3,5],[6,9],[12,14]]
```
说明:  1 <= S.length <= 1000

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/positions-of-large-groups)

### 解
1. 滑动窗口法  
思路：变量j记录每个窗口的开始？？？
```js
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let j = 0
    let res = []
    for(let i=0;i<S.length;i++){
        if(S[i] !== S[i-1]){ // 如果前后相邻元素不等，则移动j
            if(i-j >= 3) res.push([j, i-1])
            j=i
        }
        if(i === S.length-1 && i-j+1 >=3) res.push([j, i]) // 处理"abccc"的情况
    }
    return res
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了49.51%的用户
内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
看了题解，简化一下自己的思路：
```js
/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function(S) {
    let j = 0
    let res = []
    for(let i=0;i<S.length;i++){
        if(S[i] !== S[i+1] || i === S.length-1){
            if(i-j+1 >= 3) res.push([j, i])
            j=i+1
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了66.99%的用户
内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```