import game from "./game";
import { fitHeight, voiceFlag } from "./util/index";

var rule = function() {
  this.create = function() {
    var readyMusic = game.add.audio("ready");
    // 添加背景
    var bg = game.add.image(0, 0, "rule");
    bg.width = game.world.width;
    bg.height = game.world.height;

    // 添加ready-go按钮
    var readyBtn = game.add.sprite(
      game.world.centerX * 0.5,
      game.world.height * 0.7,
      "readyBtn"
    );
    readyBtn.inputEnabled = true;
    fitHeight(0.5, "readyBtn", readyBtn);
    // 给开始按钮添加点击事件
    readyBtn.events.onInputDown.add(function() {
      game.state.start("play");
      if (voiceFlag) readyMusic.play();
    });
  };
};

export default rule;
