## 653 - 两数之和 IV - 输入 BST
给定一个二叉搜索树和一个目标结果，如果 BST 中存在两个元素且它们的和等于给定的目标结果，则返回 true。
```
案例 1:

输入: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9

输出: True
```
```
案例 2:

输入: 
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28

输出: False
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/two-sum-iv-input-is-a-bst)

### 解
1. 递归中序遍历 + 暴力拆解两数之和  
```js
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let res = []
    function fn(node){
        if(!node) return
        fn(node.left)
        res.push(node.val)
        fn(node.right)
    }
    fn(root)
    for(let i = 0;i<res.length;i++){
        for(let j=i+1;j<res.length;j++){
            if(res[i] + res[j] === k) return true
            if(res[i] + res[j] > k) break // 如果已经大于，跳出内层循环
        }
    }
    return false
};
```
```
执行结果：通过
执行用时 :104 ms, 在所有 JavaScript 提交中击败了57.89%的用户
内存消耗 :42 MB, 在所有 JavaScript 提交中击败了64.71%的用户
```

2. 递归遍历 + Object拆解两数之和
```js
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let resMap = {}
    let res = false
    function fn(node){
        if(!node) return
        if(resMap[node.val] !== undefined) {
            res = true
            return
        }
        resMap[k-node.val] = node.val // 把还需要的数存在Map里，只要下次遍历有命中的，就返回true
        fn(node.left)
        fn(node.right)
    }
    fn(root)
    return res
};
```
```
执行结果：通过
执行用时 :124 ms, 在所有 JavaScript 提交中击败了26.97%的用户
内存消耗 :43.3 MB, 在所有 JavaScript 提交中击败了8.82%的用户
```

3. 迭代 + Object拆解两数之和
```js
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
    let resMap = {}
    let q = [root]
    while(q.length){
        let current = q.shift()
        if(resMap[current.val] !== undefined) return true
        resMap[k - current.val] = current.val
        if(current.left) q.push(current.left)
        if(current.right) q.push(current.right)
    }
    return false
};
```
```
执行结果：通过
执行用时 :116 ms, 在所有 JavaScript 提交中击败了31.58%的用户
内存消耗 :42.6 MB, 在所有 JavaScript 提交中击败了32.35%的用户
```

4. 外层递归 + Map拆解两数之和
```js
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k, resMap = new Map()) {
    if(!root) return false
    if(resMap.has(root.val)) return true
    resMap.set(k-root.val,root.val)
    return findTarget(root.left, k, resMap) || findTarget(root.right, k, resMap)
};
```
```
执行结果：通过
执行用时 :88 ms, 在所有 JavaScript 提交中击败了97.37%的用户
内存消耗 :41.8 MB, 在所有 JavaScript 提交中击败了88.24%的用户
```
