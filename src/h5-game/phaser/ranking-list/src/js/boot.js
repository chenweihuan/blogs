import game from "./game";

var boot = function() {
  this.preload = function() {
    game.load.image("loading", require("./../assets/images/loading.png")); //加载进度条图片资源
    game.load.image(
      "loadingContainer",
      require("./../assets/images/loading_container.png")
    );
    game.load.image("turkeyBg", require("./../assets/images/turkey_bg.png"));
  };
  this.create = function() {
    game.state.start("preload"); //加载完成后，调用preload场景
  };
};

export default boot;
