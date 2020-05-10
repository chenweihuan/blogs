## 914 - 卡牌分组
给定一副牌，每张牌上都写着一个整数。

此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

每组都有 X 张牌。
组内所有的牌上都写着相同的整数。
仅当你可选的 X >= 2 时返回 true。

```
示例 1：

输入：[1,2,3,4,4,3,2,1]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[3,3]，[4,4]
```
```
示例 2：

输入：[1,1,1,2,2,2,3,3]
输出：false
解释：没有满足要求的分组。
```
```
示例 3：

输入：[1]
输出：false
解释：没有满足要求的分组。
```
```
示例 4：

输入：[1,1]
输出：true
解释：可行的分组是 [1,1]
```
```
示例 5：

输入：[1,1,2,2,2,2]
输出：true
解释：可行的分组是 [1,1]，[2,2]，[2,2]
```
提示：

1 <= deck.length <= 10000
0 <= deck[i] < 10000

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards)

### 解
1. 最大公约数  
思路：我们只要求出所有元素的最大公约数 g，判断 g 是否大于等于 2 即可，如果大于等于 2，则满足条件，否则不满足。
```js
/**
 * @param {number[]} deck
 * @return {boolean}
 */
function gcd(x, y){ // 求最大公约数
    return x==0?y:gcd(y%x, x)
}
var hasGroupsSizeX = function(deck) {
    let resMap = {}, g
    for(let i=0;i<deck.length;i++){
        resMap[deck[i]] ? resMap[deck[i]]++ : resMap[deck[i]] = 1
    }
    for(let key in resMap){
        g = g ? gcd(g, resMap[key]) : resMap[key]
    }
    return g>=2
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 JavaScript 提交中击败了81.28%的用户
内存消耗 :36.4 MB, 在所有 JavaScript 提交中击败了100.00%的用户
```
