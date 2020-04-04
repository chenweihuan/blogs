## 026 - 删除排序数组中的重复项
给定一个排序数组，你需要在原地删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。

不要使用额外的数组空间，你必须在原地修改输入数组并在使用 O(1) 额外空间的条件下完成。
```
示例 1:
给定数组 nums = [1,1,2], 函数应该返回新的长度 2, 并且原数组 nums 的前两个元素被修改为 1, 2。 

你不需要考虑数组中超出新长度后面的元素。
```
```
示例 2:
给定 nums = [0,0,1,1,1,2,2,3,3,4],函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。

你不需要考虑数组中超出新长度后面的元素。
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array)

> :stuck_out_tongue_closed_eyes:今天是2020.01.01，在家休息一天，正常是周日才做一题，但近来被业务缠身，略显疲惫，不如做道算法题让自己思维转动一下，开心一下。

> :heart:新的一年，希望我爱的人都能健健康康，工作顺顺利利，生活开开心心。

### 解
1. splice  
思路：数组的splice方法是可以改变原数组的，那使用一个for循环就好啦，当前元素和下一个元素比较，如果相等，则删除当前元素，否则i++。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length;) {
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1)
    } else {
      i++
    }
  }
  return nums.length
};
```
```
执行结果：通过
执行用时 :84 ms, 在所有 javascript 提交中击败了 76.72% 的用户
内存消耗 :37.6 MB, 在所有 javascript 提交中击败了 17.79% 的用户
```

2. Set  
思路：使用Set数据结构，去除重复数组选项即可。但注意的是，不可以直接赋新的引用给nums，而是用一个变量a过渡新数组，循环a且赋给nums的每一个元素。例如```nums = [...new Set(nums)]```是不可以的，估计LeetCode的判定准则是一开始nums存储的引用指向的数组，而如果用赋值新数组给nums，是没有效果的。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let a = [...new Set(nums)]
  for (var i = 0; i < a.length; i++) nums[i] = a[i]
  // nums后面多余的元素不必担心，因为我们后面返回了a.length
  // 判定只关心a.length长度的元素，不需要考虑数组中超出新长度后面的元素
  return a.length
};
```
```
执行结果：通过
执行用时 : 76 ms , 在所有 javascript 提交中击败了 94.22% 的用户
内存消耗 : 38 MB , 在所有 javascript 提交中击败了 7.72% 的用户
```

3. 双指针
思路：数组完成排序后，我们可以放置两个指针 ii 和 jj，其中 ii 是慢指针，而 jj 是快指针。只要 nums[i] = nums[j]，我们就增加 jj 以跳过重复项。当我们遇到 nums[j] !== nums[i]nums[j] 时，跳过重复项的运行已经结束，因此我们必须把它（nums[j]）的值复制到 nums[i+1]。然后递增 i，接着我们将再次重复相同的过程，直到 j 到达数组的末尾为止。
```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let i = 0
    for(let j=1;j<nums.length;j++){
        if(nums[i] !== nums[j]){
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
};
```
```
执行结果：通过
执行用时 :116 ms, 在所有 JavaScript 提交中击败了25.17%的用户
内存消耗 :36.7 MB, 在所有 JavaScript 提交中击败了89.43%的用户
```