## vuex-pathify的项目结构

```
└── store
    ├── index.js          # 我们组装模块并导出 store 的地方
    ├── actions.js        # 根级别的 action
    ├── mutations.js      # 根级别的 mutation
    ├── pathify.js        # 配置vuex-pathify
    └── modules
        ├── productStore.js       # 产品1模块
        └── product2Store.js   # 产品2模块
```

> Pathify's aim is to simplify the overall Vuex development experience.  
> vuex-pathify其实就是简化vuex的整体开发过程，提升体验。


