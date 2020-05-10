## 905 - 按奇偶排序数组
给定一个非负整数数组 A，返回一个数组，在该数组中， A 的所有偶数元素之后跟着所有奇数元素。

你可以返回满足此条件的任何数组作为答案。
 
```
示例：

输入：[3,1,2,4]
输出：[2,4,3,1]
输出 [4,2,3,1]，[2,4,1,3] 和 [4,2,1,3] 也会被接受。
```

提示：

1 <= A.length <= 5000  
0 <= A[i] <= 5000

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/sort-array-by-parity)

### 解
1. 双指针？
```js
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let j=0
    for(let i=0;i<A.length;i++){
        if(A[i]%2==0) {
            [A[i], A[j]] = [A[j], A[i]]
            j++
        }
    }
    return A
};
```
```
执行结果：通过
执行用时 :100 ms, 在所有 JavaScript 提交中击败了46.22%的用户
内存消耗 :37.7 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
