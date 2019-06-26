## 水仙花数

#### 1. 定义  
水仙花数是指一个 n 位数 ( n≥3 )，它的每个位上的数字的 n 次幂之和等于它本身。（例如：1^3 + 5^3+ 3^3 = 153）。水仙花数又称阿姆斯特朗数。三位的水仙花数共有4个：153，370，371，407。

#### 2. 代码实现
```
function getWater(num){
    let bai = Math.floor(num/100);//百位
    let shi = Math.floor((num%100)/10);//十位
    let ge = num%10;//个位
    return Math.pow(bai,3)+Math.pow(shi,3)+Math.pow(ge,3) === num? true: false
}
function fn(num) {
	let arr = [];
	for(let i =100;i<num;i++){
	    if(getWater(i))arr.push(i);
	}
	return arr;
}
console.log(fn(1000));// [153, 370, 371, 407]
```

