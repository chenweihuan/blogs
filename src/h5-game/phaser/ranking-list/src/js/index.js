import game from "./game";
import boot from "./boot";
import preload from "./preload";
import fail from "./fail";

import "./../css/index.css";

// 定义场景
var states = {
  // 加载进度
  boot: boot,
  // 加载场景
  preload: preload,
  fail: fail
};

// 添加场景到游戏示例中
Object.keys(states).map(key => {
  game.state.add(key, states[key]);
});

// 启动游戏
game.state.start("boot");
