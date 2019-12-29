## 021 - 合并两个有序链表
将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
```
示例：

输入：1->2->4, 1->3->4
输出：1->1->2->3->4->4
```
来源：[力扣（LeetCode）](https://leetcode-cn.com/problems/merge-two-sorted-lists)

### 解
1. 比较链表第一个元素  
思路：比较两个链表的首个元素，取小值，添加到新链表中并删除该值在旧链表的位置，直到l1或l2其中一个链表为null。  
难点：在每次循环结束之后执行```list = list.next```，目的是使list往下走一步，而不影响resList前面已经排好顺序的部分。在下面的例子中，首次循环后，```resList = [1,2,4]```，其中1是已经排好序的值，所以让后面没排好序部分（```[2,4]```）赋给list，继续往下执行。最好写出每次循环后resList和list的指向，便能理解（我是一行一行debugger才弄明白的...惭愧）。  
总结：对链表的操作不是很熟悉呀...

```js
// 参数l1和l2的格式参考
let l1 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}
let l2 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 5,
      next: null
    }
  }
}
```
```js
/**
* Definition for singly-linked list.
* function ListNode(val) {
*     this.val = val;
*     this.next = null;
* }
*/
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let resList = { next: null }
  let list = resList
  while (l1 && l2) { // 直到l1或l2有一个为null
    if (l1.val <= l2.val) {
      list.next = l1
      l1 = l1.next
    } else {
      list.next = l2
      l2 = l2.next
    }
    list = list.next // 使list往下走一步，而不影响resList前面已经排好顺序的部分
  }
  list.next = l1 || l2 // 把还没有比较的部分拼接到list的最后即可
  return resList.next
};
```
```
执行结果：通过
执行用时 :72 ms, 在所有 javascript 提交中击败了 82.86% 的用户
内存消耗 :35.8 MB, 在所有 javascript 提交中击败了 15.93% 的用户
```