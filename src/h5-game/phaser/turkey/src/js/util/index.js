import game from "./../game";

// 适配图片的高度
export var fitHeight = function(percentage, name, fitObj) {
  var nameImage = game.cache.getImage(name);
  fitObj.width = game.world.width * percentage;
  fitObj.height = (fitObj.width / nameImage.width) * nameImage.height;
};

//是否开启声音
export var voiceFlag = true;
export var changeVoiceFlag = function() {
  voiceFlag = !voiceFlag;
};
