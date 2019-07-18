## vue移动端适配方案--vw

### 1.安装相关插件
```
npm i postcss-aspect-ratio-mini postcss-px-to-viewport postcss-write-svg postcss-cssnext postcss-viewport-units cssnano postcss-import postcss-url cssnano-preset-advanced -S
```

### 2.修改package.json
```
"postcss": {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    "postcss-write-svg": {
      "uft8": false
    },
    "postcss-cssnext": {},
    "postcss-px-to-viewport": {
      "viewportWidth": 640, //视窗的宽度，对应的是我们设计稿的宽度，一般是750
      "unitPrecision": 3, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
      "viewportUnit": "vw", // 指定需要转换成的视窗单位，建议使用vw
      "selectorBlackList": [// 指定不转换为视窗单位的类，可以自定义，可以无限添加,建议定义一至两个通用的类名
        ".ignore",
        ".hairlines"
      ],
      "minPixelValue": 1,// 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      "mediaQuery": false // 允许在媒体查询中转换`px`
    },
    "postcss-viewport-units": {},
    "cssnano": {
      "preset": "advanced",
      "autoprefixer": false,
      "postcss-zindex": false
    }
  }
}
```
到这里就可以使用vw作为css单位了。
当然，我还需要知道这些插件的作用，
- postcss-import：解决@import引入路径问题。使用这个插件，可以让你很轻易的使用本地文件、node_modules或者web_modules的文件。这个插件配合postcss-url让你引入文件变得更轻松。
- postcss-url：该插件主要用来处理文件，比如图片文件、字体文件等引用路径的处理。在Vue项目中，vue-loader已具有类似的功能，只需要配置中将vue-loader配置进去。
- autoprefixer：插件是用来自动处理浏览器前缀的一个插件。 如此一来，你在编码时不再需要考虑任何浏览器前缀的问题，可以专心撸码。
- postcss-cssnext： 其实就是cssnext。该插件可以让我们使用CSS未来的特性，其会对这些特性做相关的兼容性处理。
- cssnano：主要用来压缩和清理css代码。
- postcss-px-to-viewport： 主要用来把px单位转换为vw、vh、vmin或者vmax这样的视窗单位。
- postcss-aspect-ratio-mini： 主要用来处理元素容器宽高比。
- postcss-write-svg： 主要用来处理移动端1px的解决方案。该插件主要使用的是border-image和background来做1px的相关处理。