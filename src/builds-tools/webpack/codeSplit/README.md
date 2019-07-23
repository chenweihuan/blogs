## 从零搭建webpack配置 - 代码分割
当我引用第三方库的时候，如果都打包到一个js文件里面，会导致打包文件过大，更新的时候就会重新下载整份代码。所以需要把第三方代码和逻辑代码分割开。  

常用的代码分割分两种：
1. 入口起点。使用 entry 配置手动地分离代码。
```
module.exports = {
  entry: {
    index: './src/index.js',
    another: './src/another-module.js'
  },
  ...
};
```
其实就是根据index和another这两个入口，递归寻找文件，然后打包出来。但如果index和another引入了重复的部分（例如都import Phaser from "phaser"）的话，就会重复打包，打包的bundle会变得更大。所以还需要SplitChunksPlugin插件提取公共依赖模块。
```
module.exports = {
    entry: {
      index: './src/index.js',
      another: './src/another-module.js'
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    }
    ...
};
```

2. 动态导入。require的方法就不说了，看看inport方法的吧。
```
import(/* webpackChunkName: 'phaser'*/ "phaser").then(Phaser => {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var game = new Phaser.Game(width, height, Phaser.AUTO, "#game"); 
    // export default game;
    // 因为这是异步的，所以不能export，剩下的逻辑都要在回调函数里面调用？好奇葩....，肯定有解决办法的。有办法的大佬请指教。
});
```

### 使用动态import导入时，控制台报错。
具体报错信息：Add @babel/plugin-syntax-dynamic-import (https://git.io/vb4Sv) to the 'plugins' section of your Babel config to enable parsing.  
翻译一下，就是要你添加@babel/plugin-syntax-dynamic-import到babel的plugins里面。  
解决方法：
1. 安装@babel/plugin-syntax-dynamic-import，支持babel语法动态导入。
2. 修改.babelrc文件。
```js
{
  "plugins": ["@babel/plugin-syntax-dynamic-import"],
  ...
}
```