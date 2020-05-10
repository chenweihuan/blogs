## 888 - 公平的糖果交换
爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。

因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）

返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。

如果有多个答案，你可以返回其中任何一个。保证答案存在。
```
示例 1：

输入：A = [1,1], B = [2,2]
输出：[1,2]
```
```
示例 2：

输入：A = [1,2], B = [2,3]
输出：[1,2]
```
```
示例 3：

输入：A = [2], B = [1,3]
输出：[2,3]
```
```
示例 4：

输入：A = [1,2,5], B = [2,4]
输出：[5,4]
```

提示：

1 <= A.length <= 10000  
1 <= B.length <= 10000  
1 <= A[i] <= 100000  
1 <= B[i] <= 100000  
保证爱丽丝与鲍勃的糖果总量不同。  
答案肯定存在。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/fair-candy-swap)

### 解
1. 数学求解  
思路：sumA-x+y=sumB-y+x => y=x+(sumB-sumA)/2
```js
/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
    let sumA=0, sumB=0
    let BMap = {}
    for(let i=0;i<A.length;i++) sumA+=A[i]
    for(let i=0;i<B.length;i++){
        sumB+=B[i]
        BMap[B[i]] = 1
    }
    for(let i=0;i<A.length;i++){
        let y = A[i] + (sumB - sumA)/2
        if(BMap[y]) return [A[i], y]
    }
    return []
};
```
```
执行结果：通过
执行用时 :104 ms, 在所有 JavaScript 提交中击败了92.80%的用户
内存消耗 :43.6 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
