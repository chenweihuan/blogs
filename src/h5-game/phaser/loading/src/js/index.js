import game from "./game";
import boot from "./boot";
import preload from "./preload";
import guide from "./guide";
import "./../css/index.css";

// 定义场景
let states = { boot, preload, guide };

// 添加场景到游戏示例中
Object.keys(states).map(key => {
  game.state.add(key, states[key]);
});

// 启动游戏
game.state.start("boot");
