if (module.hot) {
  // 实现热更新
  module.hot.accept();
}
console.log([1, 2, 3].map(val => val * val));
