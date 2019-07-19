## 实现防抖/节流HOC（高阶组件）

### 1.在components下新建Throttle.js
```
// fn，防抖节流后执行的函数
// wait，间隔时间，默认50ms
// isDebounce，true为防抖，false为节流
// ctx，fn函数的this指向
const throttle = function(fn, wait=50, isDebounce, ctx) {
  let timer
  let lastCall = 0
  return function (...params) {
    if (isDebounce) {//防抖函数
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(ctx, params)
      }, wait)
    } else {//节流函数
      const now = new Date().getTime()
      if (now - lastCall < wait) return
      lastCall = now
      fn.apply(ctx, params)
    }
  }
}

export default {
    name: 'Throttle',
    abstract: true,
    props: {
      time: Number,
      events: String,
      isDebounce: {
        type: Boolean,
        default: false
      },
    },
    created () {
      // 可绑定多个事件，例如"click,mouseleave"
      this.eventKeys = this.events.split(',')
      this.originMap = {}
      this.throttledMap = {}
    },
    render() {
        //只拿第一个子节点虚拟DOM，所以如果要给多个节点添加HOC，需要分别用<Throttle></Throttle>包裹
        const vnode = this.$slots.default[0]
        this.eventKeys.forEach((key) => {
            const target = vnode.data.on[key]
            // 如果多次绑定同一个事件，取第一个绑定的函数
            if (target === this.originMap[key] && this.throttledMap[key]) {
                vnode.data.on[key] = this.throttledMap[key]
            } else if (target) {
                this.originMap[key] = target
                this.throttledMap[key] = throttle(target, this.time, this.isDebounce, vnode)
                vnode.data.on[key] = this.throttledMap[key]
            }
        })
        return vnode
    }
}
```

### 2.在main.js中引入Throttle.js
```
import Throttle from './components/Throttle'
Vue.component('Throttle', Throttle)
```

### 3.使用
```
<template>
  <div id="app">
    <Throttle :time="1000" events="click">
      <button @click="fn">2222</button>
    </Throttle>
    <Throttle :time="3300" events="mouseleave" :isDebounce="true">
        <button @mouseleave.prevent="fn">click</button>
    </Throttle>
  </div>
</template>

<script>
export default {
  methods: {
    fn() { console.log(222) }
  }
};
</script>
```
注意，单个\<Throttle><\/Throttle>只能包含一个button节点。