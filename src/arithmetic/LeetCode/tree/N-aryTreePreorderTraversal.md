## 589 - N叉树的前序遍历
给定一个 N 叉树，返回其节点值的前序遍历。

例如，给定一个 3叉树 :

 ```
           1
         / \ \
        3   2  4
       / \     
      5   6    
```

返回其前序遍历: [1,3,5,6,2,4]。

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
        res.push(node.val)
        node.children.forEach(val=>{
            fn(val)
        })
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了96.88%的用户
内存消耗 :37.4 MB, 在所有 JavaScript 提交中击败了91.76%的用户
```

