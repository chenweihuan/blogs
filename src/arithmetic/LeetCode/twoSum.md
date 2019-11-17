## 001 - 两数之和
给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。  
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

```
示例:
给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

### 解
1. 暴力拆解-两个for循环  
思路：使用两个for循环，在第二个for循环里找到```target-nums[i]```这个数，如果有则直接返回，没有则继续往下找。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let res =[]
    for(let i=0;i<nums.length;i++){
      for(let j=i+1;j<nums.length;j++){
        if(nums[i] + nums[j] === target){
          res.push(i,j)
          break
        }
      }
    }
    return res
};
```
2. 使用indexOf替代第二个for循环  
思路：既然第二个for循环是寻找```target-nums[i]```这个数，使用indexOf即可。  
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
      let diff = target - nums[i]
      if(nums.indexOf(diff,i+1) > -1){
        return [i,nums.indexOf(diff,i+1)]
      }
    }
};
```
注意：使用indexOf的第二个参数，跳过不需要检索的数组成员。  

3. 使用map替代indexOf  
思路：既然```target-nums[i]```这个数可以用indexOf找出，那么用map也可以的。而且使用map数据结构，检索速度比indexOf要快。
```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let map = new Map()
    for(let i=0;i<nums.length;i++){
      let diff = target - nums[i]
      if(map.has(nums[i])){
        return [map.get(nums[i]),i]
      }else{
        map.set(target - nums[i],i)
      }
    }
};
```