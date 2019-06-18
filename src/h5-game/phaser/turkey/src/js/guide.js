import game from "./game";
import { fitHeight, voiceFlag, changeVoiceFlag } from "./util/index";

var guide = function() {
  this.create = function() {
    // 添加背景
    var bg = game.add.image(0, 0, "indexBg");
    bg.width = game.world.width;
    bg.height = game.world.height;

    // 添加关闭和开启声音按钮
    var voiceOpen = game.add.sprite(
      game.world.width * 0.88,
      game.world.height * 0.018,
      "voiceOpen"
    );
    var voiceClose = game.add.sprite(
      game.world.width * 0.88,
      game.world.height * 0.018,
      "voiceClose"
    );
    fitHeight(0.08, "voiceOpen", voiceOpen);
    voiceOpen.inputEnabled = true;
    fitHeight(0.08, "voiceClose", voiceClose);
    voiceClose.visible = false;
    voiceClose.inputEnabled = true;
    voiceOpen.events.onInputDown.add(function() {
      changeVoiceFlag();
      voiceClose.visible = true;
      voiceOpen.visible = false;
    });
    voiceClose.events.onInputDown.add(function() {
      changeVoiceFlag();
      voiceClose.visible = false;
      voiceOpen.visible = true;
    });

    // 添加开始按钮
    var beginBtn = game.add.sprite(
      game.world.centerX * 0.5,
      game.world.height * 0.8,
      "beginBtn"
    );
    fitHeight(0.5, "beginBtn", beginBtn);
    beginBtn.inputEnabled = true;
    // 给开始按钮添加点击事件
    beginBtn.events.onInputDown.add(function() {
      game.state.start("rule");
    });

    //添加规则按钮
    var ruleBtn = game.add.sprite(
      game.world.width * 0.35,
      game.world.height * 0.91,
      "ruleBtn"
    );
    fitHeight(0.3, "ruleBtn", ruleBtn);
    ruleBtn.inputEnabled = true;
    ruleBtn.events.onInputDown.add(function() {
      game.state.start("introduce");
    });

    //播放turkey音效
    var turkeyMusic = game.add.audio("turkey");
    if (voiceFlag) turkeyMusic.play();
  };
};

export default guide;
