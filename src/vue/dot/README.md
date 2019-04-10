## 给 router-link 绑定事件

使用@click.native。  
vue 自己定义的标签 <router-link> 还有 组件<my-vue-template/> 是没有点击事件。 router-link 的作用是单纯的路由跳转，所以会阻止 click 等事件。所以需要使用@click.native 绑定事件，这是用于给组件的根元素直接监听原生事件（类似于\$element.addEventListener(click, callback)）的。

- [vue 文档 -- 将原生事件绑定到组件](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E5%B0%86%E5%8E%9F%E7%94%9F%E4%BA%8B%E4%BB%B6%E7%BB%91%E5%AE%9A%E5%88%B0%E7%BB%84%E4%BB%B6)
