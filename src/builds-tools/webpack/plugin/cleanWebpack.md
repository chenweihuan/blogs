## 安利插件 -- clean-webpack-plugin

在我们每次 npm run build 的时候都会在 dist 目录下创建很多打好的包，如果积累过多可能也会混乱，所以应该在每次打包之前将 dist 目录下的文件都清空，然后再把打好包的文件放进去，这里提供一个 clean-webpack-plugin 插件。[clean-webpack-plugin 文档](https://github.com/johnagan/clean-webpack-plugin)

```
npm i clean-webpack-plugin -D
```

```
let CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    plugins: [
        // 打包前先清空，默认情况下，此插件将删除webpack output.path目录中的所有文件。所以不需要添加"dist"这个参数
        new CleanWebpackPlugin()
    ]
}
```