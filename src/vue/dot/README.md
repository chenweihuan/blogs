## 给 router-link 绑定事件

使用@click.native。  
vue 自己定义的标签 <router-link> 还有 组件<my-vue-template/> 是没有点击事件。 router-link 的作用是单纯的路由跳转，所以会阻止 click 等事件。所以需要使用@click.native 绑定事件，这是用于给组件的根元素直接监听原生事件（类似于\$element.addEventListener(click, callback)）的。

- [vue 文档 -- 将原生事件绑定到组件](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)

## 监听route的变化
想想啊，watch方法既然可以监听data中的属性变化，同样也可以监听 $route 的变化。
```js
watch(){
    $route(to,from) {
        console.log(to,from)
    }
}
```

## disabled的input元素不会执行父组件的click事件
先上代码：
```html
<div @click="test" style="width:400px;height:200px;border:1px solid;">
  <input type="text" disabled/>
</div>

methods: {
  test(e){
    console.log(e)
  }
}
```
在谷歌浏览器中，点击input元素也会触发test事件；但是在火狐浏览器中，点击input元素并不会触发test事件。  
解决方案：css添加pointer-events属性，让input元素不要成为鼠标事件的target。
```html
<input type="text" disabled style="pointer-events: none"/>
```

