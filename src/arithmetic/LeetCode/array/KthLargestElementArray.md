## 215 - 数组中的第K个最大元素
在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
```
示例 1:

输入: [3,2,1,5,6,4] 和 k = 2
输出: 5
```
```
示例 2:

输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
输出: 4
```
说明:

你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。

来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/kth-largest-element-in-an-array)

### 解
1. sort排序
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums.sort((a,b)=>a-b)
    return nums[nums.length - k]
};
```
```
执行结果：通过
执行用时 :92 ms, 在所有 JavaScript 提交中击败了50.56%的用户
内存消耗 :35.9 MB, 在所有 JavaScript 提交中击败了40.00%的用户
```

2. 冒泡排序  
思路：冒泡排序的原理就是每个外层for循环找出最大值，把他移到最右边。那么我们执行k次外层for循环，得到的就是第k大元素啦。
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums.length-i;j++){
            if(nums[j] > nums[j+1]){
                let temp = nums[j]
                nums[j] = nums[j+1]
                nums[j+1] = temp
            }
        }
        if(k === i+1) return nums[nums.length - k]
    }
};
```
```
执行结果：通过
执行用时 :224 ms, 在所有 JavaScript 提交中击败了11.42%的用户
内存消耗 :34.8 MB, 在所有 JavaScript 提交中击败了91.43%的用户
```

3. 快排  
思路：利用快排思想，把数组从大到小排序。只要把第k个数的位置排好，那么左边的就是最大的k-1个数字。当k>基准点+1，证明第k个值在右边，递归右边，否则递归左边。直到k==基准点+1，返回arr[k-1]。
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function getIndex(arr, left, right){
    let j = left
    let index = left+1
    for(let i=j;i<=right;i++){
        if(arr[i] > arr[j]){
            swap(arr, i, index)
            index++
        }
    }
    swap(arr, j, index-1)
    return index-1
}
// 交换位置
function swap(arr, i, j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
// 我们从大到小排序
var findKthLargest = function(nums, k, left = 0, right = nums.length-1) {
    if(left < right){
        let index = getIndex(nums, left, right) // 获取第一个值的正确索引
        if(k === index+1){
            return nums[index]
        }else if(k > index+1){ // 解在右边
            return findKthLargest(nums, k, index+1, right)
        }else{ // 解在左边
            return findKthLargest(nums, k, left, index-1)
        }
    }else{
        return nums[left]
    }
};
```
```
执行结果：通过
执行用时 :76 ms, 在所有 JavaScript 提交中击败了88.20%的用户
内存消耗 :35.3 MB, 在所有 JavaScript 提交中击败了62.86%的用户
```
