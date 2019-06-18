import game from "./game";
import { fitHeight } from "./util/index";

var success = function() {
  var scoreNum = 0;
  this.init = function() {
    scoreNum = arguments[0];
  };
  this.create = function() {
    // 添加背景
    var bg = game.add.image(0, 0, "success");
    bg.width = game.world.width;
    bg.height = game.world.height;

    // 添加分数
    var title = game.add.text(
      game.world.width * 0.75,
      game.world.height * 0.18,
      scoreNum + "+",
      {
        fontSize: "20px",
        fill: "#84401a"
      }
    );
    title.anchor.setTo(0.5, 0.5);

    // 添加领取奖品按钮
    var award = game.add.sprite(
      game.world.centerX * 0.5,
      game.world.height * 0.8,
      "award"
    );
    award.inputEnabled = true;
    fitHeight(0.5, "award", award);
    // 给领取奖品按钮添加点击事件
    award.events.onInputDown.add(function() {
      game.state.start("play");
    });
  };
};

export default success;
