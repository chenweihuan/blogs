const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js", // 打包后的文件名称
    path: path.resolve("dist") // 打包后的目录，必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.js$/, //babel-loader很慢，需要确保转译尽可能少的文件。
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    // 通过new一下这个类来使用插件
    new HtmlWebpackPlugin({
      // 用哪个html作为模板
      // 在src目录下创建一个index.html页面当做模板来用
      template: "./src/index.html",
      hash: true // 会在打包好的bundle.js后面加上hash串
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, "src"), //你会发现并没有文件输出到dist目录，因为DevServer会把webpack构建出的文件保存在内存中，你是找不到那些文件的，在要访问输出的文件时，必须通过http服务访问。
    compress: true,//一切服务都启用 gzip 压缩
    port: 8080 ,//端口号
    hot: true,
    host:"0.0.0.0"
  }
};
