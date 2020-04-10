## 1287 - 有序数组中出现次数超过25%的元素

给你一个非递减的 有序 整数数组，已知这个数组中恰好有一个整数，它的出现次数超过数组元素总数的 25%。

请你找到并返回这个整数
 
```
示例：

输入：arr = [1,2,2,6,6,6,6,7,10]
输出：6
```
```
提示：
1 <= arr.length <= 10^4 
0 <= arr[i] <= 10^5
```

### 解
1. for循环 + 递增个数  
思路：超过25%，那么个数一定大于或等于```Math.floor(arr.length * 0.25 + 1)```，结合数组是有序的，一次遍历存储递增个数即可。
```js
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
    if(arr.length <= 2) return arr[0]
    let len = Math.floor(arr.length * 0.25 + 1)
    let num = 1
    for(let i=0;i<arr.length-1;i++){
        arr[i] === arr[i+1]? num++:num=1
        if(num === len)return arr[i]
    }
};
```
```
执行结果：通过
执行用时 :68 ms, 在所有 JavaScript 提交中击败了82.45%的用户
内存消耗 :35.4 MB, 在所有 JavaScript 提交中击败了90.00%的用户
```
