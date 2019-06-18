import "pixi";
import "p2";
import Phaser from "phaser";
var width = window.innerWidth;
var height = window.innerHeight;

// 创建游戏实例
var game = new Phaser.Game(width, height, Phaser.AUTO, "#game");
export default game;

// import(/* webpackChunkName: 'phaser'*/ "phaser").then(Phaser => {
//     var width = window.innerWidth;
//     var height = window.innerHeight;
//     // 创建游戏实例
//     var game = new Phaser.Game(width, height, Phaser.AUTO, "#game");
//     export default game;
// });

