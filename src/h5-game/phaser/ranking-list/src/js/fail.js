import game from "./game";

// 使image或sprite保持正常的宽高比
function fitHeight(percentage, name, fitObj) {
  let nameImage = game.cache.getImage(name);
  fitObj.width = game.world.width * percentage;
  fitObj.height = (fitObj.width / nameImage.width) * nameImage.height;
};

let fail = function () {
  this.create = function () {
    let gameWidth = game.world.width,//游戏屏幕宽度
      gameHeight = game.world.height;//游戏屏幕高度
    let data = [1, 2, 3, 4, 5]; //排行榜数据
    // 添加背景
    let bg = game.add.image(0, 0, "heroBg");
    bg.width = gameWidth;
    bg.height = gameHeight;

    let len = data.length;
    //创建分数的group
    let groupScore = game.add.group();
    groupScore.createMultiple(len, "rankScore", 0, true);
    //创建分数
    data.forEach(value => {
      let title = game.add.text(0, 0, value, {
        fontSize: "20px",
        fill: "#ffffff",
        fontWeight: 500
      });
      groupScore.add(title);
    })
    groupScore.children.forEach((val, index) => {
      val.anchor.setTo(0.5, 0.5);
      val.x = gameWidth * 0.5;
      if (index < len) {
        fitHeight(0.36, "rankScore", val);
        val.y = gameHeight * (0.43 + index / 15);
      } else {
        val.y = gameHeight * (0.435 + (index - len) / 15);
      }
    });

    //设置mask
    let maskX = gameWidth * 0.2,
      maskY = gameHeight * 0.39,
      maskWidth = gameWidth * 0.6,
      maskHeight = gameHeight * 0.25;
    let mask = game.add.graphics(0, 0);
    mask.beginFill(0xffffff);
    mask.drawRect(maskX, maskY, maskWidth, maskHeight);
    groupScore.mask = mask;
    // 是否正在触摸
    let touching = false;
    let pointerY = 0;
    // 监听按下事件
    game.input.onDown.add(pointer => {
      pointerY = pointer.y;
      let maskBounds = mask._localBounds;
      if (
        (maskBounds.y < pointer.y && pointer.y < maskBounds.y + maskBounds.height) &&
        (maskBounds.x < pointer.x && pointer.x < maskBounds.x + maskBounds.width)) {
        touching = true;
      }
    });
    // 监听离开事件
    game.input.onUp.add(() => {
      touching = false;
    });

    // 监听滑动事件
    game.input.addMoveCallback(throttle(MoveCallback, 10));

    // 手指滑动事件的回调函数
    function MoveCallback(pointer, x, y, isTap) {
      let isTop = false,//是否到达顶部
        isBottom = false,//是否到达底部
        groupScoreFirstChild = groupScore.children[0],//group的第一个儿子，也就是最顶部的那个元素
        groupScoreLastChild = groupScore.children[groupScore.children.length - 1];//最后一个儿子，也就是最底部的元素
      //判断是否到达顶部
      if (groupScoreFirstChild.y - 20 > maskY) isTop = true;
      //判断是否到达底部
      if (groupScoreLastChild.y + 20 < maskY + maskHeight) isBottom = true;
      //只有两种情况能移动：手指往下滑而且没到顶部、手指往上滑而且没到底部
      if (
        (!isTap && touching && pointerY < y && !isTop) || //手指往下滑而且没到顶部
        (!isTap && touching && pointerY > y && !isBottom) //手指往上滑而且没到底部
      ) {
        groupScore.children.forEach(val => {
          val.y = val.y + (y - pointerY);
        });
        pointerY = y;
      }
      console.log(1);
    }

  };
};

// 节流函数
function throttle(func, wait) {
  var context, args;
  var previous = 0;
  return function () {
    var now = +new Date();
    context = this;
    args = arguments;
    if (now - previous > wait) {
      func.apply(context, args);
      previous = now;
    }
  }
}

export default fail;
