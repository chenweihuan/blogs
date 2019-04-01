## resolve解析
在webpack的配置中，resolve我们常用来配置别名和省略后缀名。

### resolve.alias
1. 在webpack.config.js添加resolve
```
//以引入phaser-ce为例
var phaserModule = path.join(__dirname, "/node_modules/phaser-ce/");
var phaser = path.join(phaserModule, "build/custom/phaser-split.js");
var pixi = path.join(phaserModule, "build/custom/pixi.js");
var p2 = path.join(phaserModule, "build/custom/p2.js");

module.exports = {
    //...
    resolve: {
        alias: {
            phaser: phaser,
            pixi: pixi,
            p2: p2
        }
    },
}
```
2. 在需要引入pixi的时候就不需要import './node_modules/phaser-ce/build/custom/pixi.js'了，只需要
```
import "pixi";
import "p2";
import Phaser from "phaser";
```

### resolve.extensions
自动解析确定的扩展，默认值为：
```
module.exports = {
  //...
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.json']
  }
};
```
能够使用户在引入模块时不带扩展，
```
import File from '../path/to/file';
```
使用此选项，会覆盖默认数组，这就意味着 webpack 将不再尝试使用默认扩展来解析模块。对于使用其扩展导入的模块，例如，import SomeFile from "./somefile.ext"，要想正确的解析，一个包含“*”的字符串必须包含在数组中。