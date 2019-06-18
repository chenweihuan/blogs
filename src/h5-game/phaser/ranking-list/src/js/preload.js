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

    //加载游戏其他资源
    game.load.image("heroBg", require("./../assets/images/hero_bg.png"));
    game.load.image("rankScore", require("./../assets/images/rank_score.png"));

    //监听完一个文件记载，移动火鸡的位置
    game.load.onFileComplete.add(function(progress) {
      turkeyBg.x =
        x + loadImg.width * (progress / 100) - turkeyBgImg.width + 10;
    });
    // 监听加载完毕事件
    game.load.onLoadComplete.add(onLoad);
    // 最小展示时间为1秒
    var deadLine = false;
    setTimeout(function() {
      deadLine = true;
    }, 1000);
    // 加载完毕回调方法
    function onLoad() {
      if (deadLine) {
        // 已到达最小展示时间，可以进入下一个场景
        game.state.start("fail");
      } else {
        // 还没有到最小展示时间，0.5秒后重试
        setTimeout(onLoad, 500);
      }
    }
  };
};

export default preload;
