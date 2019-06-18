## 基于Phaser的加载进度条实现
1. game.load.setPreloadSprite(sprite,direction)  
“预加载”精灵将根据加载器的实时百分比调整其宽度或高度裁剪，这使您可以轻松地为游戏制作加载条。  
sprite，在加载过程中被裁剪的sprite或image；  
direction，可选参数，值为零意味着精灵将被水平裁剪，值为1意味着它将被垂直裁剪。  

2. game.load.onFileComplete.add(callback)  
监听文件的加载。  
callback，回调函数的第一个参数为百分比，意为加载到多少。  

3. game.load.onLoadComplete.add(callback)  
监听文件加载完毕。  
callback，文件加载完毕之后的回调函数。  

上一张效果图，[源代码传送门](./src)。
<div align="left"><img src="./doc/loading.png" width="200px"/></div>

