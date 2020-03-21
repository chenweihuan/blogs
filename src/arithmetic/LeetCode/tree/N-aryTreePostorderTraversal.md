## 590 - N叉树的后序遍历
给定一个 N 叉树，返回其节点值的后序遍历。

例如，给定一个 3叉树 :

 ```
           1
         / \ \
        3   2  4
       / \     
      5   6    
```

返回其后序遍历: [5,6,3,2,4,1]。

### 解
1. 递归  
```js
/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
    let res = []
    if(!root) return res
    function fn(node){
        if(!node) return
        node.children.forEach(val=>{
            fn(val)
        })
        res.push(node.val)
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了75.23%的用户
内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了94.59%的用户
```

