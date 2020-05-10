## 896 - 单调数列
如果数组是单调递增或单调递减的，那么它是单调的。

如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。

当给定的数组 A 是单调数组时返回 true，否则返回 false。

 
```
示例 1：

输入：[1,2,2,3]
输出：true
```
```
示例 2：

输入：[6,5,4,4]
输出：true
```
```
示例 3：

输入：[1,3,2]
输出：false
```
```
示例 4：

输入：[1,2,4,5]
输出：true
```
```
示例 5：

输入：[1,1,1]
输出：true
```

提示：

1 <= A.length <= 50000  
-100000 <= A[i] <= 100000

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/monotonic-array)

### 解
1. 常规拆解
```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    let flag
    for(let i=0;i<A.length-1;i++){
        if(!flag){
            if(A[i] > A[i+1]){
                flag = 1
            }else if(A[i] < A[i+1]){
                flag = 2
            }
            continue
        }
        if(flag === 1 && A[i] < A[i+1]) return false
        if(flag === 2 && A[i] > A[i+1]) return false
    }
    return true
};
```
```
执行结果：通过
执行用时 :100 ms, 在所有 JavaScript 提交中击败了37.50%的用户
内存消耗 :40.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```

2. 两次遍历
```js
/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    function increasing(){
        for(let i=0;i<A.length-1;i++){
            if(A[i] > A[i+1]) return false
        }
        return true
    }
    function decreasing(){
        for(let i=0;i<A.length-1;i++){
            if(A[i] < A[i+1]) return false
        }
        return true
    }
    return increasing() || decreasing()
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了86.11%的用户
内存消耗 :40.5 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
