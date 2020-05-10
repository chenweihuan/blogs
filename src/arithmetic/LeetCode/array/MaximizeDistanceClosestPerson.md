## 849 - 到最近的人的最大距离
在一排座位（ seats）中，1 代表有人坐在座位上，0 代表座位上是空的。

至少有一个空座位，且至少有一人坐在座位上。

亚历克斯希望坐在一个能够使他与离他最近的人之间的距离达到最大化的座位上。

返回他到离他最近的人的最大距离。
```
示例 1：

输入：[1,0,0,0,1,0,1]
输出：2
解释：
如果亚历克斯坐在第二个空位（seats[2]）上，他到离他最近的人的距离为 2 。
如果亚历克斯坐在其它任何一个空位上，他到离他最近的人的距离为 1 。
因此，他到离他最近的人的最大距离是 2 。 
```
```
示例 2：

输入：[1,0,0,0]
输出：3
解释： 
如果亚历克斯坐在最后一个座位上，他离最近的人有 3 个座位远。
这是可能的最大距离，所以答案是 3 。
```
提示：

1 <= seats.length <= 20000  
seats 中只含有 0 和 1，至少有一个 0，且至少有一个 1。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/maximize-distance-to-closest-person)

### 解
1. 按零分组  
思路：假设两个人之间有 K 个空座位，则存在座位到最近的人的距离为 (K+1) / 2。对于边缘的座位，它们的一侧没有人，那么认为它们到该侧最近的人的距离为 K。
```js
/**
 * @param {number[]} seats
 * @return {number}
 */
var maxDistToClosest = function(seats) {
    let res = 0
    let j = 0
    for(let i=0;i<seats.length;i++){
        if(seats[i] === 1){
            j = 0
        }else{
            j++
            res = Math.max(res, Math.ceil(j/2))
        }
    }
    // 0开头
    for(let i=0;i<seats.length;i++){
        if(seats[i] === 1){
            res = Math.max(res, i)
            break
        }
    }
    // 0结尾
    for(let i=seats.length-1;i>=0;i--){
        if(seats[i] === 1){
            res = Math.max(res, seats.length-i-1)
            break
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 JavaScript 提交中击败了32.69%的用户
内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了60.00%的用户
```
