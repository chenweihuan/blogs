import game from "./game";

var preload = function() {
  this.preload = function() {
    // 加载进度条
    var loadImg = game.cache.getImage("loading");
    var x = (game.world.width - loadImg.width) / 2;
    var y = game.world.height / 2 - loadImg.height;
    var preloadSprite = game.add.sprite(x, y, "loading"); //创建显示loading进度的sprite
    game.load.setPreloadSprite(preloadSprite); //用setPreloadSprite方法来实现动态进度条的效果

    game.add.image(x - 8, y - 8, "loadingContainer");
    var title = game.add.text(
      game.world.centerX,
      game.world.centerY + 30,
      "LOADING...",
      {
        fontSize: "20px",
        fill: "#fff"
      }
    );
    title.anchor.setTo(0.5, 0.5);

    var turkeyBgImg = game.cache.getImage("turkeyBg");
    var turkeyBg = game.add.image(
      x,
      game.world.height / 2 - turkeyBgImg.height,
      "turkeyBg"
    );

    game.load.crossOrigin = "anonymous"; // 设置跨域

    //加载游戏其他资源
    game.load.image("bg", require("./../assets/images/bg.png"));
    game.load.image("bracket", require("./../assets/images/bracket.png"));
    game.load.image("turkey", require("./../assets/images/turkey.png"));
    game.load.image("bomb", require("./../assets/images/bomb.png"));
    game.load.image("score", require("./../assets/images/score.png"));
    game.load.image("heart", require("./../assets/images/heart.png"));
    game.load.image("indexBg", require("./../assets/images/index-bg.png"));
    game.load.image("beginBtn", require("./../assets/images/begin-btn.png"));
    game.load.image("rule", require("./../assets/images/rule.png"));
    game.load.image("ruleBtn", require("./../assets/images/rule-btn.png"));
    game.load.image("readyBtn", require("./../assets/images/ready-btn.png"));
    game.load.image("voiceOpen", require("./../assets/images/voice-open.png"));
    game.load.image(
      "voiceClose",
      require("./../assets/images/voice-close.png")
    );
    game.load.image("introduce", require("./../assets/images/introduce.png"));
    game.load.image("award", require("./../assets/images/award.png"));
    game.load.image("failBtn", require("./../assets/images/fail_btn.png"));
    game.load.image("fail", require("./../assets/images/fail.png"));
    game.load.image("success", require("./../assets/images/success.png"));
    game.load.image("heroBg", require("./../assets/images/hero_bg.png"));
    game.load.image(
      "rankAgain",
      require("./../assets/images/btn_rank_again.png")
    );
    game.load.image("rankMe", require("./../assets/images/rank_me.png"));
    game.load.image("rankNum", require("./../assets/images/rank_num.png"));
    game.load.image(
      "rankNumTop",
      require("./../assets/images/rank_num_top.png")
    );
    game.load.image("rankScore", require("./../assets/images/rank_score.png"));
    game.load.audio("good", require("./../assets/audio/good.mp3"));
    game.load.audio("perfect", require("./../assets/audio/perfect.mp3"));
    game.load.audio("oops", require("./../assets/audio/oops.mp3"));
    game.load.audio("ready", require("./../assets/audio/ready.mp3"));
    game.load.audio("turkey", require("./../assets/audio/turkey.mp3"));

    //监听完一个文件记载，移动火鸡的位置
    game.load.onFileComplete.add(function(progress) {
      turkeyBg.x =
        x + loadImg.width * (progress / 100) - turkeyBgImg.width + 10;
    });
    // 监听加载完毕事件
    game.load.onLoadComplete.add(onLoad);
    // 最小展示时间为1.5秒
    var deadLine = false;
    setTimeout(function() {
      deadLine = true;
    }, 1500);
    // 加载完毕回调方法
    function onLoad() {
      if (deadLine) {
        // 已到达最小展示时间，可以进入下一个场景
        game.state.start("guide");
      } else {
        // 还没有到最小展示时间，0.5秒后重试
        setTimeout(onLoad, 500);
      }
    }
  };
};

export default preload;
