import game from "./game";
import { fitHeight, voiceFlag } from "./util/index";

var play = function() {
  var bracket; // 篮子
  var turkeyBombs; // 火鸡和炸弹
  var scoreNum; // 得分
  var title; // 分数
  var life; //生命值
  var goodMusic, oopsMusic, perfectMusic; //背景音乐
  var scoreWidth = 0.35; //记分牌的宽度
  var heartWidth = 0.08; //每块心形的宽度
  var turkeyBombWidth = 0.2; //火鸡和炸弹的宽度

  this.create = function() {
    // 初始化
    scoreNum = 0;
    life = 5;
    // 缓存音乐
    goodMusic = game.add.audio("good");
    oopsMusic = game.add.audio("oops");
    perfectMusic = game.add.audio("perfect");
    // 开启物理引擎
    game.physics.startSystem(Phaser.Physics.Arcade);
    game.physics.arcade.gravity.y = 300;

    // 添加背景
    var bg = game.add.image(0, 0, "bg");
    bg.width = game.world.width;
    bg.height = game.world.height;
    //添加记分牌和分数
    var score = game.add.image(10, 20, "score");
    fitHeight(scoreWidth, "score", score);
    title = game.add.text(30, 26, "得分：" + scoreNum, {
      fontSize: "20px",
      fontWeight: "bold",
      fill: "#fff"
    });

    //添加生命值
    var lifes = [];
    for (let i = 0; i < life; i++) {
      let heart = game.add.image(
        game.world.width - 30 * (i + 1) - 20,
        26,
        "heart"
      );
      lifes.push(heart);
      fitHeight(heartWidth, "heart", heart);
    }

    // 添加篮子
    bracket = game.add.sprite(
      game.world.centerX,
      game.world.height * 0.9,
      "bracket"
    );
    fitHeight(0.25, "bracket", bracket);
    bracket.anchor.setTo(0.5, 0.5);
    game.physics.enable(bracket);
    bracket.body.allowGravity = false;

    // 是否正在触摸
    var touching = false;
    // 监听按下事件
    game.input.onDown.add(function(pointer) {
      // 要判断是否点住主角，避免瞬移
      if (Math.abs(pointer.x - bracket.x) < bracket.width / 2) touching = true;
    });
    // 监听离开事件
    game.input.onUp.add(function() {
      touching = false;
    });
    // 监听滑动事件
    game.input.addMoveCallback(function(pointer, x, y, isTap) {
      if (!isTap && touching) bracket.x = x;
    });

    // 添加火鸡和炸弹组
    turkeyBombs = game.add.group();
    // 火鸡和炸弹类型
    var turkeyTypes = ["turkey", "bomb"];
    turkeyBombs.createMultiple(3, turkeyTypes); //生成精灵池，包括三个火鸡和三个炸弹
    var turkeyTimer = game.time.create(true);
    turkeyTimer.loop(500, function() {
      var x = Math.random() * game.world.width;
      turkeyBombs.children.sort(() => Math.random() - 0.5); //乱序turkeyBombs
      var turkeyBomb = turkeyBombs.getFirstExists(
        //获取第一个不显示对象。
        false,
        true,
        x,
        10 + score.height
      );
      // 设置火鸡和炸弹加入物理运动
      game.physics.enable(turkeyBomb);
      //设置火鸡和炸弹的大小
      turkeyBomb.key == "turkey"
        ? fitHeight(turkeyBombWidth, "turkey", turkeyBomb)
        : fitHeight(turkeyBombWidth, "bomb", turkeyBomb);

      // 设置苹果与游戏边缘碰撞，
      turkeyBomb.body.collideWorldBounds = true;
      turkeyBomb.body.onWorldBounds = new Phaser.Signal();
      turkeyBomb.body.onWorldBounds.add(function(turkeyBomb, up, down) {
        if (down) {
          turkeyBomb.kill();
          if (turkeyBomb.key !== "bomb") {
            //如果下的不是炸弹
            --life;
            lifes.pop().kill();
          }
          if (life <= 0) {
            game.state.start("success", true, false, scoreNum);
            // if (scoreNum >= 50) {
            //   game.state.start("success", true, false, scoreNum);
            // } else {
            //   game.state.start("fail", true, false, scoreNum);
            // }
          }
        }
      });
    });
    turkeyTimer.start();
  };
  this.update = function() {
    // 监听接触事件
    game.physics.arcade.overlap(
      bracket,
      turkeyBombs,
      pickTurkeyBomb,
      null,
      this
    );
  };
  // 接触事件
  function pickTurkeyBomb(bracket, turkeyBomb) {
    var key = turkeyBomb.key;
    if (key === "turkey") {
      scoreNum += 15;
      if (voiceFlag)
        Math.random() > 0.5 ? goodMusic.play() : perfectMusic.play();
    } else {
      scoreNum -= 5;
      if (voiceFlag) oopsMusic.play();
    }
    title.text = "得分：" + scoreNum;
    turkeyBomb.kill();
  }
};

export default play;
