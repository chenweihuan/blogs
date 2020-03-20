## 543 - 二叉树的直径
给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的直径长度是任意两个结点路径长度中的最大值。这条路径可能穿过也可能不穿过根结点。

示例 :
给定二叉树
```
          1
         / \
        2   3
       / \     
      4   5    
```
返回 3, 它的长度是路径 [4,2,1,3] 或者 [5,2,1,3]。

注意：两结点之间的路径长度是以它们之间边的数目表示。

### 解
1. 双重递归  
思路：这条路径可能穿过也可能不穿过根结点。那我们先假设一定穿过根节点，那么直径长度就等于左节点最大深度+右节点最大深度了。接下来要算不穿过根节点的情况了，那我们再遍历这颗二叉树，处理逻辑和前面一样，得到最大值即可。
```js
var diameterOfBinaryTree = function(root) {
    let max = 0
    function fn(node){
        if(!node) return
        max = Math.max(depth(node.left)+depth(node.right), max)
        fn(node.left)
        fn(node.right)
    }
    fn(root)
    return max
};
// 获取节点的最大深度
function depth(node){
    if(!node){
        return 0
    }else{
        let left = depth(node.left)
        let right = depth(node.right)
        return Math.max(left, right) + 1
    }
}
```
```
执行结果：通过
执行用时 :108 ms, 在所有 JavaScript 提交中击败了19.69%的用户
内存消耗 :37.8 MB, 在所有 JavaScript 提交中击败了21.31%的用户
```

2. 单层递归  
思路：既然获取节点的最大深度已经有一层递归了，那Math.max函数也在里面执行了呗，避免双重递归。
```js
var diameterOfBinaryTree = function(root) {
    let res = 0
    function fn(node){
        if(!node){
            return 0
        }else{
            let left = fn(node.left)
            let right = fn(node.right)
            res = Math.max(res, left+right)
            return Math.max(left,right)+1
        }
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了72.57%的用户
内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了57.38%的用户
```