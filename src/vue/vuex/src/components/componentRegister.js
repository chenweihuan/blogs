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
