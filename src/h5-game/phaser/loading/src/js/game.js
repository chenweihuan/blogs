import "pixi";
import "p2";
import Phaser from "phaser";
let width = window.innerWidth;
let height = window.innerHeight;

// 创建游戏实例
let game = new Phaser.Game(width, height, Phaser.AUTO, "#game");
export default game;

