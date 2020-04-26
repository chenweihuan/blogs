## 605 - 种花问题
假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。

给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
```
示例 1:

输入: flowerbed = [1,0,0,0,1], n = 1
输出: True
```
```
示例 2:

输入: flowerbed = [1,0,0,0,1], n = 2
输出: False
```
注意:

数组内已种好的花不会违反种植规则。  
输入的数组长度范围为 [1, 20000]。  
n 是非负整数，且不会超过输入数组的大小。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/can-place-flowers)

### 解
1. for循环 + 判断相邻元素（贪心算法？）  
思路：我们从左到右扫描数组 flowerbed，如果数组中有一个 0，并且这个 0 的左右两侧都是 0，那么我们就可以在这个位置种花，即将这个位置的 0 修改成 1，并将计数器 count 增加 1。对于数组的第一个和最后一个位置，我们只需要考虑一侧是否为 0。
```js
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let res = 0
    for(let i=0;i<flowerbed.length;i++){
        if(i===0){
            if(flowerbed[i] == 0 && !flowerbed[i+1]) { // [0]在这里算上
                flowerbed[i] = 1
                res++
            }
        }else if(i === flowerbed.length-1){
            if(flowerbed[i] == 0 && flowerbed[i-1] == 0){
                flowerbed[i] = 1
                res++
            }
        }else{
            if(flowerbed[i] == 0 && flowerbed[i-1] == 0 && flowerbed[i+1] == 0){
                flowerbed[i] = 1
                res++
            }
        }
    }
    return n <= res
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了89.41%的用户
内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
