## webpack4.x通过环境变量设置publicPath

1. 修改package.json
```
"scripts": {
  "cdn-build": " webpack --env.cdn --mode production",
  "build": "webpack --mode production",
  "start": "webpack-dev-server --mode development"
},
```

2. 修改webpack.config.js
```
let config = {};
module.exports = (env, argv) => {
  //env：环境对象
  //argv：描述传递给 webpack 的选项  
  if (argv.mode === "development") {
    //开发环境的配置更改
    config.output.publicPath = "./";
  }
  if (argv.mode === "production") {
    // 生产环境的配置更改
    config.output.filename = "main.[hash:4].js";
    config.devServer = {};
    config.plugins.push(new CleanWebpackPlugin());
    config.output.publicPath = "https://test.com/";
  }
  if (env && env.cdn) {
    //cdn环境下的配置更改
    config.output.publicPath = "https://cdn.example.com/";
  }

  return config;
};
```

注：对比 [vue-cli通过环境变量设置publicPath](./../../../vue/vue-cli/publicPath.md)

参考：[webpack导出为一个函数](https://webpack.docschina.org/configuration/configuration-types/#%E5%AF%BC%E5%87%BA%E4%B8%BA%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0)