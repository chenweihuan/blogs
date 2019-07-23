## Phaser 中的事件机制

1. 输入事件分为两种，一种是作用于全局的，

```js
game.input.onDown.add(()=> {
    //...
});
```

另一种是作用与一个对象（精灵）上的，比如在精灵上点击。

```js
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

2. 设置元素的隐藏和显示  
1）使用game.add.sprite()新建sprite元素。  
2）设置inputEnabled为true。  
3）设置visible，true为可见的，false为隐藏的。  
```js
let voiceOpen = game.add.sprite(50,50,"voiceOpen");
voiceOpen.inputEnabled = true;
voiceOpen.events.onInputDown.add(()=> {
  voiceOpen.visible = false;
});
```
### 待办事项
- [x] 键盘按下、手指触摸事件...
