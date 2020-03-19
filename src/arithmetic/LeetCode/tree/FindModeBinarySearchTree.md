## 501 - 二叉搜索树中的众数
给定一个有相同值的二叉搜索树（BST），找出 BST 中的所有众数（出现频率最高的元素）。

假定 BST 有如下定义：

结点左子树中所含结点的值小于等于当前结点的值；
结点右子树中所含结点的值大于等于当前结点的值；
左子树和右子树都是二叉搜索树。

例如：
给定 BST [1,null,2,2],
```
   1
    \
     2
    /
   2
```
返回[2].

提示：如果众数超过1个，不需考虑输出顺序。

### 解
1. 暴力  
思路：先遍历一次整棵树，得到一个Map，对应每个数字出现的次数。接着遍历Map，找到value值最高的即可。
```js
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let treeMap = {}
    function fn(node){
        if(!node) return
        if(treeMap[node.val]){
            treeMap[node.val] += 1
        }else{
            treeMap[node.val] = 1
        }
        fn(node.left)
        fn(node.right)
    }
    fn(root)
    let res = [],max = 0
    for(let key in treeMap){
        if(treeMap[key] > max){
            res = [key]
            max = treeMap[key]
        }else if(treeMap[key] === max){
            res.push(key)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :96 ms, 在所有 JavaScript 提交中击败了41.18%的用户
内存消耗 :42 MB, 在所有 JavaScript 提交中击败了46.15%的用户
```