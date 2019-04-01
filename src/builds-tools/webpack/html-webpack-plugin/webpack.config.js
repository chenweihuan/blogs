const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");

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
    })
  ]
};
