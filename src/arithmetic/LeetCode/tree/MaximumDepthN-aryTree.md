## 559 - N叉树的最大深度
给定一个 N 叉树，找到其最大深度。

最大深度是指从根节点到最远叶子节点的最长路径上的节点总数。

例如，给定一个 3叉树 :

```
           1
         / \ \
        2   3  7
       / \     
      4   5    
```

我们应返回其最大深度，3。

说明:

树的深度不会超过 1000。
树的节点总不会超过 5000。

### 解
1. 递归
```js
var maxDepth = function(root) {
    if(!root){
        return 0
    }else{
        let res = [0]
        root.children.forEach(val=>{
            res.push(maxDepth(val))
        })
        return Math.max(...res)+1
    }
};
```
```
执行结果：通过
执行用时 :120 ms, 在所有 JavaScript 提交中击败了20.30%的用户
内存消耗 :44.8 MB, 在所有 JavaScript 提交中击败了10.26%的用户
```

2. 队列
```js
var maxDepth = function(root) {
    if(!root) return 0
    let q = [root, null]
    let res = 0
    while(q.length){
        let current = q.shift()
        if(!current){
            res++
            if(q.length !== 0)q.push(null)
        }else{
            q.push(...current.children)
        }
    }
    return res
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了46.19%的用户
内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了74.36%的用户
```
