### 设置边框颜色渐变

边框颜色渐变分两种情况：一是从上到下边框颜色渐变：

<div align="center"><img src="./../doc/border_1.png" /></div> 

```
.box{
    width: 100px;
    height: 100px;
    border:10px solid #ddd;
    border-image: linear-gradient(#F80, #2ED) 20 20;
}
```
另一种是从外到里边框颜色渐变， 每一条边框都设置了5种颜色，且都占据着5px的宽度。这个时候每种颜色的border-width为1px。事实上，如果我们边框设置了x个像素的宽度，并且为每条边框设置了y种颜色，若x>y，则前y-1种颜色每种占据了1px，最后一种颜色占据x-y+1个像素。

<div align="center"><img src="./../doc/border_2.png" /></div> 

```
.box {
    width: 200px;
    height: 100px;
    border: 10px solid transparent;
    border-radius: 15px 0 15px 0;
    -moz-border-top-colors:#a0a #909 #808 #707 #606 #505 #404 #303;
    -moz-border-right-colors:#a0a #909 #808 #707 #606 #505 #404 #303;
    -moz-border-bottom-colors:#a0a #909 #808 #707 #606 #505 #404 #303;
    -moz-border-left-colors:#a0a #909 #808 #707 #606 #505 #404 #303;
}
```
