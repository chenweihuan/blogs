## 从零搭建 webpack 配置 - devServer(基于 webpack4.x)

在我们的日常开发中，还需要几个功能：提供 HTTP 服务而不是使用本地文件预览和监听文件变化并自动刷新网页， 做到实时预览。之前我都是安装 http-server 的，可是人家 webpack 本身就配有 devServer 呀，你干嘛不用？[webpack 官方文档 devServer](https://webpack.docschina.org/configuration/dev-server/#src/components/Sidebar/Sidebar.jsx)

1. 安装 devServer

```
npm i -D webpack-dev-server
```

2. 在 webpack.config.js 添加 devServer 配置

```
var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, "src"), //你会发现并没有文件输出到dist目录，因为DevServer会把webpack构建出的文件保存在内存中，你是找不到那些文件的，在要访问输出的文件时，必须通过http服务访问。
    compress: true,//一切服务都启用 gzip 压缩
    port: 8080 //端口号
  }
};
```

3. 在 package.json 文件的"scripts"属性下增加了"start"属性

```
"scripts": {
  //...
  "start": "webpack-dev-server"
},
```

运行 npm start 之后，打开http://localhost:8080/即可调试开发环境下的代码。

<br/><br/>

### 热更新和自动刷新的区别

启动 devServer，默认会自动刷新，就是说你对 html,css,js 文件做了修改并保存后，浏览器会默认刷新一次展现修改后的效果。在配置 devServer 的时候，如果 hot 为 true，就代表开启了热更新，也就是如果将 index.js 某个变量的值进行修改保存后，会在不刷新页面的情况下直接修改掉。

1. 配置 webpack.config.js

```
let webpack = require('webpack');

module.exports = {
    plugins: [
        // 热更新，热更新不是刷新
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        //...
        hot: true
    }
}
```

2. 在index.js前面添加一下代码
```
if (module.hot) {
    // 实现热更新
    module.hot.accept();
}
```

### host属性
如果不仅要在http://localhost:8080/上打开，还需要在http://本机ip:8080/打开，那么请设置host为"0.0.0.0"。这样的话，只要手机和电脑连上同一个wifi，就可以进行移动端的网页调试了。
```
devServer: {
  //...
  host:"0.0.0.0"
}
```


### 待办事项
-[x] 模块热更新原理