|         HTML         |                CSS                |          Javascript          |           前端构建工具           |               小游戏               |           框架           |           每周算法           |           数据库          |           学习笔记          |
| :------------------: | :-------------------------------: | :--------------------------: | :------------------------------: | :--------------------------------: | :----------------------: | :----------------------: | :----------------------: | :----------------------: |
| [:memo:](#memo-HTML) | [:floppy_disk:](#floppy_disk-CSS) | [:cloud:](#cloud-Javascript) | [:wrench:](#wrench-前端构建工具) | [:video_game:](#video_game-小游戏) | [:hammer:](#hammer-框架) | [:smile:](#smile-每周算法) | [:briefcase:](#briefcase-数据库) | [ :zap: ](#zap-学习笔记) |

<br/>

> ⭐️ 个人独白，记录学习经验，希望能改掉自己学完就扔的老毛病。  
> :heart: 这也是记录读书笔记的好地方。   
> :v: 日复一日，年复一年。请你坚持，哈哈哈。。。  

<br/>

## :memo: HTML

## :floppy_disk: CSS

- [设置边框颜色渐变](./src/css/dot/border.md#设置边框颜色渐变)
- [引入特殊字体](./src/css/dot/border.md#引入特殊字体)
- [控制中英文的单词间隔](./src/css/dot/border.md#控制中英文的单词间隔)

## :cloud: Javascript

## :wrench: 前端构建工具

<details >
  <summary>1. webpack</summary> 
  
  - 从零搭建webpack配置系列
    - [从零搭建webpack配置 - ES6](./src/builds-tools/webpack/es6)
    - [从零搭建webpack配置 - 配置html模板](./src/builds-tools/webpack/html-webpack-plugin)
    - [从零搭建webpack配置 - devserver](./src/builds-tools/webpack/devserver)
    - [从零搭建webpack配置 - 引用css](./src/builds-tools/webpack/css)
    - [从零搭建webpack配置 - 引用图片](./src/builds-tools/webpack/image)
    - [从零搭建webpack配置 - 代码分割](./src/builds-tools/webpack/codeSplit)

  - 配置
    - [resolve解析](./src/builds-tools/webpack/webpack-config/resolve.md)

  - plugin
    - [打包前清空dist目录 -- clean-webpack-plugin](./src/builds-tools/webpack/plugin/cleanWebpack.md#安利插件----clean-webpack-plugin)
  - 知识小点
    - [使用 Prettier格式化代码](./src/builds-tools/dot#使用-prettier格式化代码)
  
</details>


## :video_game: 小游戏

<details >
  <summary>1. phaser</summary> 
  
  - [webpack + phaser-ce@2.11.0](./src/h5-game/phaser/webpack+phaser-ce)
  - [Phaser中的事件机制](./src/h5-game/phaser/event)
  - [基于Phaser的加载进度条实现](./src/h5-game/phaser/loading)
  - [使用对象池模式优化游戏性能](./src/h5-game/phaser/object-mode)
  - [基于phaser的滚动排行榜](./src/h5-game/phaser/ranking-list)
  - [基于phaser的天降火鸡demo](./src/h5-game/phaser/turkey)
 
</details>

## :hammer: 框架

<details >
  <summary>1. vue</summary> 
  
  - vue基础
    - [简单的弹窗组件实现](./src/vue/vue/component.md)
    - [图片预加载](./src/vue/preload-image)
    - [vue移动端适配方案--vw](./src/vue/dot/mobile.md)
    - [基础组件的自动化全局注册](./src/vue/vue-component)
    - [全局过滤器注册](./src/vue/dot/filter.md)
    - [实现防抖/节流HOC](./src/vue/dot/throttle.md)

  - vuex
    - [vuex的基本项目结构](./src/vue/vuex)
    - [vuex-pathify的基本项目结构](./src/vue/vuex-pathify)

  - vue-cli
    - [通过环境变量设置publicPath](./src/vue/vue-cli/publicPath.md)
    - [更多vue-cli3配置参考 - vue-cli3-config-reference](https://github.com/chenweihuan/vue-cli3-config-reference)

  - vue-router
    - [vue-router的使用方法](./src/vue/vue-router)

  - 知识小点
    - [给 router-link 绑定事件](./src/vue/dot/README.md#给router-link绑定事件)
    - [监听route的变化](./src/vue/dot/README.md#监听route的变化)
    - [在火狐浏览器中，disabled的input元素不会执行父组件的click事件](./src/vue/dot/README.md#disabled的input元素不会执行父组件的click事件)
  
</details >
  
<details >
  <summary>2. React</summary> 
  
  - react-redux
    - [如何安装Redux-DevTools](./src/React/Redux-DevTools.md)
    - [react-redux的使用和基本项目机构](./src/React/react-redux)
    
</details >

## :smile: 每周算法

<details >
  <summary>1. Math</summary> 
  
  - [斐波那契数列](./src/arithmetic/math/feibo.md)
  - [水仙花数](./src/arithmetic/math/daffodil.md)
  - [杨辉三角](./src/arithmetic/math/three.md)
  - [找到100以内的质数](./src/arithmetic/math/primeNum.md)
  - [实现九九乘法表](./src/arithmetic/math/nine.md)
    
</details >

#### 2. LeetCode

> 记录解题思路，培养编程的意识  

- 简单难度
  - [001 - 两数之和](./src/arithmetic/LeetCode/twoSum.md)
  - [007 - 正数反转](./src/arithmetic/LeetCode/reverseInt.md)
  - [009 - 回文数](./src/arithmetic/LeetCode/isPalindrome.md)
  - [013 - 罗马数字转整数](./src/arithmetic/LeetCode/RomanToInt.md)
  - [014 - 最长公共前缀](./src/arithmetic/LeetCode/longCommonPre.md)
  - [020 - 有效的括号](./src/arithmetic/LeetCode/ValidParentheses.md)
  - [021 - 合并两个有序链表](./src/arithmetic/LeetCode/MergeTwoSortedLists.md)
  - [026 - 删除排序数组中的重复项](./src/arithmetic/LeetCode/RemoveDuplicatesFromSortedArray.md)
  - [027 - 移除元素](./src/arithmetic/LeetCode/RemoveElement.md)
  - [028 - 实现str()](./src/arithmetic/LeetCode/ImplementStrStr.md)
  - [035 - 搜索插入位置](./src/arithmetic/LeetCode/SearchInsertPosition.md)
  - [038 - 外观数列](./src/arithmetic/LeetCode/CountAndSay.md)
  - [053 - 最大子序和](./src/arithmetic/LeetCode/MaximumSubarray.md)
  - [058  -最后一个单词的长度](./src/arithmetic/LeetCode/LengthLastWord.md)
- 中等难度

- 困难难度

## :briefcase: 数据库

- [mongodb的基础操作](./src/data-base/mongodb)

## :zap: 学习笔记

- [微前端入门](./src/learn-note/micro-frontend.md)
