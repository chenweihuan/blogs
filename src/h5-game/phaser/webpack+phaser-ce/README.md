## 使用 webpack4.x 安装 phaser-ce@2.11.0

安装使用 phaser-ce 的方法有两种，一个是引入 CDN 文件，

```
<script src="//cdn.jsdelivr.net/npm/phaser-ce@2.12.0"></script>
```

另外一种就是使用 webpack 安装。

1.  安装 phaser-ce@2.11.0 和 expose-loader

```
npm install -S phaser-ce@2.11.0
npm install -D expose-loader
```

> expose-loader：把一个模块导出并付给一个全局变量。例如下面的{ test: /pixi\.js/, use: ["expose-loader?PIXI"] }，就是把pixi.js中exports出来的变量付给全局变量"PIXI"，这样的话就不会出现PIXI is not defined的错误了。

2. 配置 webpack.config.js

```
// Phaser webpack config
var phaserModule = path.join(__dirname, "/node_modules/phaser-ce/");
var phaser = path.join(phaserModule, "build/custom/phaser-split.js");
var pixi = path.join(phaserModule, "build/custom/pixi.js");
var p2 = path.join(phaserModule, "build/custom/p2.js");

module.exports = {
  //...
  module: {
    rules: [
      //...
      { test: /pixi\.js/, use: ["expose-loader?PIXI"] },
      { test: /phaser-split\.js$/, use: ["expose-loader?Phaser"] },
      { test: /p2\.js/, use: ["expose-loader?p2"] }
    ]
  },
  resolve: {
    alias: {
      phaser: phaser,
      pixi: pixi,
      p2: p2
    }
  }
};
```

3. 在 index.js 引入相关资源

```
import "pixi";
import "p2";
import Phaser from "phaser";

var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, "#game");

export default game;
```

### 控制台报错：PIXI is not defined

如果只安装了 phaser-ce，没引入 PIXI 和 p2，就会报这个错。根据上面的步骤来写就没问题啦。其实官方 github 也有说的，[PIXI is not defined](https://github.com/photonstorm/phaser/issues/2762)，或者参考[phaser-es6-webpack](https://github.com/lean/phaser-es6-webpack)的目录。
