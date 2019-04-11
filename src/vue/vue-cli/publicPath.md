## 通过环境变量设置 publicPath

publicPath 会因我们的环境而不同，一般有三种情况：本地开发设置为"./"，测试环境设置为测试环境的 url，生产环境设置为 cdn 的 url。

最好的做法就是在 package.json 的 script 里面设置不同的参数，进而修改 vue.config.js 的 publicPath。

1. 修改 package.json，添加 BASE_URL，一般情况下，只有以 VUE_APP* 开头的变量，我们才能使用 process.env.VUE*APP*_的方式访问到它们。但是除了 VUE*APP*_ 变量之外，还有两个特殊的变量：

   > NODE_ENV：会是 "development"、"production" 或 "test" 中的一个。具体的值取决于应用运行的模式。  
   > BASE_URL：会和 vue.config.js 中的 publicPath 选项相符，即你的应用会部署到的基础路径。

   所以我只需要设置 BASE_URL 就好啦。

```
"scripts": {
  "serve": "cross-env BASE_URL=./ vue-cli-service serve",
  "build": "cross-env BASE_URL=https://test.com/ vue-cli-service build && ...",
  "cdn-build": "cross-env BASE_URL=https://cdn.com/ vue-cli-service build && ..."
},
```

2. 修改vue.config.js。
```
module.exports = {
  publicPath: process.env.BASE_URL
};
```

### cross-env的作用
如果script里面需要用到"&&"的话，就需要加上cross-env。配置中的的&&最开始使用的是";"，后来发现";"在windows环境中无法正常运行，于是改成了*unix和windows都兼容的"&&"。但是window还会报错呀，主要是windows不支持BASE_URL=./的设置方式。所以cross-env就登场了，主要是提供一个设置环境变量的scripts，让你能够以unix方式设置环境变量，然后在windows上也能兼容运行。

- 使用方法
1. 安装cross-env
```
npm install cross-env -D
```
2. 在BASE_URL=./前面添加cross-env。

注：对比 [webpack4.x通过环境变量设置publicPath](./../../builds-tools/webpack/webpack-config/publicPath.md)

参考：[vue-cli -- 在客户端侧代码中使用环境变量](https://cli.vuejs.org/zh/guide/mode-and-env.html#%E5%9C%A8%E5%AE%A2%E6%88%B7%E7%AB%AF%E4%BE%A7%E4%BB%A3%E7%A0%81%E4%B8%AD%E4%BD%BF%E7%94%A8%E7%8E%AF%E5%A2%83%E5%8F%98%E9%87%8F)
