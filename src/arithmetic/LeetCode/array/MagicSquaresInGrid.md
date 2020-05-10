## 840 - 矩阵中的幻方
3 x 3 的幻方是一个填充有从 1 到 9 的不同数字的 3 x 3 矩阵，其中每行，每列以及两条对角线上的各数之和都相等。

给定一个由整数组成的 grid，其中有多少个 3 × 3 的 “幻方” 子矩阵？（每个子矩阵都是连续的）。
```
示例：

输入: [[4,3,8,4],
      [9,5,1,9],
      [2,7,6,2]]
输出: 1
解释: 
下面的子矩阵是一个 3 x 3 的幻方：
438
951
276

而这一个不是：
384
519
762

总的来说，在本示例所给定的矩阵中只有一个 3 x 3 的幻方子矩阵。
```
提示:

1 <= grid.length <= 10  
1 <= grid[0].length <= 10  
0 <= grid[i][j] <= 15

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/magic-squares-in-grid)

### 解
1. 暴力拆解  
思路：我们可以在代码中添加 if grid[r+1][c+1] != 5: continue，帮助我们略过一些循环，这是基于以下观察得出：

 - 网格的总和是 45，因为网格必须是 1 到 9 不同的数字。
 - 每一列和行加起来必须是 15，乘以 3 则是网格的总和。
 - 对角线的和也必须是 15，题目中说了对角线与列，行的和相同。
 - 将四条穿过中心的线的 12 个值相加（即一行一列两条对角线），这四条线加起来等于 60；而整个网格加起来为 45。则中心等于 （60-45）/3 = 5（60−45）/3=5。

```js
/**
 * @param {number[][]} grid
 * @return {number}
 */
function fn(...vals){
    let count = Array.from({length:vals.length+1}, ()=> 0)
    for(let i=0;i<vals.length;i++) count[vals[i]] ++
    for(let j=1;j<=9;j++){ // 验证矩阵数字为1-9
        if(count[j] !==1) return false
    }
    return (vals[0] + vals[1] + vals[2] == 15 &&
                vals[3] + vals[4] + vals[5] == 15 &&
                vals[6] + vals[7] + vals[8] == 15 &&
                vals[0] + vals[3] + vals[6] == 15 &&
                vals[1] + vals[4] + vals[7] == 15 &&
                vals[2] + vals[5] + vals[8] == 15 &&
                vals[0] + vals[4] + vals[8] == 15 &&
                vals[2] + vals[4] + vals[6] == 15);
}
var numMagicSquaresInside = function(grid) {
    let G = grid.length-2,g = grid[0].length-2
    let res = 0
    for(let r=0;r<G;r++){
        for(let c=0;c<g;c++){
            if(grid[r+1][c+1] !== 5) continue // 中间元素必须是5
            if (fn(grid[r][c], grid[r][c+1], grid[r][c+2],
                    grid[r+1][c], grid[r+1][c+1], grid[r+1][c+2],
                    grid[r+2][c], grid[r+2][c+1], grid[r+2][c+2]))
            res++;
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :80 ms, 在所有 JavaScript 提交中击败了26.32%的用户
内存消耗 :33.8 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```