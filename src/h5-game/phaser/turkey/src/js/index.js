import game from "./game";
import boot from "./boot";
import preload from "./preload";
import guide from "./guide";
import rule from "./rule";
import introduce from "./introduce";
import play from "./play";
import success from "./success";

import "./../css/index.css";

// 定义场景
var states = {
  // 加载进度
  boot: boot,
  // 加载场景
  preload: preload,
  // 引导页场景
  guide: guide,
  // 规则显示场景
  rule: rule,
  // 活动介绍场景
  introduce: introduce,
  // 游戏场景
  play: play,
  // 结束场景
  success: success
};

// 添加场景到游戏示例中
Object.keys(states).map(key => {
  game.state.add(key, states[key]);
});

// 启动游戏
game.state.start("boot");
