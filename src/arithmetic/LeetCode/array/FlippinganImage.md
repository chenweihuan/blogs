## 832 - 翻转图像
给定一个二进制矩阵 A，我们想先水平翻转图像，然后反转图像并返回结果。

水平翻转图片就是将图片的每一行都进行翻转，即逆序。例如，水平翻转 [1, 1, 0] 的结果是 [0, 1, 1]。

反转图片的意思是图片中的 0 全部被 1 替换， 1 全部被 0 替换。例如，反转 [0, 1, 1] 的结果是 [1, 0, 0]。
```
示例 1:

输入: [[1,1,0],[1,0,1],[0,0,0]]
输出: [[1,0,0],[0,1,0],[1,1,1]]
解释: 首先翻转每一行: [[0,1,1],[1,0,1],[0,0,0]]；
     然后反转图片: [[1,0,0],[0,1,0],[1,1,1]]
```
```
示例 2:

输入: [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
输出: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
解释: 首先翻转每一行: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]]；
     然后反转图片: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
```
说明:

1 <= A.length = A[0].length <= 20  
0 <= A[i][j] <= 1

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/flipping-an-image)

### 解
1. reverse + Map
```js
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    const replaceMap = {
        0: 1,
        1: 0
    }
    for(let i=0;i<A.length;i++){
        A[i].reverse()
        for(let j=0;j<A[i].length;j++){
            A[i][j] = replaceMap[A[i][j]]
        }
    }
    return A
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了27.78%的用户
内存消耗 :34.9 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```

2. 异或运算符(不依赖reverse + map)  
思路：模拟reverse的实现，加上使用异或运算。异或运算规则：0^0=0；  0^1=1；  1^0=1；   1^1=0；就是两数相同返回0，相异返回1。
```js
/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function(A) {
    let len = A[0].length
    let insideLen = Math.floor((len+1)/2)
    for(let i=0;i<A.length;i++){
        let row = A[i]
        for(let j =0;j<insideLen;j++){
            let tem = row[j] ^ 1
            row[j] = row[len-j-1] ^ 1
            row[len-j-1] = tem
        }
    }
    return A
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了40.60%的用户
内存消耗 :35 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
