## Daily-Interview-Question

- [第101题：修改以下 print 函数，使之输出 0 到 99](#修改以下print函数使之输出0到99)

### 修改以下 print 函数，使之输出 0 到 99
> 要求：
> 1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码  
> 2、不能修改 Math.floor(Math.random() * 1000  
> 3、不能使用全局变量  
```
function print(n){
  setTimeout(() => {
    console.log(n);
  }, Math.floor(Math.random() * 1000));
}
for(var i = 0; i < 100; i++){
  print(i);
}
```
<strong>思路：</strong>  一开始我居然以为传进print函数的i一直是100，认真想想，for循环里面的代码已经写到print函数里，根据js函数作用域的规则，传进print函数的i是0,1,2...所以从setTimeout的参数入手，要么修改第一个参数为立即执行函数等，要么添加第三个参数。
```
for(var i = 0; i < 100; i++){
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// 打印100个100
```

1. 修改setTimeout的第一个参数为立即执行函数、JS表达式、call语法，反正就是编译到那里就要执行了。
```
function print(n){
  setTimeout((() => {
  	console.log(n);
  })(),Math.floor(Math.random() * 1000));
}

function print(n){
  setTimeout((() => {
  	console.log(n);
  }).call(null),Math.floor(Math.random() * 1000));
}

function print(n){
  setTimeout(console.log(n),Math.floor(Math.random() * 1000));
}
```
2. 彻底理解setTimeout函数[MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/setTimeout)的参数说明，原来还能添加第三、四个参数，后面的参数是附加参数，一旦定时器到期，它们会作为参数传递给第一个参数function。
```
function print(n){
  setTimeout(() => {
    console.log(n);
  },10, Math.floor(Math.random() * 1000));
}
//在10ms后，执行第一个参数function，而后面的Math.floor(Math.random() * 1000)将作为参数传给第一个参数function。
```