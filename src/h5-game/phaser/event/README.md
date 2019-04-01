## Phaser 中的事件机制

输入事件分为两种，一种是作用于全局的，

```
game.input.onDown.add(()=> {
    //...
});
```

另一种是作用与一个对象（精灵）上的，比如在精灵上点击。

```
var beginBtn = game.add.sprite(
  game.world.width * 0.5,
  game.world.height * 0.8,
  "beginBtn"
);
//设置该精灵为可点击的
beginBtn.inputEnabled = true;
// 给开始按钮添加点击事件
beginBtn.events.onInputDown.add(()=> {
  //...
});
```

### 待办事项
- [x] 键盘按下、手指触摸事件...
