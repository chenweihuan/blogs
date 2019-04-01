## 从零搭建 webpack 配置 - 引用图片(基于 webpack4.x)

1. 安装 file-loader 和 url-loader

```
npm i file-loader url-loader -D
```

2. 引用图片有几种方式：在 css 文件里引入的如背景图之类的图片，

```
module.exports = {
    module: {
        rules: [
            //..
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,    // 小于8k的图片自动转成base64格式，并且不会存在实体图片
                            outputPath: 'assets/images/'   // 图片打包后存放的目录
                        }
                    }
                ]
            }
        ]
    }
}
```

还有一种就是在页面 img 引用图片。

```
npm i html-withimg-loader -D
```

```
//webpack.config.js
module.exports = {
    module: {
        rules: [
            {
                test: /\.(htm|html)$/,
                use: 'html-withimg-loader'
            }
        ]
    }
}
```

### 引用音频或者字体图片和 svg 图片

通过 file-loader 来解析就 ok 啦。

```
module.exports = {
    module: {
        rules: [
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
        ]
    }
}
```

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.(eot|ttf|woff|svg)$/,
                use: 'file-loader'
            }
        ]
    }
}
```

### 在js里引用图片
例如在phaser中，预加载游戏资源的话，
```
game.load.image("bg", "./../assets/images/bg.png");
```
但是这样是打包不出来的，需要使用require()来处理。应改为：
```
game.load.image("bg", require("./../assets/images/bg.png"));
```