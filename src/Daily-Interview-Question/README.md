## Daily-Interview-Question

- [第100题：请写出如下代码的打印结果，考察原型和函数的理解](#第100题请写出如下代码的打印结果考察原型和函数的理解)
- [第101题：修改以下 print 函数，使之输出 0 到 99](#第101题修改以下-print-函数使之输出-0-到-99)
- [第110题：编程题，请写一个函数，完成以下功能](#第110题编程题请写一个函数完成以下功能)
- [第111题：编程题，对象的扁平化](#第111题编程题对象的扁平化)

### 第100题：请写出如下代码的打印结果，考察原型和函数的理解
```js
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();
let obj = new Foo();
obj.a();
Foo.a();
```
答案解析：
```js
function Foo() {
    Foo.a = function() {
        console.log(1)
    }
    this.a = function() {
        console.log(2)
    }
}
//到这里只是声明Foo函数，并没有执行

Foo.prototype.a = function() {
    console.log(3)
}
// 现在在 Foo 上挂载了原型方法 a ，方法输出值为 3。

Foo.a = function() {
    console.log(4)
}
// 现在在 Foo 上挂载了直接方法 a ，输出值为 4

Foo.a();
// 立刻执行了 Foo 上的 a 方法，也就是刚刚定义的直接方法，所以输出 4。注意，Foo.a()不会执行原型上的方法，通过new出来的实例才有可能执行。

let obj = new Foo();
/* 这里调用了 Foo 的构建方法。Foo 的构建方法主要做了两件事：
1. 将全局的 Foo 上的直接方法 a 替换为一个输出 1 的方法。
2. 在新对象上挂载直接方法 a ，输出值为 2。
*/

obj.a();
// 因为有直接方法 a ，不需要去访问原型链，所以使用的是构建方法里所定义的 this.a，输出 2

Foo.a();
// 构建方法里已经替换了全局 Foo 上的 a 方法，所以输出 1
```
<strong>总结自己混淆的东西：</strong>
1. Foo.a()不会执行构建方法里所定义的 this.a，通过new出来的实例才会执行。
```js
function Foo() {
    this.a = function() {
        console.log(2)
    }
}
Foo.a = function() {
    console.log(4)
}
Foo.a();//4
let obj = new Foo();
obj.a();//2
```
2. 同样，Foo.a()也不会执行原型上的方法，通过new出来的实例才会执行，当构建方法没声明this.a时。
```js
function Foo() { }
Foo.prototype.a = function() {
    console.log(3)
}
Foo.a = function() {
    console.log(4)
}
Foo.a();//4
let obj = new Foo();
obj.a();//3
```
记住啦，下次切勿混淆。

### 第101题：修改以下 print 函数，使之输出 0 到 99
> 要求：
> 1、只能修改 setTimeout 到 Math.floor(Math.random() * 1000 的代码  
> 2、不能修改 Math.floor(Math.random() * 1000  
> 3、不能使用全局变量  
```js
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
```js
for(var i = 0; i < 100; i++){
  setTimeout(() => {
    console.log(i);
  }, 0);
}
// 打印100个100
```

1. 修改setTimeout的第一个参数为立即执行函数、JS表达式、call语法，反正就是编译到那里就要执行了。
```js
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
```js
function print(n){
  setTimeout(() => {
    console.log(n);
  },10, Math.floor(Math.random() * 1000));
}
//在10ms后，执行第一个参数function，而后面的Math.floor(Math.random() * 1000)将作为参数传给第一个参数function。
```

### 第110题：编程题，请写一个函数，完成以下功能
[1,2,3,5,7,8,10] => 1~3,5,7~8,10
```js
let arr = [1,2,3,5,7,8,10];
function fn(arr) {
	let res = [];
	for(let i=0;i<arr.length;i++){
		let now = i;
		while(arr[i] === arr[i+1]-1)i++;
		res.push(i === now?arr[i]:arr[now]+"~"+arr[i]);
	}
	return res.join(",")
}
console.log(fn(arr));//1~3,5,7~8,10
```


### 第111题：编程题，对象的扁平化
```js
var entry = {
  a: {
    b: {
      c: {
        dd: 'abcdd'
      }
    },
    d: {
      xx: 'adxx'
    },
    e: 'ae'
  }
}

// 要求转换成如下对象
var output = {
  'a.b.c.dd': 'abcdd',
  'a.d.xx': 'adxx',
  'a.e': 'ae'
}
```
一开始想到肯定是需要递归的，于是我写出第一版（错误）代码：
```js
function fns(o){
	var obj = {};
	var str = ""
	function fn(a) {
		Object.keys(a).forEach(v=>{
			if(typeof a[v] === "object"){
				str += (v+".");
				fn(a[v]);
			}else{
				str += v;
				obj[str] = a[v];
				str = ""
			}
		})
	}
	fn(o);
	return obj;
}
```
可是输出结果不正确，丢掉了一些key（已经遍历过的key），如下
```js
{
  a.b.c.dd: "abcdd"
  d.xx: "adxx"
  e: "ae"
}
```
所以必须要找个地方把父母的key存起来，在递归的第二个参数存起来即可。
```js
function flatObj(obj, parentKey = "", result = {}) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      let keyName = `${parentKey}${key}`;
      if (typeof obj[key] === 'object')
        flatObj(obj[key], keyName+".", result)
      else
        result[keyName] = obj[key];
    }
  }
  return result;
}
```