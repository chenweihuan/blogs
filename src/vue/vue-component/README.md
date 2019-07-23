## 基础组件的自动化全局注册
我们写组件的时候通常需要引入另外的组件：
```html
<template>
  <div id="app">
    <ComA/>
    <ComB/>
  </div>
</template>

<script>
  import ComB from "./components/ComB/ComB";
  import ComA from "./components/ComA/ComA";
  export default {
    components: { ComA,ComB }
  };
</script>
```
写小项目这么引入还好，但等项目一臃肿起来。 这里是借助webpack，使用 require.context() 方法来创建自己的模块上下文，从而实现自动动态require组件。

### 1.在放基础组件的文件夹根目录下新建componentRegister.js
```js
import Vue from 'vue'
/**
 * 首字母大写
 * @param str 字符串
 * @example heheHaha
 * @return {string} HeheHaha
 */
function capitalizeFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
/**
 * 对符合'xx/xx.vue'组件格式的组件取组件名
 * @param str fileName
 * @example abc/bcd/def/basicTable.vue
 * @return {string} BasicTable
 */
function validateFileName (str) {
  return /^\S+\.vue$/.test(str) &&
    str.replace(/^\S+\/(\w+)\.vue$/, (rs, $1) => capitalizeFirstLetter($1))
    //此处的正则解析：非空白字符开端，出现1次及以上，转义"\"，把.vue前的文件名取出来作为$1
}

// （创建出）一个 context，其中文件来自./(当前)目录，request 以 `.vue` 结尾。
const requireComponent = require.context('./', true, /\.vue$/);

// 找到组件文件夹下以.vue命名的文件，如果文件名为index，那么取组件中的name作为注册的组件名
// console.log(requireComponent.keys()); ["./ComA/index.vue", "./ComB/ComB.vue"]
requireComponent.keys().forEach(filePath => {
  const componentConfig = requireComponent(filePath)
  const fileName = validateFileName(filePath)//格式化文件路径，取出文件名
  // console.log(fileName) //Index,ComB
  const componentName = fileName.toLowerCase() === 'index'
    ? capitalizeFirstLetter(componentConfig.default.name)
    : fileName
    //如果文件名是index.js的话，总不能注册Index组件吧，所以会取index.js里面定义的name作为组件名
  Vue.component(componentName, 
    // 如果这个组件选项是通过 `export default` 导出的，
    // 那么就会优先使用 `.default`，
    // 否则回退到使用模块的根。
    componentConfig.default || componentConfig)//在全局注册组件
})

//注意：如果文件名以index.js命名，需要在script里面定义name，因为需要拿他作为组件名。
```

### 2.在main.js中引入componentRegister.js
```js
import 'components/componentRegister.js'
```
我们就可以随时随地使用这些基础组件，无需手动引入了。更多查看[官方文档：基础组件的自动化全局注册](https://cn.vuejs.org/v2/guide/components-registration.html#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E7%9A%84%E8%87%AA%E5%8A%A8%E5%8C%96%E5%85%A8%E5%B1%80%E6%B3%A8%E5%86%8C)