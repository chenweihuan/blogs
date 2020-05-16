## 941 - 有效的山脉数组
给定一个整数数组 A，如果它是有效的山脉数组就返回 true，否则返回 false。

让我们回顾一下，如果 A 满足下述条件，那么它是一个山脉数组：

1. A.length >= 3
2. 在 0 < i < A.length - 1 条件下，存在 i 使得：  
A[0] < A[1] < ... A[i-1] < A[i]
A[i] > A[i+1] > ... > A[A.length - 1]  

```
示例 1：

输入：[2,1]
输出：false
```
```
示例 2：

输入：[3,5,5]
输出：false
```
```
示例 3：

输入：[0,3,2,1]
输出：true
```

提示：

0 <= A.length <= 10000  
0 <= A[i] <= 10000 

### 解
1. 双指针  
思路：首先从左到右遍历，得到高峰值；接着从右到左遍历，也得到高峰值。判断两个高峰值是否相等即可。
```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var validMountainArray = function(A) {
    if(A.length < 3) return false
    let left,right
    for(let i=0;i<A.length;i++){
        if(A[i] === A[i+1]) return false
        if(A[i] > A[i+1]){
            left = i
            break
        }
    }
    for(let i=A.length-1;i>0;i--){
        if(A[i] === A[i-1]) return false
        if(A[i] > A[i-1]){
            right = i
            break
        }
    }
    return left === right
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了57.04%的用户
内存消耗 :37.1 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
