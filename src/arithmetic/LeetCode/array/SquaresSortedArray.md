## 977 - 有序数组的平方
给定一个按非递减顺序排序的整数数组 A，返回每个数字的平方组成的新数组，要求也按非递减顺序排序。
```
示例 1：

输入：[-4,-1,0,3,10]
输出：[0,1,9,16,100]
```
```
示例 2：

输入：[-7,-3,2,3,11]
输出：[4,9,9,49,121]
``` 

提示：

1 <= A.length <= 10000  
-10000 <= A[i] <= 10000  
A 已按非递减顺序排序。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/squares-of-a-sorted-array)

### 解
1. map + sort
```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let res =A.map(v=>v*v)
    res.sort((a,b)=>a-b)
    return res
};
```
```
执行结果：通过
执行用时 :164 ms, 在所有 JavaScript 提交中击败了70.31%的用户
内存消耗 :44.2 MB, 在所有 JavaScript 提交中击败了66.67%的用户
```

2. 双指针
```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
    let res = []
    let j = 0
    while(j < A.length && A[j] < 0){
        j++
    }
    let i = j-1
    while(i>=0 && j<A.length){
        let left = A[i]*A[i]
        let right = A[j]*A[j]
        if(left < right){
            res.push(left)
            i--
        }else{
            res.push(right)
            j++
        }
    }
    while(i>=0){
        res.push(A[i]*A[i])
        i--
    }
    while(j<A.length){
        res.push(A[j]*A[j])
        j++
    }
    return res
};
```
```
执行结果：通过
执行用时 :124 ms, 在所有 JavaScript 提交中击败了96.09%的用户
内存消耗 :42.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```