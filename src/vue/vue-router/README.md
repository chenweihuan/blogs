## vue-router的使用方法

### 1. 安装
```
npm install vue-router
```

### 2.在router文件夹新建index.js
```
import Vue from 'vue';
import Router from 'vue-router';
import Guide from './../views/Guide/Guide';
import Index from './../views/Index/Index';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/guide',
      name: 'Guide',
      component: Guide
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
});
```

### 3. 在main.js引入路由js
```
import Vue from 'vue'
import router from './router';
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

### 4.在需要的地方引入router-view
```
<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>
```
