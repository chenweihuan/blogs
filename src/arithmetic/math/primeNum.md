## 找到100以内的质数

1. 定义
质数，又称素数，定义为在大于1的自然数中，除了1和它本身以外不再有其他因数。

2. 代码实现  
思路一：暴力拆解，验证一个数num是否是质数，用一个for循环，只要num%i===0，num就不是质数，否则就是。
```js
function fn(num){
    for(let i=2;i<=Math.sqrt(num);i++){//i小于或者等于num的开方即可，因为开方的两边是对称的
        if(num%i === 0)return false;
    }
    return true;
}
function getZhishu(end){
    var res = [];
    for(let i=2;i<end;i++){
        if(fn(i))res.push(i);
    }
    return res;
}
```

思路二：先把所有2的倍数去掉，然后再把3的倍数去掉，再把5的倍数去掉.....
```js
function fn(N){
    let res = [];// 用于存素数结果集
    let nums = [];// 待筛选的数据集
    for(let x=2;x<=N;x++){
        //if(x%2!==0);//此处初始化的时候，也可直接筛掉2的倍数数据减半。
        nums.push(x);
    }
    function PrimeFn(data){// 递归函数
        let p = data.shift();// 数组最前端的一个数即素数，拿出来存起，并作为下次筛除的分母。
        res.push(p);
        let t = [];
        for(let v of data){
            if(v%p!==0)t.push(v)// 不能整除的放到临时数组t存起来。
        }
        // t 是下次待筛数组，元素个数会越来越少，若还有就进行一次递归。
        if(t.length>0)PrimeFn(t);
    }
    PrimeFn(nums);
    return res;
}
```
<div align="center"><img src="./image/primeNum.gif"/></div>
