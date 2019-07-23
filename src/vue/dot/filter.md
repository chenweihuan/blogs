## 全局过滤器注册

官方注册过滤器的方式：
```js
export default {
  data () { return {} },
  filters:{
    orderBy (){
      // doSomething
    }
  }
}
```
但是我们做项目来说，大部分的过滤器是要全局使用的，不会每每用到就在组件里面去写，抽成全局的会更好些。
```js
// 注册
Vue.filter('my-filter', function (value) {
  // 返回处理后的值
})
```
但是分散写的话不美观，因此可以抽出成单独文件。

### 1.新建/src/common/filters.js
```js
let dateServer = value => value.replace(/(\d{4})(\d{2})(\d{2})/g, '$1-$2-$3') 
let upper = value => value +1;

export { dateServer,upper }
```

### 2. 在man.js引入filters.js
```js
import * as custom from './common/filters/custom' //把export的内容放在custom这个对象里面
Object.keys(custom).forEach(key => Vue.filter(key, custom[key]))
```

### 3.在页面使用
```js
<template>
  <div id="app">
    <button >{{"20160101" | dateServer}}</button>
    {{1 | upper}}
  </div>
</template>
```