import game from "./game";

var guide = function() {
  this.create = function() {
    // 添加背景
    var bg = game.add.image(0, 0, "indexBg");
    bg.width = game.world.width;
    bg.height = game.world.height;
  };
};

export default guide;
