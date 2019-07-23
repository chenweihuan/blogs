## 如何安装Redux-DevTools

1. 谷歌商店安装Redux-DevTools

2. 修改store.js
```js
...
let store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
...
``` 

旧版的store.js：
```js
import { createStore,compose,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : ()=>{}
let store = createStore(rootReducer,compose(
     applyMiddleware(thunk),
     reduxDevtools
 ));

export default store;
```
但是控制台会报警告：window.devToolsExtension将会废弃，在下一个版本会删掉。
```
window.devToolsExtension` is deprecated in favor of `window.__REDUX_DEVTOOLS_EXTENSION__`, and will be removed in next version of Redux DevTools: https://git.io/fpEJZ
```