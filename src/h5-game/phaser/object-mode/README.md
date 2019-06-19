## 使用对象池模式优化游戏性能
1. 定义  
定义一个池对象，其包含了一组可重用对象。 其中每个可重用对象都支持查询“使用中”状态，说明它是不是“正在使用”。 池被初始化时，它就创建了整个对象集合，然后初始化所有对象到“不在使用中”状态。  
当你需要新对象，向池子要一个。 它找到一个可用对象，初始化为“使用中”然后返回。 当对象不再被需要，它被设置回“不在使用中”。 通过这种方式，可以轻易地创建和销毁对象而不必分配内存或其他资源。

2. 何时使用  
对象池经常用在粒子系统生成粒子，和子弹，还有生成敌人等等，或者是需要播放的声音。这些都是可重用的对象。  
3. 基于phaser的对象池模式  
以[天降火鸡](./../turkey)中重复生成降落的火鸡和炸弹为例。  
```
// 1、添加火鸡和炸弹组
let turkeyBombs = game.add.group();
let turkeyTypes = ["turkey", "bomb"];//火鸡和炸弹类型

//2、生成精灵池，包括三个火鸡和三个炸弹
turkeyBombs.createMultiple(3, turkeyTypes); 

//3、开启定时器
let turkeyTimer = game.time.create(true);
turkeyTimer.loop(500, ()=> {
    var x = Math.random() * game.world.width;
    turkeyBombs.children.sort(() => Math.random() - 0.5); //乱序turkeyBombs
    //获取第一个不显示对象。
    var turkeyBomb = turkeyBombs.getFirstExists(false,true,x,10 + score.height);
    // 设置火鸡和炸弹加入物理运动
    game.physics.enable(turkeyBomb);

    // 设置火鸡与游戏边缘碰撞
    turkeyBomb.body.collideWorldBounds = true;
    turkeyBomb.body.onWorldBounds = new Phaser.Signal();
    turkeyBomb.body.onWorldBounds.add(function(turkeyBomb, up, down) {

// 4、边缘碰撞之后，杀死火鸡或炸弹。
        if (down) turkeyBomb.kill();
    });
});
turkeyTimer.start();
```