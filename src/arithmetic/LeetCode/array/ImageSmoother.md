## 661 - 图片平滑器
包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。
```
示例 1:

输入:
[[1,1,1],
 [1,0,1],
 [1,1,1]]
输出:
[[0, 0, 0],
 [0, 0, 0],
 [0, 0, 0]]
解释:
对于点 (0,0), (0,2), (2,0), (2,2): 平均(3/4) = 平均(0.75) = 0
对于点 (0,1), (1,0), (1,2), (2,1): 平均(5/6) = 平均(0.83333333) = 0
对于点 (1,1): 平均(8/9) = 平均(0.88888889) = 0
```
注意:

给定矩阵中的整数范围为 [0, 255]。  
矩阵的长和宽的范围均为 [1, 150]。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/image-smoother)

### 解
1. 遍历矩阵
```js
/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function(M) {
    let R = M.length, C = M[0].length
    let res = Array.from({length:R}, ()=> ([]))
    for(let r=0;r<R;r++){
        for(let c=0;c<C;c++){
            let count = 0
            res[r][c] = 0
            for(let nr=r-1;nr<=r+1;nr++){
                for(let nc=c-1;nc<=c+1;nc++){
                    if(nr>=0 && nr<R && nc>=0 && nc<C){
                        res[r][c] += M[nr][nc]
                        count++
                    }
                }
            }
            res[r][c] = Math.floor(res[r][c]/count)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :172 ms, 在所有 JavaScript 提交中击败了41.05%的用户
内存消耗 :42.3 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
