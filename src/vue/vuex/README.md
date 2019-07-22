## vuex的基本项目结构

```
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    └── modules
        ├── productStore.js       # 产品1模块
        └── product2Store.js   # 产品2模块
```
参考[官方例子](https://github.com/vuejs/vuex/tree/dev/examples/shopping-cart)

### namespaced的作用
我们会遇到一个情况，我们不同模块的Store中可能会存在相同方法名的Mutation、Getter和Action，这时候我们调用commit()会调用所有相同方法名的Mutation；当我们Getter方法名重复时，会报错；当我们调用dispatch()方法时，所有相同方法名的Action都会被执行。  
这明显是不符合常理的，它会对其他模块的数据造成污染和异常。但在一个大型项目中，我们往往是多人协同开发的，所以我们很难避免大家在未告知的情况下，定义了相同名字的Mutation、Getter和Action。

```
...
export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}
...
```
<strong>访问State</strong>
```
this.$store.state.productContent
=>
this.$store.state.productStore.productContent
```
<strong>访问Getter</strong>
```
this.$store.getters.getProductContent
=>
this.$store.getters["productStore/getProductContent"]
```
<strong>访问Mutation</strong>
```
this.commit("changeProductContent","新数据")
=>
this.$store.commit("productStore/changeProductContent","新数据")
```
<strong>访问Action</strong>
```
this.dispatch("changeProductContentByAction","新数据")
=>
this.$store.dispatch("productStore/changeProductContentByAction","新数据")
```

