const path = require("path");

module.exports={
    entry: "./src/index.js",
  output: {
    filename: "main.js", // 打包后的文件名称
    path: path.resolve("dist") // 打包后的目录，必须是绝对路径
  },
    module:{
        rules:[
            {
                test: /\.js$/, //babel-loader很慢，需要确保转译尽可能少的文件。
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    }

}