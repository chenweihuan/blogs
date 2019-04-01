const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

// Phaser webpack config
var phaserModule = path.join(__dirname, "/node_modules/phaser-ce/");
var phaser = path.join(phaserModule, "build/custom/phaser-split.js");
var pixi = path.join(phaserModule, "build/custom/pixi.js");
var p2 = path.join(phaserModule, "build/custom/p2.js");

var config = {
  entry: "./src/js/index.js",
  output: {
    filename: "main.js", // 打包后的文件名称
    path: path.resolve("dist") // 打包后的目录，必须是绝对路径
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"] // 从右向左解析
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 4092, // 小于8k的图片自动转成base64格式，并且不会存在实体图片
              outputPath: "assets/images/" // 图片打包后存放的目录
            }
          }
        ]
      },
      {
        test: /\.(mp3)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              outputPath: "assets/audio/" // 音频打包后存放的目录
            }
          }
        ]
      },
      { test: /pixi\.js/, use: ["expose-loader?PIXI"] },
      { test: /phaser-split\.js$/, use: ["expose-loader?Phaser"] },
      { test: /p2\.js/, use: ["expose-loader?p2"] }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    host: "0.0.0.0", //在本机可以使用localhost方问，也可以使用本机ip来访问。项目在别的地方download下来，也是如此。
    port: 8080,
    openPage: "?debug=1"
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 用哪个html作为模板,在src目录下创建一个index.html页面当做模板来用
      template: "./src/index.html",
      hash: true // 会在打包好的bundle.js后面加上hash串
    })
  ],
  resolve: {
    alias: {
      phaser: phaser,
      pixi: pixi,
      p2: p2
    }
  }
};

module.exports = (env, argv) => {
  if (argv.mode === "development") {
    //开发环境的配置更改
  }
  if (argv.mode === "production") {
    // 生产环境的配置更改
    config.output.filename = "main.[hash:4].js";
    config.devServer = {};
    config.plugins.push(new CleanWebpackPlugin());
  }
  if (env && env.cdn) {
    //cdn环境下的配置更改
    config.output.publicPath = "https://cdn.example.com/";
  }

  return config;
};
