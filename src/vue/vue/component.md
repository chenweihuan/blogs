## 简单的弹窗组件实现
使用插槽写一个弹窗组件，1s后消失。其实我写了很多遍，就是每次用都忘记，真奇葩！

1. 新建Tip.vue
```
<template>
  <div class="tip-container flex-item">
    //具名插槽，灵活控制弹窗内容
    <slot name="main"></slot>
  </div>
</template>
<script>
export default {
  created() {
    setTimeout(()=>{
      this.$emit('tip-vanish');
    },2000)
  }
};
</script>
<style>
...
<style>
```
2. 引用Tip组件
```
<template v-if="tipFlag">
  <div>
    <Tip @tip-vanish="this.tipFlag = false">
      <div slot="main" v-html="tipText"></div>
    </Tip>
  </div>
</template>
<script>
export default {
  data(){
    return {
      tipFlag:false,
      tipText:'恭喜你分享成功 <br />  您额外获得一次抽奖机会'
    }
  }
};
</script>
```
这里使用v-html的原因是弹窗内容有可能是两行或者多行的呀，用 {{}} 进行数据绑定的时候，字符串换行是不生效的。

参考：[vue插槽](https://cn.vuejs.org/v2/guide/components-slots.html)